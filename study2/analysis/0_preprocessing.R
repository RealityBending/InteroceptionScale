library(jsonlite)
library(progress)


options(warn = 2) # Stop on warnings

# path <- "C:/Users/maisi/Box/InteroceptionScale/
# path <- "C:/Users/dmm56/Box/Data/InteroceptionScale/"
# path <- "C:/Users/domma/Box/Data/InteroceptionScale/"
path <- "C:/Users/asf25/Box/InteroceptionScale/"



# Convenience Functions ---------------------------------------------------

convert_feet_to_meters <- function(height) {
  height[height == "I'm 5ft8"] <- "5'8"
  height <- gsub("ft ", "'", tolower(height))
  height <- gsub("ft", "'", tolower(height))
  height <- gsub(" feet ", "'", tolower(height))
  height <- gsub(" in ", "", height)
  height <- gsub("in", "", height)
  height <- gsub(" inches", "", height)
  height <- gsub("' ", "'", height)
  height <- gsub("`", "'", height)
  height <- gsub("”", "'", height)
  height <- gsub("\"", "'", height)
  height[height == "6f 5"] <- "6'5"
  height[height == "54"] <- "5'4"
  height[height == "5’qq"] <- "5'11"
  height[height == "511"] <- "5'11"
  height[height == "6\"2"] <- "6'2"
  height[height == "62"] <- "6'2"
  height[height == "5<1"] <- "5'1"
  height[height == "5/9"] <- "5'9"
  height[height == "5.833"] <- "5'8.33"

  if(height=="176") return(1.76)
  # Remove extra spaces and quotes
  height <- trimws(gsub("\"", "", height))

  # Handle integer input like "6" (assume feet only, zero inches)
  if (grepl("^\\d+$", height)) {
    feet <- as.numeric(height)
    inches <- 0
  } else {
    # Split input based on common delimiters: ' (apostrophe), space, ., "," or "-", or " ft "
    parts <- unlist(strsplit(height, "[ ' .,’\\-]| ft "))

    # Extract feet and inches
    feet <- as.numeric(parts[1])
    inches <- ifelse(length(parts) > 1, as.numeric(parts[2]), 0)
  }

  # Convert to meters (1 foot = 0.3048 m, 1 inch = 0.0254 m)
  feet * 0.3048 + inches * 0.0254
}

convert_stones_to_kg <- function(weight) {
  weight <- gsub("st ", "'", weight)
  weight <- gsub("st", "'", weight)
  weight <- gsub("lbs", "", weight)
  weight <- gsub("lb", "", weight)
  weight <- gsub(" lb", "", weight)
  weight <- gsub("’", "'", weight)
  weight[weight == "58"] <- "5'8"
  weight[weight == "62"] <- "6'2"
  weight[weight == "64"] <- "6'4"
  weight[weight == "135"] <- "13'5"
  weight[weight == "125"] <- "12'5"
  weight <- trimws(gsub("\"", "", weight))

  # Handle integer input like "6" (assume stones only, zero pounds)
  if (grepl("^\\d+$", weight)) {
    stones <- as.numeric(weight)
    pounds <- 0
  } else {
    # Split input based on common delimiters: ' (apostrophe), space, ., "," or "-", or " st "
    parts <- unlist(strsplit(weight, "[ ' .,\\-]| st "))

    # Extract stones and pounds
    stones <- as.numeric(parts[1])
    pounds <- ifelse(length(parts) > 1, as.numeric(parts[2]), 0)
  }

  # Convert to kg (1 stone = 6.35029 kg, 1 pound = 0.453592 kg)
  stones * 6.35029 + pounds * 0.453592
}


# Run loop ----------------------------------------------------------------


files <- list.files(paste0(path, c("study2/", "study2sona/")), full.names = TRUE, pattern = "*.csv")


# Progress bar
progbar <- progress_bar$new(total = length(files))

