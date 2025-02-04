library(jsonlite)
library(progress)

# path for data

# path <- "C:/Users/maisi/Box/InteroceptionScale/study2"
path <- "C:/Users/domma/Box/Data/InteroceptionScale/study2/"

# JsPsych experiment ------------------------------------------------------

files <- list.files(path, pattern = "*.csv")


# Progress bar
progbar <- progress_bar$new(total = length(files))

alldata <- data.frame()
for (file in files) {
  progbar$tick()
  rawdata <- read.csv(paste0(path, "/", file))


  # Initialize participant-level data
  dat <- rawdata[rawdata$screen == "browser_info", ]

  data_ppt <- data.frame(
    Participant = dat$participantID,
    Recruitment = dat$researcher,
    Experiment_StartDate = as.POSIXct(paste(dat$date, dat$time), format = "%d/%m/%Y %H:%M:%S"),
    Experiment_Duration = rawdata[rawdata$screen == "demographics_debrief", "time_elapsed"] / 1000 / 60,
    Browser_Version = paste(dat$browser, dat$browser_version),
    Mobile = dat$mobile,
    Platform = dat$os,
    Screen_Width = dat$screen_width,
    Screen_Height = dat$screen_height
  )

  if("prolific_id" %in% colnames(dat)){
    data_ppt$Prolific_ID <- dat$prolific_id
  } else {
    stop("Not prolific")
  }

  data_ppt$Reward <- rawdata[rawdata$screen == "demographics_debrief", "Reward"]

  # Demographics
  resp <- jsonlite::fromJSON(rawdata[rawdata$screen == "demographic_questions", ]$response)

  # Education
  data_ppt$Education <- ifelse(resp$Education == "other", resp$`Education-Comment`, resp$Education)

  data_ppt$Student <- ifelse(!is.null(resp$Student), resp$Student, NA)
  data_ppt$Country <- ifelse(!is.null(resp$Country), resp$Country, NA)

  # Ethnicity
  data_ppt$Ethnicity <- ifelse(!is.null(resp$Ethnicity), resp$Ethnicity, NA)
  data_ppt$Ethnicity <- ifelse(resp$Ethnicity == "other", resp$`Ethnicity-Comment`, resp$Ethnicity)

  # BMI
  data_ppt$Height <- ifelse(!is.null(resp$Height_ft), resp$Height_cm / 100, resp$Height_ft * 0.3048)
  data_ppt$Weight <- ifelse(!is.null(resp$Weight_st), resp$Weight_kg, resp$Weight_st * 6.35029)
  data_ppt$BMI <- data_ppt$Weight / data_ppt$Height^2


  # Feedback
  feedback <- jsonlite::fromJSON(rawdata[rawdata$screen == "experiment_feedback", "response"])
  data_ppt$Experiment_Enjoyment <- ifelse(is.null(feedback$Feedback_Enjoyment), NA, feedback$Feedback_Enjoyment)
  data_ppt$Experiment_Quality <- ifelse(is.null(feedback$Feedback_Quality), NA, feedback$Feedback_Quality)
  data_ppt$Experiment_Feedback <- ifelse(is.null(feedback$Feedback_Text), NA, feedback$Feedback_Text)

  # Mint questionnaire
  mint <- jsonlite::fromJSON(rawdata[rawdata$screen == "questionnaire_mint", "response"])
  names(mint) <- as.character(sapply(names(mint), function(x) gsub("InteroceptiHypervigilance", "InteroceptiveHypervigilance", x)))
  names(mint) <- as.character(sapply(names(mint), function(x) gsub("Interoceptive", "MINT_Interoceptive", x)))
  data_ppt <- cbind(data_ppt, as.data.frame(mint))

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
  data_ppt$Disorders_Psychiatric <- paste0(v, collapse = "; ")

  if(!is.null(mental$Disorders_PsychiatricTreatment)) {
    v <- mental$Disorders_PsychiatricTreatment
    v[grep("Antidepressant", v)] <- "Antidepressant"
    v[grep("Anxiolytic", v)] <- "Anxiolytic"
    v[grep("LITHIUM", v)] <- "Mood Stabilizers"
    v[grep("Mindfulness", v)] <- "Mindfulness"
    v[grep("CBT", v)] <- "Psychotherapy"
    v[grep("Lifestyle", v)] <- "Lifestyle"
    v[grep("none", v)] <- NA
    data_ppt$Disorders_PsychiatricTreatment <- paste0(v, collapse = "; ")
  } else {
    data_ppt$Disorders_PsychiatricTreatment <- NA
  }

  somatic <- jsonlite::fromJSON(rawdata[rawdata$screen == "questions_somatichealth", "response"])
  somatic$Disorders_Somatic_Instructions <- NULL
  somatic <- somatic[grep("-Comment", names(somatic), invert=TRUE)]
  for(s in names(somatic)) {
    somatic[[s]] <- ifelse(somatic[[s]] == "other", paste0("Other ", gsub("Disorders_Somatic_", "", s)), somatic[[s]])
  }
  somatic <- unlist(somatic[sapply(somatic, function(x) all(x != "none"))])
  somatic[grep("IBS", somatic)] <- "IBS"
  somatic[grep("Lactose ", somatic)] <- "Lactose"
  somatic[grep("Gluten Intolerance", somatic)] <- "Gluten"
  somatic[grep("palpitations ", somatic)] <- "Cardiac Arrhythmia"
  data_ppt$Disorders_Somatic <- paste0(somatic, collapse = "; ")

  alldata <- rbind(data_ppt, alldata)
}


unique(alldata$Disorders_Psychiatric)
unique(alldata$Disorders_PsychiatricTreatment)
unique(alldata$Disorders_Somatic)
unique(alldata$Education)
unique(alldata$Ethnicity)

# Attention checks --------------------------------------------------------
checks <- data.frame(
  MINT = alldata$MINT_AttentionCheck_1/ 6,
  TAS = 1 - (alldata$TAS_AttentionCheck_1 - 1) / 4,
  PI18 = 1 - alldata$PI18_AttentionCheck_1 / 5,
  CEFSA = alldata$CEFSA_AttentionCheck_1 / 4,
  MAIA = 1 - alldata$MAIA_AttentionCheck_1 / 6,
  IAS = (alldata$IAS_AttentionCheck_1 - 1) / 4,
  BPQ = 1 - alldata$BodyAwareness_AttentionCheck_1 / 5
)
checks$Score <- rowMeans(checks)
checks$Prolific_ID <- alldata$Prolific_ID
checks$Experiment_Duration <- alldata$Experiment_Duration
checks$Reward <- alldata$Reward
checks <- checks[!is.na(checks$Prolific_ID), ]
checks <- checks[order(checks$Score, decreasing = TRUE), ]
# checks[checks$Prolific_ID=="66736dd26745b3fe0afb8993", c("Prolific_ID", "Experiment_Duration", "Score", "Reward")]

# Hi, unfortunately, we can't find your data (and Prolific information suggests that you did not finish the experiment?) Did anything go wrong? Sorry for that!


# Anonymize ---------------------------------------------------------------
alldata$Prolific_ID <- NULL

# Generate IDs
ids <- paste0("S", format(sprintf("%03d", 1:nrow(alldata))))
# Sort Participant according to date and assign new IDs
names(ids) <- alldata$Participant[order(alldata$Experiment_StartDate)]
# Replace IDs
alldata$Participant <- ids[alldata$Participant]


# Save --------------------------------------------------------------------

write.csv(alldata, "../data/rawdata_participants.csv", row.names = FALSE)


