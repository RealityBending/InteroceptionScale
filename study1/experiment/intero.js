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
                            "<p>In the following questionnaire, you will be asked various questions about the way you feel and you think about your body. " +
                            "We are interested in understanding <b>what questions are related</b> for you as compared to other people. " +
                            "There are no right or wrong answers.</p>" +
                            "<p>We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related). " +
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

// Items ================================================
const intero_items = {
    Sexual_State_Q1: "Sexual Arousal State 1",
    Sexual_Cardiac_Q1: "Sexual Arousal Cardiac 1",
    Sexual_Respiratory_Q1: "Sexual Arousal Respiratory 1",
    Sexual_Gastric_Q1: "Sexual Arousal Gastric 1",
    Sexual_Genital_Q1: "Sexual Arousal Genital 1",
    Sexual_SkinThermo_Q1: "Sexual Arousal Skin Thermoregulation 1",
    Sexual_ColonBladder_Q1: "Sexual Arousal Colon Bladder 1",
    Anxious_State_Q1: "Anxious Arousal State 1",
    Anxious_Cardiac_Q1: "Anxious Arousal Cardiac 1",
    Anxious_Respiratory_Q1: "Anxious Arousal Respiratory 1",
    Anxious_Gastric_Q1: "Anxious Arousal Gastric 1",
    Anxious_Genital_Q1: "Anxious Arousal Genital 1",
    Anxious_SkinThermo_Q1: "Anxious Arousal Skin Thermoregulation 1",
    Anxious_ColonBladder_Q1: "Anxious Arousal Colon Bladder 1",
    Nociception_State_Q1: "Nociception State 1",
    Nociception_Cardiac_Q1: "Nociception Cardiac 1",
    Nociception_Respiratory_Q1: "Nociception Respiratory 1",
    Nociception_Gastric_Q1: "Nociception Gastric 1",
    Nociception_Genital_Q1: "Nociception Genital 1",
    Nociception_SkinThermo_Q1: "Nociception Skin Thermoregulation 1",
    Nociception_ColonBladder_Q1: "Nociception Colon Bladder 1",
    Sensitivity_State_Q1: "Sensitivity State 1",
    Sensitivity_Cardiac_Q1: "Sensitivity Cardiac 1",
    Sensitivity_Respiratory_Q1: "Sensitivity Respiratory 1",
    Sensitivity_Gastric_Q1: "Sensitivity Gastric 1",
    Sensitivity_Genital_Q1: "Sensitivity Genital 1",
    Sensitivity_SkinThermo_Q1: "Sensitivity Skin Thermoregulation 1",
    Sensitivity_ColonBladder_Q1: "Sensitivity Colon Bladder 1",
    Accuracy_State_Q1: "Accuracy State 1",
    Accuracy_Cardiac_Q1: "Accuracy Cardiac 1",
    Accuracy_Respiratory_Q1: "Accuracy Respiratory 1",
    Accuracy_Gastric_Q1: "Accuracy Gastric 1",
    Accuracy_Genital_Q1: "Accuracy Genital 1",
    Accuracy_SkinThermo_Q1: "Accuracy Skin Thermoregulation 1",
    Accuracy_ColonBladder_Q1: "Accuracy Colon Bladder 1",
    Beliefs_State_Q1: "Beliefs State 1",
    Beliefs_Cardiac_Q1: "Beliefs Cardiac 1",
    Beliefs_Respiratory_Q1: "Beliefs Respiratory 1",
    Beliefs_Gastric_Q1: "Beliefs Gastric 1",
    Beliefs_Genital_Q1: "Beliefs Genital 1",
    Beliefs_SkinThermo_Q1: "Beliefs Skin Thermoregulation 1",
    Beliefs_ColonBladder_Q1: "Beliefs Colon Bladder 1",
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

// This functions takes the items and groups them by pages depending on the condition
function intero_makegroups(items, condition = "Domains") {
    items = shuffleObject(items) // Shuffle items

    if (condition == "Domains") {
        groups = {
            Sexual: [],
            Anxious: [],
            Nociception: [],
            Sensitivity: [],
            Accuracy: [],
            Beliefs: [],
        }

        for (const k in items) {
            groups[k.split("_")[0]].push({ [k]: items[k] })
        }
    } else if (condition == "Dimensions") {
        groups = {
            State: [],
            Cardiac: [],
            Respiratory: [],
            Gastric: [],
            Genital: [],
            SkinThermo: [],
            ColonBladder: [],
        }

        for (const k in items) {
            groups[k.split("_")[1]].push({ [k]: items[k] })
        }
    } else if (condition == "Random") {
        groups = {
            Page1: [],
            Page2: [],
            Page3: [],
        }

        // Max 14 items per page
        for (const [index, k] of Object.keys(items).entries()) {
            groups[`Page${Math.floor(index / 14) + 1}`].push({ [k]: items[k] })
        }
    }
    return shuffleObject(groups)
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function intero_makequestions(groups, required = true, ticks = ["Disagree", "Agree"]) {
    pages = []

    // Make questions
    for (const g in groups) {
        for (const [index, element] of groups[g].entries()) {
            key = Object.keys(element)[0]
            q = {
                title: element[key],
                name: key,
                type: "rating",
                displayMode: "buttons",
                // scaleColorMode: "colored",
                isRequired: required,
                minRateDescription: ticks[0],
                maxRateDescription: ticks[1],
                rateValues: [0, 1, 2, 3, 4, 5, 6],
            }
            groups[g][index] = q
        }
        pages.push({ elements: groups[g] })
    }

    return pages
}

// Questionnaire ================================================
// The condition is randomly selected when this script is read
const intero_condition = ["Domains", "Dimensions", "Random"][Math.floor(Math.random() * 3)]
// const intero_condition = "Random"

const intero_questionnaire = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your personality",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pageNextText: "Next",
            pagePrevText: "Previous",
            showProgressBar: "aboveHeader",
            pages: intero_makequestions(intero_makegroups(intero_items, intero_condition)),
        }
    },
    data: {
        screen: "intero_questionnaire",
        condition: intero_condition,
    },
}

