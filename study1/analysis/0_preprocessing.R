library(jsonlite)


# path for data
# path <- "C:/Users/asf25/Box/InteroceptionScale/"
path <- "C:/Users/domma/Box/Data/InteroceptionScale/"
path <- "C:/Users/dmm56/Box/Data/InteroceptionScale/"

# JsPsych experiment ------------------------------------------------------

files <- list.files(path, pattern = "*.csv")

alldata <- data.frame()
for (file in files) {
  cat(".")
  rawdata <- read.csv(paste0(path, "/", file))

  # Initialize participant-level data
  dat <- rawdata[rawdata$screen == "browser_info", ]


  data_ppt <- data.frame(
    Participant = dat$participantID,
    Recruitment = dat$researcher,
    Condition = dat$condition,
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
  }

  data_ppt$Reward <- rawdata[rawdata$screen == "demographics_debrief", "Reward"]

  # Demographics
  demog <- jsonlite::fromJSON(rawdata[rawdata$screen == "demographic_questions", ]$response)

  demog$Education <- ifelse(demog$Education == "other", demog$`Education-Comment`, demog$Education)
  demog$`Education-Comment` <- NULL
  demog$Discipline <- ifelse(demog$Discipline == "other", demog$`Discipline-Comment`, demog$Discipline)
  demog$`Discipline-Comment` <- NULL
  demog$Discipline <- ifelse(!is.null(demog$Discipline), demog$Discipline, NA)
  demog$Student <- ifelse(!is.null(demog$Student), demog$Student, NA)
  demog$Country <- ifelse(!is.null(demog$Country), demog$Country, NA)
  demog$Ethnicity <- ifelse(!is.null(demog$Ethnicity), demog$Ethnicity, NA)
  demog$Ethnicity <- ifelse(demog$Ethnicity == "other", demog$`Ethnicity-Comment`, demog$Ethnicity)
  demog$`Ethnicity-Comment` <- NULL

  demog <- as.data.frame(demog)
  data_ppt <- cbind(data_ppt, demog)

  # Feedback
  feedback <- jsonlite::fromJSON(rawdata[rawdata$screen == "experiment_feedback", "response"])
  data_ppt$Experiment_Enjoyment <- ifelse(is.null(feedback$Feedback_Enjoyment), NA, feedback$Feedback_Enjoyment)
  data_ppt$Experiment_Feedback <- ifelse(is.null(feedback$Feedback_Text), NA, feedback$Feedback_Text)

  # Questionnaire
  mint <- jsonlite::fromJSON(rawdata[rawdata$screen == "intero_questionnaire", "response"])
  mint <- as.data.frame(mint)
  data_ppt <- cbind(data_ppt, mint)

  alldata <- rbind(data_ppt, alldata)
}


alldata[is.na(alldata$Prolific_ID), ]
# Attention checks --------------------------------------------------------
checks <- data.frame(
  Sexual_State_A = alldata$Sexual_State_A / 6,
  Anxious_SkinThermo_A = 1 - alldata$Anxious_SkinThermo_A / 6,
  Nociception_ColonBladder_A = 1 - alldata$Nociception_ColonBladder_A / 6,
  Sensitivity_Gastric_A = alldata$Sensitivity_Gastric_A / 6,
  Accuracy_Genital_A = 1 - alldata$Accuracy_Genital_A / 6,
  Sensitivity_Cardiac_A = alldata$Sensitivity_Cardiac_A / 6,
  Accuracy_Respiratory_A = 1 - alldata$Accuracy_Respiratory_A / 6,
  Confusion_ColonBladder_A = alldata$Confusion_ColonBladder_A / 6
)
checks$Score <- rowMeans(checks)
checks$Prolific_ID <- alldata$Prolific_ID
checks$Experiment_Duration <- alldata$Experiment_Duration
checks$Reward <- alldata$Reward
checks <- checks[!is.na(checks$Prolific_ID), ]
checks[checks$Prolific_ID=="672b6ad098ad5f2f5867fb6b", c("Prolific_ID", "Experiment_Duration", "Score", "Reward")]

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
