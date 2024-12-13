// Instructions ================================================
const intero_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "ConsentForm",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h1>About you and your body...</h1>" +
                            "<h2>Instructions</h2>" +
                            "<p>In the following questionnaires, you will be asked various questions about the way you feel and you think about your body. " +
                            "There are no right or wrong answers.</p>" +
                            "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, ...).</li>" +
                            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related). " +
                            "Please read carefully each item and consider it <i>on its own</i> (<b>without trying to relate it or remember your answers to previous items</b>), and don't hesitate to take breaks if you need.</p>" +
                            "<p style='color:green;'>At the end, you will be shown a <b>graph</b> summarizing your answers.<p>" +
                            "</div>" +
                            "<div style='width: 40%;'>" +
                            "<img src='https://www.newthinking.com/wp-content/uploads/2023/06/2-ways-to-improve-mind-body-scaled.jpg' alt='Mind and Body' style='width: 100%;'>" +
                            "</div>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

// MAIA Items ================================================
const MAIA_items = {
    
}