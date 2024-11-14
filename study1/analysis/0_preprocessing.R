library(jsonlite)


# path for data
path <- "C:/Users/asf25/Box/InteroceptionScale/data"
# path <- "C:/Users/domma/Box/Data/InteroceptionScale/data/"

# JsPsych experiment ------------------------------------------------------

files <- list.files(path, pattern = "*.csv")

alldata <- data.frame()
for (file in files) {
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
  #  Refresh_Rate = dat$vsync_rate


  # Demographics
  demog <- jsonlite::fromJSON(rawdata[rawdata$screen == "demographic_questions", ]$response)
  demog <- as.data.frame(t(demog))

  demog$Education <- ifelse(demog$Education == "other", demog$`Education-Comment`, demog$Education)
  demog$`Education-Comment` <- NULL
  data_ppt <- cbind(data_ppt, demog)


  # Feedback
  feedback <- jsonlite::fromJSON(rawdata[rawdata$screen == "experiment_feedback", "response"])
  data_ppt$Experiment_Enjoyment <- feedback$Feedback_Enjoyment
  data_ppt$Experiment_Feedback <- ifelse(is.null(feedback$Feedback_Text), NA, feedback$Feedback_Text)

  # Questionnaire + includes attention checks
  quest <- jsonlite::fromJSON(rawdata[rawdata$screen == "intero_questionnaire", "response"])
  quest <- as.data.frame(quest)
  data_ppt <- cbind(data_ppt, quest)

  alldata <- rbind(data_ppt, alldata)
}

# Save --------------------------------------------------------------------

write.csv(data_ppt, "../data/rawdata_participants.csv", row.names = FALSE)
