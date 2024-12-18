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

// Items ================================================
const intero_items = {
    Sexual_State_Q1: "I always know when I am sexually aroused",
    Sexual_State_Q2: "I always feel in my body if I am sexually aroused",
    Sexual_State_Q3:
        "My body is always in the same specific state  when I am sexually aroused",
    Sexual_State_Q4:
        "Being sexually aroused is a very different bodily feeling compared to other states (e.g., feeling anxious, relaxed, or after physical exercise)",
    Sexual_State_Q5:
        "I can always tell that I am sexually aroused from the way I feel inside",
    Sexual_State_A: "I always know that I am attentively doing a study", // 'A' stands for attention
    Sexual_Cardiac_Q1:
        "When I am sexually aroused, I often feel changes in the way my heart beats (e.g., faster or stronger)",
    Sexual_Respiratory_Q1:
        "When I am sexually aroused, I often feel changes in my breathing (e.g., faster, shallower, or less regular)",
    Sexual_Gastric_Q1:
        "When I am sexually aroused, I often feel changes in my stomach (e.g., bloating, rumbling, discomfort)",
    Sexual_Gastric_Q2:
        "When I am sexually aroused, I often feel butterflies in my stomach",
    Sexual_Genital_Q1:
        "When I am sexually aroused, I often notice specific sensations in my genital area (e.g., tingling, warmth, wetness, stiffness, pulsations)",
    Sexual_Genital_Q2:
        "During sex or masturbation, I often feel very strong sensations coming from my genital areas",
    Sexual_SkinThermo_Q1:
        "When I am sexually aroused, I often feel changes in my temperature (e.g., feeling warm or cold)",
    Sexual_SkinThermo_Q2:
        "When I am sexually aroused, I often feel like some areas of my skin become sweaty (e.g., palms, back, forehead)",
    Sexual_SkinThermo_Q3:
        "When I am sexually aroused, I often feel my mouth becoming dry",
    Sexual_ColonBladder_Q1:
        "When I am sexually aroused, I often feel like I need to relieve myself by urinating or defecating",
    Sexual_ColonBladder_Q2:
        "During sex or masturbation, I often feel like I need to relieve myself by urinating or defecating",
    Anxious_State_Q1: "I always know when I am anxious",
    Anxious_State_Q2: "I always feel in my body if I am anxious",
    Anxious_State_Q3:
        "My body is always in the same specific state when I am anxious",
    Anxious_State_Q4:
        "Being anxious is a very different bodily feeling compared to other states (e.g., feeling sexually aroused, relaxed or after exercise)",
    Anxious_State_Q5:
        "I often realize that I am anxious only when others tell me",
    Anxious_Cardiac_Q1:
        "When I am anxious, I often feel changes in the way my heart beats (e.g., faster or stronger)",
    Anxious_Respiratory_Q1:
        "When I am anxious, I often feel changes in my breathing (e.g., faster, shallower, or less regular)",
    Anxious_Gastric_Q1:
        "When I am anxious, I often feel changes in my stomach (e.g., bloating, rumbling, discomfort)",
    Anxious_Genital_Q1:
        "When I am anxious, I often notice specific sensations in my genital area (e.g., contractions, dryness)",
    Anxious_SkinThermo_Q1:
        "When I am anxious, I often feel changes in my temperature (e.g., feeling warm or cold)",
    Anxious_SkinThermo_Q2:
        "When I am anxious, I often feel like some areas of my skin become sweaty (e.g., palms, back, forehead)",
    Anxious_SkinThermo_Q3:
        "When I am anxious, I often feel my mouth becoming dry",
    Anxious_SkinThermo_Q4:
        "When I am anxious, I often have difficulty swallowing",
    Anxious_SkinThermo_A:
        "Even if I am anxious, I should now answer all the way to the left",
    Anxious_ColonBladder_Q1:
        "When I am anxious, I often feel like I need to relieve myself by urinating or defecating",
    Nociception_State_Q1: "I always feel in my body if I am ill",
    Nociception_State_Q2:
        "I can easily tell when I am feeling ill (e.g., nauseous or sick)",
    Nociception_Cardiac_Q1:
        "I often feel painful sensations coming from my heart",
    Nociception_Cardiac_Q2:
        "I often experience painful sensations coming from my chest",
    Nociception_Respiratory_Q1:
        "I often feel like I have difficulties breathing normally",
    Nociception_Respiratory_Q2:
        "I often feel like I can't get enough oxygen by breathing normally",
    Nociception_Gastric_Q1: "I often feel pain in my stomach",
    Nociception_Genital_Q1:
        "My genital organs are very sensitive to pleasant stimulations",
    Nociception_Genital_Q2:
        "My genital organs are very sensitive to painful stimulations",
    Nociception_SkinThermo_Q1:
        "My skin is very sensitive to painful stimulations (e.g., pinching)",
    Nociception_SkinThermo_Q2:
        "My skin is very sensitive to pleasant stimulations (e.g., caressing)",
    Nociception_SkinThermo_Q3:
        "Changes in temperature (e.g., feeling feverish or cold) are the first things I notice when I am becoming ill",
    Nociception_ColonBladder_Q1:
        "I often experience a pleasant sensation when relieving myself when urinating or defecating)",
    Nociception_ColonBladder_Q2:
        "I often experience painful sensations when relieving myself when urinating or defecating",
    Nociception_ColonBladder_A:
        "I often experience sensations, and I will answer zero to this question",
    Sensitivity_State_Q1: "I always know when I am relaxed",
    Sensitivity_State_Q2: "I always feel in my body if I am relaxed",
    Sensitivity_State_Q3:
        "My body is always in the same specific state when I am relaxed",
    Sensitivity_State_Q4:
        "Being relaxed is a very different bodily feeling compared to other states (e.g., feeling anxious, sexually aroused or after exercise)",
    Sensitivity_State_Q5:
        "When something important is happening in my life, I can feel it in my body",
    Sensitivity_Cardiac_Q1:
        "In general, I am very sensitive to changes in my heart rate",
    Sensitivity_Cardiac_Q2: "I often notice changes in my heart rate",
    Sensitivity_Cardiac_Q3:
        "I can notice even very subtle changes in the way my heart beats",
    Sensitivity_Cardiac_Q4:
        "I am always very aware of my heartbeats, even when I am calm",
    Sensitivity_Cardiac_Q5:
        "I only notice my heart when it is thumping in my chest",
    Sensitivity_Cardiac_Q6:
        "I often try to feel my heart with my hands (e.g., by putting my hand on my chest)",
    Sensitivity_Cardiac_Q7:
        "When something important is happening in my life, I can immediately feel changes in my heart rate",
    Sensitivity_Cardiac_A:
        "In general, I am very sensitive and attentive to the questions I am currently answering",
    Sensitivity_Respiratory_Q1:
        "In general, I am very sensitive to changes in my breathing",
    Sensitivity_Respiratory_Q2: "I often notice changes in my breathing",
    Sensitivity_Respiratory_Q3:
        "I can notice even very subtle changes in my breathing",
    Sensitivity_Respiratory_Q4:
        "I am always very aware of how I am breathing, even when I am calm",
    Sensitivity_Respiratory_Q5:
        "I often only notice how I am breathing when it becomes loud",
    Sensitivity_Respiratory_Q6:
        "I often only notice how I am breathing when my breathing becomes shallow or irregular",
    Sensitivity_Respiratory_Q7:
        "When something important is happening in my life, I can immediately feel changes in my breathing",
    Sensitivity_Gastric_Q1:
        "In general, I am very sensitive to what my stomach is doing",
    Sensitivity_Gastric_Q2:
        "I can notice even very subtle changes in what my stomach is doing",
    Sensitivity_Gastric_Q3:
        "I am always very aware of what my stomach is doing, even when I am calm",
    Sensitivity_Gastric_Q4: "I often check the smell of my own breath",
    Sensitivity_Gastric_Q5: "I often check the smell of my farts",
    Sensitivity_Gastric_Q6: "I often pay attention to the noises of my stomach",
    Sensitivity_Gastric_A: "I often pay attention to the answers I am giving",
    Sensitivity_Genital_Q1:
        "In general, I am very sensitive to changes in my genital organs",
    Sensitivity_Genital_Q2:
        "I can notice even very subtle changes in the state of my genital organs",
    Sensitivity_Genital_Q3:
        "I am always very aware of the state of my genital organs, even when I am calm",
    Sensitivity_SkinThermo_Q1: "In general, my skin is very sensitive",
    Sensitivity_SkinThermo_Q2:
        "I can notice even very subtle stimulations to my skin (e.g., very light touches)",
    Sensitivity_SkinThermo_Q3:
        "I can notice even very subtle changes if my skin becomes dry or sweaty",
    Sensitivity_SkinThermo_Q4:
        "I am always very aware if my hands and feet are cold or warm",
    Sensitivity_SkinThermo_Q5: "I often check the smell of my armpits",
    Sensitivity_SkinThermo_Q6: "I am very prone to having goosebumps",
    Sensitivity_SkinThermo_Q7:
        "My skin is susceptible to itchy fabrics and materials",
    Sensitivity_SkinThermo_Q8:
        "I enjoy the sensations of touching different materials (e.g., soft fabrics, wooden objects, smooth surfaces)",
    Sensitivity_ColonBladder_Q1:
        "In general, I am very aware of the sensations that are happening when I am defecating",
    Sensitivity_ColonBladder_Q2:
        "In general, I am very aware of the sensations that are happening when I am urinating",
    Sensitivity_ColonBladder_Q3: "I often check the colour of my urine",
    Sensitivity_ColonBladder_Q4: "I often check the colour of my faeces",
    Accuracy_State_Q1: "I can always accurately feel when I am about to cough",
    Accuracy_State_Q2: "I can always accurately feel when I am about to sneeze",
    Accuracy_State_Q3: "I can always accurately feel when I am about to vomit",
    Accuracy_State_Q4:
        "I can always accurately feel when I am starting to be hungry",
    Accuracy_State_Q5:
        "I can always accurately feel when I am starting to be thirsty",
    Accuracy_Cardiac_Q1:
        "I can always accurately feel if my heart rate is slow or fast",
    Accuracy_Cardiac_Q2:
        "I sometimes feel like my heart is racing or beating faster than usual, but when I check my pulse, it is not as intense as I thought",
    Accuracy_Respiratory_Q1:
        "I can always accurately feel how I am breathing (e.g., fast or slow, deep or shallow)",
    Accuracy_Respiratory_A:
        "I can always accurately answer to the left on this question to show that I am reading it",
    Accuracy_Gastric_Q1: "I can always accurately feel when I am about to fart",
    Accuracy_Gastric_Q2: "I can always accurately feel when I am about to burp",
    Accuracy_Gastric_Q3: "I often feel thirsty even if I drank recently",
    Accuracy_Gastric_Q4:
        "I don't always feel the need to drink until I am really thirsty",
    Accuracy_Gastric_Q5: "I often feel hungry even if I ate recently",
    Accuracy_Gastric_Q6:
        "I don't always feel the need to eat until I am really hungry",
    Accuracy_Gastric_Q7:
        "I often sneeze suddenly without feeling the need building up",
    Accuracy_Gastric_Q8:
        "I sometimes feel that burping will produce some relief but then it doesn't",
    Accuracy_Genital_Q1:
        "I can always accurately perceive if my genital organs are in a state of arousal (e.g., hard, wet, pulsating)",
    Accuracy_Genital_Q2:
        "I sometimes feel like I am sexually aroused, but when I try to satisfy the feeling, I realise that I am not as sexually aroused as I initially thought",
    Accuracy_Genital_A:
        "I can always accurately perceive that to this question I should answer the lowest option",
    Accuracy_SkinThermo_Q1:
        "I can always accurately feel when something is going to be itchy",
    Accuracy_SkinThermo_Q2:
        "I can always accurately feel when I start to have a fever",
    Accuracy_SkinThermo_Q3:
        "When something touches my skin, I can always accurately feel if it's hot or cold",
    Accuracy_SkinThermo_Q4:
        "I sometimes feel my skin itching, but when I scratch it, it doesn't produce the relief I expected",
    Accuracy_ColonBladder_Q1:
        "I often feel the need to urinate even when my bladder is not full",
    Accuracy_ColonBladder_Q2:
        "I don't always feel the need to urinate until my bladder is very full",
    Accuracy_ColonBladder_Q3:
        "I often feel the need to defecate even when my intestine is not full",
    Accuracy_ColonBladder_Q4:
        "I don't always feel the need to defecate until my intestine is very full",
    Accuracy_ColonBladder_Q5:
        "I sometimes feel like I need to urinate or defecate but when I go to the bathroom I produce less than I expected",
    Confusion_State_Q1:
        "Sometimes I can't tell if the sensations in my body are good or bad",
    Confusion_State_Q2:
        "Sometimes I am confused about what sensations in my body mean",
    Confusion_Cardiac_Q1:
        "Sometimes my heart starts racing and I often don't know why",
    Confusion_Respiratory_Q1:
        "Sometimes my breathing becomes erratic or shallow and I often don't know why",
    Confusion_Gastric_Q1:
        "Sometimes I feel negative and realise after eating that I was just hungry",
    Confusion_Gastric_Q2:
        "Sometimes I don't realise I was hungry until I ate something",
    Confusion_Genital_Q1:
        "Sometimes I notice arousal in my genital areas (e.g., stiffness, wetness) when I am not feeling sexually aroused",
    Confusion_SkinThermo_Q1:
        "Sometimes I have sensations on my skin (e.g., itches, goosebumps) without any clear cause",
    Confusion_ColonBladder_Q1:
        "Sometimes I am not sure whether I need to go to the toilet or not (to urinate or defecate)",
    Confusion_ColonBladder_A:
        "Sometimes I notice that I need to answer all the way to the right",
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
            Confusion: [],
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
            Page4: [],
            Page5: [],
            Page6: [],
        }

        // Max 22 items per page
        for (const [index, k] of Object.keys(items).entries()) {
            groups[`Page${Math.floor(index / 22) + 1}`].push({ [k]: items[k] })
        }
        groups
    }
    return shuffleObject(groups)
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function intero_makequestions(
    groups,
    required = true,
    ticks = ["Disagree", "Agree"]
) {
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

function check_attentionchecks() {
    // Compute scores
    let data = jsPsych.data.get().filter({ screen: "intero_questionnaire" })
    data = data["trials"][0]["response"]

    let score_A1 = data["Sexual_State_A"] / 6
    let score_A2 = 1 - data["Anxious_SkinThermo_A"] / 6
    let score_A3 = 1 - data["Nociception_ColonBladder_A"] / 6
    let score_A4 = data["Sensitivity_Gastric_A"] / 6
    let score_A5 = 1 - data["Accuracy_Genital_A"] / 6
    let score_A6 = data["Sensitivity_Cardiac_A"] / 6
    let score_A7 = 1 - data["Accuracy_Respiratory_A"] / 6
    let score_A8 = data["Confusion_ColonBladder_A"] / 6

    // Average
    return (
        (score_A1 +
            score_A2 +
            score_A3 +
            score_A4 +
            score_A5 +
            score_A6 +
            score_A7 +
            score_A8) /
        8
    )
}

// Questionnaire ================================================
// The condition is randomly selected when this script is read
const intero_condition = ["Domains", "Dimensions", "Random"][
    Math.floor(Math.random() * 3)
]
// const intero_condition = "Random"

const intero_questionnaire = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pageNextText: "Next",
            pagePrevText: "Previous",
            showProgressBar: "aboveHeader",
            pages: intero_makequestions(
                intero_makegroups(intero_items, intero_condition)
            ),
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
    cardiac =
        cardiac.map((key) => data[key]).reduce((a, b) => a + b) / cardiac.length
    cardiac = (cardiac / 6) * 100

    respiratory = Object.keys(data).filter((key) => key.includes("Respiratory"))
    respiratory =
        respiratory.map((key) => data[key]).reduce((a, b) => a + b) /
        respiratory.length
    respiratory = (respiratory / 6) * 100

    gastric = Object.keys(data).filter((key) => key.includes("Gastric"))
    gastric =
        gastric.map((key) => data[key]).reduce((a, b) => a + b) / gastric.length
    gastric = (gastric / 6) * 100

    skinthermo = Object.keys(data).filter((key) => key.includes("SkinThermo"))
    skinthermo =
        skinthermo.map((key) => data[key]).reduce((a, b) => a + b) /
        skinthermo.length
    skinthermo = (skinthermo / 6) * 100

    colonbladder = Object.keys(data).filter((key) =>
        key.includes("ColonBladder")
    )
    colonbladder =
        colonbladder.map((key) => data[key]).reduce((a, b) => a + b) /
        colonbladder.length
    colonbladder = (colonbladder / 6) * 100

    // Prepare output
    var output = {
        names: [
            "Your Heart",
            "Your Breath",
            "Your Stomach",
            "Your Skin",
            "Your Bladder",
        ],
        scores: [cardiac, respiratory, gastric, skinthermo, colonbladder],
        label: "Connectivity with each organ (%)",
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
        "<p><b>Done!</b> This chart represents how you relate to different body functions. <b>What does it mean?</b></p>" +
        "<p>From what we know so far, it seems like people vary a lot on these dimensions. However, we don't exactly know what these differences mean yet (hence why we do this research).<br>" +
        'It seems like it is neither good or bad to score high on any of these, and that there is no "normal": everybody is different!</p>',
}