// Make plot ========================================================================================================
function intero_plotdata(screen) {
    let data = jsPsych.data.get().filter({ screen: screen })
    data = data["trials"][0]["response"]

    // Compute average and rescale to percentage
    cardiac = Object.keys(data).filter((key) => key.includes("Cardiac"))
    cardiac = cardiac.map((key) => data[key]).reduce((a, b) => a + b) / cardiac.length
    cardiac = (cardiac / 6) * 100

    respiratory = Object.keys(data).filter((key) => key.includes("Respiratory"))
    respiratory = respiratory.map((key) => data[key]).reduce((a, b) => a + b) / respiratory.length
    respiratory = (respiratory / 6) * 100

    state = Object.keys(data).filter((key) => key.includes("State"))
    state = state.map((key) => data[key]).reduce((a, b) => a + b) / state.length
    state = (state / 6) * 100

    // Prepare output
    var output = {
        names: ["Your Heart", "Your Breath", "State"],
        scores: [cardiac, respiratory, state],
        label: "Connectedness with each organ (%)",
    }
    return output
}

// Results
const intero_feedback = {
    type: jsPsychCanvasButtonResponse,
    on_load: function () {
        document.querySelector("canvas").style.removeProperty("display") // Force it to center
    },
    stimulus: function (c) {
        let data = intero_plotdata("intero_questionnaire")
        let ctx = c.getContext("2d")
        let plot = new Chart(
            ctx,
            make_radarplot(
                (names = data.names),
                (scores = data.scores),
                (minmax = [0, 100]),
                (label = data.label),
                (color = [0, 137, 123])
            )
        )
    },
    canvas_size: plot_getsize(),
    choices: ["Continue"],
    prompt:
        "<p>This chart represents how you relate to different body functions. <b>What does it mean?</b></p>" +
        "<p>From what we know so far, it seems like people vary a lot on these dimensions. However, we don't exactly know exactly what these differences mean yet (hence why we do this research).<br>" +
        "It seems like it is neither good or bad to score high on any of these, and that there is no 'normal': everybody is different!</p>",
}
