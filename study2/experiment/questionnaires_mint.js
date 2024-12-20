const questionnaires_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Instructions",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h2>Instructions</h2>" +
                            "<p>In this study, you will be asked to complete various questionnaires. Please read each question carefully, and don't hesitate to take breaks in-between them.</p>" +
                            "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, failed attention checks...).</li>" +
                            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related, and opposite questions to be inversely related). " +
                            "<p style='color:green;'>At the end, you will be shown a <b>graph</b> summarizing your answers, and provided with an explanation about why we are asking all of this.<p>" +
                            "</div>" +
                            "<div style='width: 40%;'>" +
                            "<img src='https://www.simplypsychology.org/wp-content/uploads/psychology.jpeg' alt='Illustration' style='width: 100%;'>" +
                            "</div>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

// Items ================================================
const items_mint = {
    MINT_UrIn_1: "Blabla question 1",
    MINT_UrIn_2: "Blabla question 2",
    MINT_UrIn_3: "Blabla question 3",
}

// Generation code ================================================
// Convernience function to shuffle an object (used internally)
function shuffleObject(obj) {
    const entries = Object.entries(obj)
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[entries[i], entries[j]] = [entries[j], entries[i]]
    }
    return Object.fromEntries(entries)
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_mint(items, required = true, ticks = ["Disagree", "Agree"]) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        questions.push(q)
    }

    return { elements: questions }
}

// Questionnaire ================================================
const questionnaire_mint = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_mint(items_mint),
        }
    },
    data: {
        screen: "questionnaire_mint",
    },
}

// TODO: add attention checks + graph stuff