alldata <- data.frame()
for (file in files) {
  progbar$tick()
  rawdata <- read.csv(file)


  # Initialize participant-level data
  dat <- rawdata[rawdata$screen == "browser_info", ]

  if(is.na(dat$prolific_id) && is.na(dat$researcher)) {
    print(paste0("skip (no 'exp' URLvar): ", gsub(path, "", file)))
    next
  }

  data_ppt <- data.frame(
    Participant = dat$participantID,
    Recruitment = dat$researcher,
    Experiment_StartDate = as.POSIXct(paste(dat$date, dat$time), format = "%d/%m/%Y %H:%M:%S"),
    Experiment_Duration = max(rawdata$time_elapsed) / 1000 / 60,
    Browser_Version = paste(dat$browser, dat$browser_version),
    Mobile = dat$mobile,
    Platform = dat$os,
    Screen_Width = dat$screen_width,
    Screen_Height = dat$screen_height
  )



  if (data_ppt$Recruitment == "prolific") {
    data_ppt$ID <- dat$prolific_id
    data_ppt$Condition <- "Prolific"
  } else if (data_ppt$Recruitment == "SONA") {
    data_ppt$ID <- dat$sona_id
    data_ppt$Condition <- dat$condition
  } else {
    stop("No ID")
  }


  data_ppt$Reward <- rawdata[rawdata$screen == "demographics_debrief", "Reward"]

  # Demographics
  resp <- jsonlite::fromJSON(rawdata[rawdata$screen == "demographic_questions", ]$response)

  data_ppt$Gender <- ifelse(!is.null(resp$Gender), resp$Gender, NA)
  data_ppt$Age <- ifelse(!is.null(resp$Age), resp$Age, NA)

  # Education


  data_ppt$Education <- ifelse(resp$Education == "other", resp$`Education-Comment`, resp$Education)
  data_ppt$Education <- ifelse(data_ppt$Education %in% c("HND (college)"), "High school", data_ppt$Education)
  # Detect "equivalent to a Bachelors" and "HND (college)" and convert to "Bachelor" and "High school"
  data_ppt$Education <- ifelse(stringr::str_detect(data_ppt$Education, "equivalent to a Bachelors"), "Bachelor", data_ppt$Education)
  data_ppt$Education <- ifelse(data_ppt$Education %in% c("3rd year BSc", "Bachelor non-university", "graduate certificate (Certificate IV)"), "Bachelor", data_ppt$Education)
  data_ppt$Education <- ifelse(data_ppt$Education %in% c("NVQ 4", "Professional", "Vocational degree.", "level 3 nvq's", "tech college", "College - HND"), "High school", data_ppt$Education)

  data_ppt$Student <- ifelse(!is.null(resp$Student), resp$Student, NA)
  data_ppt$Country <- ifelse(!is.null(resp$Country), resp$Country, NA)

  # Ethnicity
  data_ppt$Ethnicity <- ifelse(!is.null(resp$Ethnicity), resp$Ethnicity, NA)
  data_ppt$Ethnicity <- ifelse(!is.na(resp$Ethnicity) && resp$Ethnicity == "other", resp$`Ethnicity-Comment`, resp$Ethnicity)
  data_ppt$Ethnicity <- ifelse(data_ppt$Ethnicity %in% c("Southern European"), "White", data_ppt$Ethnicity)
  data_ppt$Ethnicity <- ifelse(data_ppt$Ethnicity %in% c("African"), "Black", data_ppt$Ethnicity)
  data_ppt$Ethnicity <- ifelse(data_ppt$Ethnicity %in% c("Maori"), "Other", data_ppt$Ethnicity)
  data_ppt$Ethnicity <- ifelse(data_ppt$Ethnicity %in% c("Mixed white black caribbean"), "Mixed", data_ppt$Ethnicity)
  data_ppt$Ethnicity <- ifelse(data_ppt$Ethnicity %in% c("Prefer not to say"), NA, data_ppt$Ethnicity)

  # BMI
  data_ppt$Height <- ifelse(is.null(resp$Height_ft), resp$Height_cm / 100, convert_feet_to_meters(resp$Height_ft))
  if ("3y39b5pwby" %in% data_ppt$Participant){
    data_ppt$Height[data_ppt$Participant == "3y39b5pwby"] <- data_ppt$Height[data_ppt$Participant == "3y39b5pwby"] * 100
  }
  if (!is.na(data_ppt$Height) && data_ppt$Height > 2.5) stop("Height too high")
  data_ppt$Weight <- ifelse(is.null(resp$Weight_st),
    ifelse(is.null(resp$Weight_kg), NA, resp$Weight_kg),
    convert_stones_to_kg(resp$Weight_st)
  )
  data_ppt$Weight[data_ppt$Weight %in% c(45259, 300)] <- NA
  if (!is.na(data_ppt$Weight) && data_ppt$Weight > 300) stop("Weight too high")
  data_ppt$BMI <- data_ppt$Weight / data_ppt$Height^2
  if (!is.na(data_ppt$BMI) && data_ppt$BMI > 100) stop("BMI too high")


  # Feedback
  feedback <- jsonlite::fromJSON(rawdata[rawdata$screen == "experiment_feedback", "response"])
  data_ppt$Experiment_Enjoyment <- ifelse(is.null(feedback$Feedback_Enjoyment), NA, feedback$Feedback_Enjoyment)
  data_ppt$Experiment_Quality <- ifelse(is.null(feedback$Feedback_Quality), NA, feedback$Feedback_Quality)
  data_ppt$Experiment_Feedback <- ifelse(is.null(feedback$Feedback_Text), NA, feedback$Feedback_Text)

  # Wearables
  wearables <- jsonlite::fromJSON(rawdata[rawdata$screen == "demographics_wearables", "response"])
  data_ppt$Physical_Active <- wearables$Physical_Active
  data_ppt$Physical_Workout <- wearables$Physical_Workout
  data_ppt$Wearables_Number <- ifelse(all(wearables$Wearables_Ownership == "none"), 0, length(wearables$Wearables_Ownership))
  data_ppt$Wearables_Heart <- ifelse(is.null(wearables$Wearables_Heart), "Not owning", wearables$Wearables_Heart)
  data_ppt$Wearables_HeartImportance <- ifelse(is.null(wearables$Wearables_HeartImportance), NA, wearables$Wearables_HeartImportance)
  data_ppt$Wearables_Steps <- ifelse(is.null(wearables$Wearables_Steps), "Not owning", wearables$Wearables_Steps)
  data_ppt$Wearables_StepsImportance <- ifelse(is.null(wearables$Wearables_StepsImportance), NA, wearables$Wearables_StepsImportance)
  data_ppt$Wearables_Sleep <- ifelse(is.null(wearables$Wearables_Sleep), "Not owning", wearables$Wearables_Sleep)
  data_ppt$Wearables_SleepImportance <- ifelse(is.null(wearables$Wearables_SleepImportance), NA, wearables$Wearables_SleepImportance)
  data_ppt$Wearables_CaloriesBurnt <- ifelse(is.null(wearables$Wearables_CaloriesBurnt), "Not owning", wearables$Wearables_CaloriesBurnt)
  data_ppt$Wearables_CaloriesBurntImportance <- ifelse(is.null(wearables$Wearables_CaloriesBurntImportance), NA, wearables$Wearables_CaloriesBurntImportance)
  data_ppt$Wearables_CalorieIntake <- ifelse(is.null(wearables$Wearables_CalorieIntake), "Not owning", wearables$Wearables_CalorieIntake)
  data_ppt$Wearables_CalorieIntakeImportance <- ifelse(is.null(wearables$Wearables_CalorieIntakeImportance), NA, wearables$Wearables_CalorieIntakeImportance)
  data_ppt$Wearables_Weight <- ifelse(is.null(wearables$Wearables_Weight), "Not owning", wearables$Wearables_Weight)
  data_ppt$Wearables_WeightImportance <- ifelse(is.null(wearables$Wearables_WeightImportance), NA, wearables$Wearables_WeightImportance)

  # Mint questionnaire
  mint <- as.data.frame(jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_mint", "response"]))
  if ("InteroceptiveFailures_1" %in% colnames(mint)) {
    data_mint <- data.frame(
      MINT_Deficit_CaCo_4 = mint$InteroceptiveFailures_1,
      MINT_Deficit_CaCo_5 = mint$InteroceptiveFailures_2,
      MINT_Deficit_CaCo_6 = mint$InteroceptiveFailures_3,
      MINT_Deficit_Urin_1 = mint$InteroceptiveFailures_4,
      MINT_Deficit_Urin_2 = mint$InteroceptiveFailures_5,
      MINT_Deficit_Urin_3 = mint$InteroceptiveFailures_6,
      MINT_Deficit_CaNo_7 = mint$InteroceptiveFailures_7,
      MINT_Deficit_CaNo_8 = mint$InteroceptiveFailures_8,
      MINT_Deficit_CaNo_9 = mint$InteroceptiveFailures_9,
      MINT_Deficit_Olfa_11 = mint$InteroceptiveFailures_11,
      MINT_Deficit_Olfa_12 = mint$InteroceptiveFailures_12,
      MINT_Deficit_Sati_15 = mint$InteroceptiveFailures_13,
      MINT_Deficit_Sati_13 = mint$InteroceptiveFailures_14,
      MINT_Deficit_Sati_14 = mint$InteroceptiveFailures_15,
      # MINT_Extra_1 <- mint$InteroceptiveSensitivityPleasure_4
      # MINT_Extra_2 <- mint$InteroceptiveSensitivityPleasure_5
      # MINT_Extra_3 <- mint$InteroceptiveSensitivityPleasure_6
      MINT_Awareness_StaS_31 = mint$InteroceptiveSensitivityPleasure_7,
      MINT_Awareness_StaS_33 = mint$InteroceptiveSensitivityPleasure_8,
      MINT_Awareness_StaS_32 = mint$InteroceptiveSensitivityPleasure_9,
      MINT_Awareness_ExAc_36 = mint$InteroceptiveSensitivityPleasure_10,
      # MINT_Extra_4 = mint$nteroceptiveSensitivityPleasure_11
      MINT_Awareness_ExAc_34 = mint$InteroceptiveSensitivityPleasure_12,
      MINT_Sensitivity_Derm_50 = mint$InteroceptiveSensitivityPleasure_13,
      # MINT_Extra_5 <- mint$InteroceptiveSensitivityPleasure_14
      MINT_Sensitivity_Derm_51 = mint$InteroceptiveSensitivityPleasure_15,
      MINT_Sensitivity_Resp_40 = mint$InteroceptiHypervigilance_1,
      MINT_Sensitivity_Resp_42 = mint$InteroceptiHypervigilance_2,
      MINT_Sensitivity_Resp_41 = mint$InteroceptiHypervigilance_3,
      MINT_Sensitivity_Card_39 = mint$InteroceptiHypervigilance_4,
      # MINT_Extra_6 <- mint$InteroceptiHypervigilance_5,
      MINT_Sensitivity_Card_38 = mint$InteroceptiHypervigilance_6,
      # MINT_Extra_7 <- mint$InteroceptiHypervigilance_7
      # MINT_Extra_8 <- mint$InteroceptiHypervigilance_8
      # MINT_Extra_9 <- mint$InteroceptiHypervigilance_9
      MINT_AttentionCheck_1 = mint$MINT_AttentionCheck_1
    )
  } else {
    data_mint <- as.data.frame(mint)
  }
  data_ppt <- cbind(data_ppt, data_mint)

  # Interoception questionnaires
  maia <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_maia", "response"])
  data_ppt <- cbind(data_ppt, as.data.frame(maia))

  ias <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_ias", "response"])
  data_ppt <- cbind(data_ppt, as.data.frame(ias))

  bpq <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_bpq", "response"])
  bpq$instructions_bpq <- NULL
  data_ppt <- cbind(data_ppt, as.data.frame(bpq))

  # Convergent questionnaires
  tas <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_tas", "response"])
  data_ppt <- cbind(data_ppt, as.data.frame(tas))

  cerq <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_cerq", "response"])
  cerq$instructions_cerq <- NULL
  data_ppt <- cbind(data_ppt, as.data.frame(cerq))

  ers <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_ers", "response"])
  ers$instructions_ers <- NULL
  data_ppt <- cbind(data_ppt, as.data.frame(ers))

  pi18 <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_pi18", "response"])
  pi18$instructions_pi18 <- NULL
  data_ppt <- cbind(data_ppt, as.data.frame(pi18))

  # Pathology questionnaires
  phq4 <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_phq4", "response"])
  phq4$instructions_phq4 <- NULL
  if (is.null(phq4$LifeSatisfaction)) phq4$LifeSatisfaction <- NA
  data_ppt <- cbind(data_ppt, as.data.frame(phq4))

  cefsa <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_cefsa", "response"])
  cefsa$instructions_cefsa <- NULL
  data_ppt <- cbind(data_ppt, as.data.frame(cefsa))

  # # Multiple Choices
  mental <- jsonlite::fromJSON(rawdata[rawdata$screen == "questions_mentalhealth", "response"])
  v <- mental$Disorders_Psychiatric
  v[grep("GAD", v)] <- "GAD"
  v[grep("Eating", v)] <- "Eating"
  v[grep("PTSD", v)] <- "PTSD"
  v[grep("MDD", v)] <- "MDD"
  v[grep("ADHD", v)] <- "ADHD"
  v[grep("Specific Phobias", v)] <- "Phobia"
  v[grep("Autism", v)] <- "ASD"
  v[grep("Addiction ", v)] <- "Addiction"
  v[grep("Social Anxiety ", v)] <- "Social Phobia"
  v[grep("Borderline", v)] <- "BPD"
  v[grep("Panic ", v)] <- "Panic"
  v[grep("Bipolar ", v)] <- "Bipolar"
  v[grep("Obsessive-Compulsive ", v)] <- "OCD"
  v[grep("none", v)] <- "None"
  data_ppt$Disorders_Psychiatric <- paste0(v, collapse = "; ")

  if (!is.null(mental$Disorders_PsychiatricTreatment)) {
    v <- mental$Disorders_PsychiatricTreatment
    v[grep("Antidepressant", v)] <- "Antidepressant"
    v[grep("Antipsychotic ", v)] <- "Antipsychotic"
    v[grep("Anxiolytic", v)] <- "Anxiolytic"
    v[grep("LITHIUM", v)] <- "Mood Stabilizers"
    v[grep("Mindfulness", v)] <- "Mindfulness"
    v[grep("CBT", v)] <- "Psychotherapy"
    v[grep("Lifestyle", v)] <- "Lifestyle"
    v[grep("Alternative ", v)] <- "Alternative"
    data_ppt$Disorders_PsychiatricTreatment <- paste0(v, collapse = "; ")
    if (all(data_ppt$Disorders_PsychiatricTreatment == "none")) {
      data_ppt$Disorders_PsychiatricTreatment <- NA
    }
  } else {
    data_ppt$Disorders_PsychiatricTreatment <- NA
  }

  somatic <- jsonlite::fromJSON(rawdata[rawdata$screen == "questions_somatichealth", "response"])
  somatic$Disorders_Somatic_Instructions <- NULL
  somatic <- somatic[grep("-Comment", names(somatic), invert = TRUE)]
  for (s in names(somatic)) {
    somatic[[s]] <- ifelse(somatic[[s]] == "other", paste0("Other ", gsub("Disorders_Somatic_", "", s)), somatic[[s]])
  }
  somatic <- unlist(somatic[sapply(somatic, function(x) all(x != "none"))])
  somatic[grep("IBS", somatic)] <- "IBS"
  somatic[grep("Lactose ", somatic)] <- "Lactose"
  somatic[grep("Gluten Intolerance", somatic)] <- "Gluten"
  somatic[grep("palpitations", somatic)] <- "Cardiac Arrhythmia"
  somatic[grep("GERD", somatic)] <- "Reflux"
  somatic[grep("COPD ", somatic)] <- "COPD"
  somatic[grep("Crohn's ", somatic)] <- "Crohn"
  somatic[grep("Sjogren's ", somatic)] <- "Sjogren"
  data_ppt$Disorders_Somatic <- paste0(somatic, collapse = "; ")

  alldata <- merge(data_ppt, alldata, all = TRUE)
}

unique(alldata$Disorders_Psychiatric)
unique(alldata$Disorders_PsychiatricTreatment)
unique(alldata$Disorders_Somatic)
unique(alldata$Education)
unique(alldata$Ethnicity)
unique(alldata$Recruitment)

# Attention checks --------------------------------------------------------
checks <- data.frame(
  MINT = alldata$MINT_AttentionCheck_1 / 6,
  TAS = (alldata$TAS_AttentionCheck_1 - 1) / 4,
  PI18 = 1 - alldata$PI18_AttentionCheck_1 / 5,
  CEFSA = alldata$CEFSA_AttentionCheck_1 / 4,
  MAIA = 1 - alldata$MAIA_AttentionCheck_1 / 6,
  IAS = (alldata$IAS_AttentionCheck_1 - 1) / 4,
  BPQ = 1 - alldata$BodyAwareness_AttentionCheck_1 / 5
)
checks$Score <- rowMeans(checks)
checks$ID <- alldata$ID
checks$Experiment_Duration <- alldata$Experiment_Duration
checks$Reward <- alldata$Reward
checks <- checks[!is.na(checks$ID), ]
checks <- checks[order(checks$Score, decreasing = TRUE), ]
# checks
# checks[checks$Prolific_ID=="5e736c9f4e8cdf034bdfa5c3", ]


# MINT: "I can always accurately answer to the extreme left on this question to show that I am reading it"
# MAIA: "I notice that I am being asked to respond all the way to the right"
# IAS: "I can always accurately choose the lowest option"
# BPQ: "Respond all the way to the right."
# TAS: "I am able to respond all the way to the left"
# PI18: "On the whole, I know I must press the highest option"
# CEFSA: "I feel that to show I'm being attentive I will press the lowest option"


# Hi, unfortunately, we can't find your data (and Prolific information suggests that you did not finish the experiment?) Did anything go wrong? Sorry for that!


# Anonymize ---------------------------------------------------------------
alldata$Prolific_ID <- NULL
alldata$Reward <- NULL

# Generate IDs
ids <- paste0("S", format(sprintf("%03d", 1:nrow(alldata))))
# Sort Participant according to date and assign new IDs
names(ids) <- alldata$Participant[order(alldata$Experiment_StartDate)]
# Replace IDs
alldata$Participant <- ids[alldata$Participant]


# Save --------------------------------------------------------------------
# restore default warnings settings
options(warn = 0)

write.csv(alldata, "../data/rawdata_participants.csv", row.names = FALSE)
