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
    Sexual_State_Q1: "I always know when I am sexually aroused",
    Sexual_State_Q2: "I always feel in my body if I am sexually aroused",
    Sexual_State_Q3: "My body is in a specific state when I am sexually aroused",
    Sexual_State_Q4: "Being sexually aroused corresponds to a very different bodily feeling compared to other states",
    Sexual_State_A1: "I always know that I am attentively doing a study", // 'A' stands for attention
    Sexual_Cardiac_Q1: "When I am sexually aroused, I always feel changes in the way my heart beats (e.g., faster or stronger)",
    Sexual_Respiratory_Q1: "When I am sexually aroused, I feel changes in the way I breath (e.g., faster, shallower, or less regular)",
    Sexual_Gastric_Q1: "When I am sexually aroused, I feel changes in my stomach (e.g., bloating, rumbling, discomfort)",
    Sexual_Genital_Q1: "When I am sexually aroused, I notice specific sensations in my genital area (e.g., tingling, warmth, wetness)",
    Sexual_SkinThermo_Q1: "When I am sexually aroused, I feel changes in my temperature (e.g., feeling warm or cold)",
    Sexual_SkinThermo_Q2: "When I am sexually aroused, I feel like some areas of my skin are getting sweaty (e.g., palms, back)",
    Sexual_SkinThermo_Q3: "When I am sexually aroused, I feel my mouth becoming dry",
    Sexual_ColonBladder_Q1: "When I am sexually aroused, I feel like I need to relieve myself (e.g., by urinating)",
    Anxious_State_Q1: "I always know when I am anxious",
    Anxious_State_Q2: "I always feel in my body if I am anxious",
    Anxious_State_Q3: "My body is in a specific state when I am anxious",
    Anxious_State_Q4: "Being anxious corresponds to a very different bodily feeling compared to other states",
    Anxious_Cardiac_Q1: "When I am anxious, I feel changes in the way my heart beats (e.g., faster or stronger)",
    Anxious_Cardiac_A1: "Even if I am anxious, I don't forget that I am currently doing a study",
    Anxious_Respiratory_Q1: "When I am anxious, I feel changes in the way I breathe (e.g., faster, shallower, or less regular)",
    Anxious_Gastric_Q1: "When I am anxious, I feel changes in my stomach (e.g., bloating, rumbling, discomfort)",
    Anxious_Genital_Q1: "When I am anxious, I notice specific sensations in my genital area (e.g., contracting, dryness)",
    Anxious_SkinThermo_Q1: "When I am anxious, I feel changes in my temperature (e.g., feeling warm or cold)",
    Anxious_SkinThermo_Q2: "When I am anxious, I feel like some areas of my skin are getting sweaty (e.g., palms, back)",
    Anxious_SkinThermo_Q3: "When I am anxious, I feel my mouth becoming dry",
    Anxious_SkinThermo_A1: "Even if I am anxious, I should now answer all the way to the left",
    Anxious_ColonBladder_Q1: "When I am anxious, I feel like I need to relieve myself (e.g., by urinating)",
    Nociception_State_Q1: "I always feel in my body if I am feeling ill",
    Nociception_State_Q2: "I can easily tell when I am feeling ill (e.g., nauseous or sick)",
    Nociception_Cardiac_Q1: "I often feel painful sensations coming from my heart",
    Nociception_Respiratory_Q1: "I often feel like I have difficulties breathing normally",
    Nociception_Respiratory_A1: "I often feel like I don't have currently difficulties answering honestly",
    Nociception_Gastric_Q1: "I often feel pain in my stomach",
    Nociception_Genital_Q1: "My genital organs are very sensitive to pleasant stimulations",
    Nociception_Genital_Q2: "My genital organs are very sensitive to painful stimulations",
    Nociception_SkinThermo_Q1: "My skin is very sensitive to painful stimulations (e.g., pinching)",
    Nociception_SkinThermo_Q2: "My skin is very sensitive to pleasant stimulations (e.g., caressing)",
    Nociception_ColonBladder_Q1: "I often experience a pleasant sensation when relieving myself",
    Nociception_ColonBladder_Q2: "I often experience painful sensations when relieving myself",
    Nociception_ColonBladder_A1: "I often experience pleasant sensations, and I will answer zero",
    Sensitivity_State_Q1: "I always know when I am relaxed", 
    Sensitivity_State_Q2: "I always feel in my body if I am relaxed", 
    Sensitivity_State_Q3: "My body is in a specific state when I am relaxed", 
    Sensitivity_State_Q4: "Being relaxed corresponds to a very different bodily feeling compared to other states",  
    Sensitivity_State_Q5: "When something important is happening, I can feel it in my body",  
    Sensitivity_Cardiac_Q1:"In general, I am very sensitive to changes in my heart rate", 
    Sensitivity_Cardiac_Q2:"I often notice changes in my heart rate", 
    Sensitivity_Cardiac_Q3:"I can notice even very subtle changes in the way my heart beats", 
    Sensitivity_Cardiac_Q4: "I am always very aware of my heart beats, even when I am calm", 
    Sensitivity_Cardiac_Q5: "I only notice my heart when it is thumping in my chest", 
    Sensitivity_Cardiac_Q6: "I often try to feel my heart with my hands (e.g., by putting my hand on my chest)", 
    Sensitivity_Cardiac_Q7:"When something important is happening, I can feel immediately feel changes in my heart rate", 
    Sensitivity_Respiratory_Q1: "In general, I am very sensitive to changes in the way I breath", 
    Sensitivity_Respiratory_Q2: "I often notice changes in the way I breath", 
    Sensitivity_Respiratory_Q3: "I can notice even very subtle changes in the way my heart beats", 
    Sensitivity_Respiratory_Q4: "I am always very aware of how I am breathing, even when I am calm", 
    Sensitivity_Respiratory_Q5: "I often only notice how I am breathing when I am breathing very loudly", 
    Sensitivity_Respiratory_Q6: "When something important is happening, I can feel immediately feel changes in the way I breath", 
    Sensitivity_Gastric_Q1: "In general, I am very sensitive to what my stomach is doing", 
    Sensitivity_Gastric_Q2: "I can notice even very subtle changes in what my stomach is doing", 
    Sensitivity_Gastric_Q3: "I am always very aware of what my stomach is doing, even when I am calm", 
    Sensitivity_Gastric_Q4: "I often check the smell of my own breath", 
    Sensitivity_Gastric_Q5: "I often check the smell of my farts", 
    Sensitivity_Gastric_Q6: "I often pay attention to the noises of my stomach", 
    Sensitivity_Gastric_A1: "I am always very aware of the answers I am giving", 
    Sensitivity_Genital_Q1: "In general, I am very sensitive to changes in my genital organs", 
    Sensitivity_Genital_Q2: "I can notice even very subtle changes in the state of my genital organs", 
    Sensitivity_Genital_Q3: "I am always very aware of the state of my genital organs, even when I am calm", 
    Sensitivity_SkinThermo_Q1: "In general, my skin is very sensitive", 
    Sensitivity_SkinThermo_Q2: "I can notice even very subtle stimulations to my skin (e.g., very light touches)", 
    Sensitivity_SkinThermo_Q3: "I can notice even very subtle changes if my skin becomes dry or sweaty", 
    Sensitivity_SkinThermo_Q4: "I am always very aware if my hands and feet are cold or warm", 
    Sensitivity_SkinThermo_Q5: "I often check the smell of my armpits",  
    Sensitivity_ColonBladder_Q1: "Sensitivity Colon Bladder 1", 
    Sensitivity_ColonBladder_Q2: "In general, I am very sensitive to the way I am defecating", 
    Sensitivity_ColonBladder_Q3: "In general, I am very sensitive to the way I am urinating", 
    Sensitivity_ColonBladder_Q4: "I often check the colour of my urine", 
    Sensitivity_ColonBladder_Q5: "I often check the colour of my faeces", 
    Accuracy_State_Q1: "I can always accurately feel when I am about to cough", 
    Accuracy_State_Q2: "I can always accurately feel when I am about to sneeze", 
    Accuracy_State_Q3: "I can always accurately feel when I am about to vomit", 
    Accuracy_State_Q4: "I can always accurately feel when I am starting to be hungry", 
    Accuracy_State_Q5: "I can always accurately feel when I am starting to be thirsty", 
    Accuracy_State_A1: "I can always accurately feel when I am answering questions in a study", 
    Accuracy_State_A2: "I can always accurately answer to the left to this question to show that I am reading it", 
    Accuracy_Cardiac_Q1: "I can always accurately feel if my heart rate is slow or fast", 
    Accuracy_Respiratory_Q1: "I can always accurately feel how I am breathing (e.g., fast or slow, deep or shallow)", 
    Accuracy_Gastric_Q1: "I can always accurately feel when I am about to fart", 
    Accuracy_Gastric_Q2: "I can always accurately feel when I am about to burp", 
    Accuracy_Gastric_Q3: "I often feel thirsty even if I drank recently", 
    Accuracy_Gastric_Q4: "I don't always feel the need to drink until I am really thirsty", 
    Accuracy_Gastric_Q5: "I often feel hungry even if I ate recently", 
    Accuracy_Gastric_Q6: "I don't always feel the need to eat until I am really hungry",  
    Accuracy_Genital_Q1: "I can always accurately perceive if my genital organs are in a state of arousal (e.g., hard, wet)", 
    Accuracy_Genital_A1: "I can always accurately perceive that to this question I should answer the lowest option",  
    Accuracy_SkinThermo_Q1: "I can always accurately feel when something is going to be itchy", 
    Accuracy_SkinThermo_Q2: "I can always accurately feel when I start to have fever", 
    Accuracy_SkinThermo_Q3: "When something touches my skin, I can always accurately feel if it's hot or cold", 
    Accuracy_ColonBladder_Q1: "I often feel the need to urinate even when my bladder is not full", 
    Accuracy_ColonBladder_Q2: "I don't always feel the need to urinate until my bladder is very full", 
    Beliefs_Cardiac_Q1: "I think that listening to my heart beats helps me understand the world",
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

        // Max 34 items per page
        for (const [index, k] of Object.keys(items).entries()) {
            groups[`Page${Math.floor(index / 34) + 1}`].push({ [k]: items[k] })
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
