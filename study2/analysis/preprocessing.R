library(jsonlite)
library(progress)

# path for data 

path <- "C:\Users\maisi\Box\InteroceptionScale\study2"


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
  
  
  # Discipline 
  
  # Ethnicity 
  
  
  # Feedback
  feedback <- jsonlite::fromJSON(rawdata[rawdata$screen == "experiment_feedback", "response"])
  data_ppt$Experiment_Enjoyment <- ifelse(is.null(feedback$Feedback_Enjoyment), NA, feedback$Feedback_Enjoyment)
  data_ppt$Experiment_Feedback <- ifelse(is.null(feedback$Feedback_Text), NA, feedback$Feedback_Text)

  
  # Attention checks --------------------------------------------------------
  checks <- data.frame(
    MINT_AttentionCheck_1 = alldata$MINT_AttentionCheck_1/ 6,
    TAS_AttentionCheck_1 = 1 - alldata$TAS_AttentionCheck_1 / 5,
    I18_AttentionCheck_1= 1 - alldata$I18_AttentionCheck_/ 5,
    CEFSA_AttentionCheck_1 = alldata$CEFSA_AttentionCheck_1 / 4,
    MAIA_AttentionCheck_1 = 1 - alldata$MAIA_AttentionCheck_1/ 6,
    IAS_AttentionCheck_1 = alldata$IAS_AttentionCheck_1/ 5,
    BodyAwareness_AttentionCheck_1A = 1 - alldata$BodyAwareness_AttentionCheck_1/ 5,
  )
  checks$Score <- rowMeans(checks)
  checks$Prolific_ID <- alldata$Prolific_ID
  checks$Experiment_Duration <- alldata$Experiment_Duration
  checks$Reward <- alldata$Reward
  checks <- checks[!is.na(checks$Prolific_ID), ]
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
  
  
  