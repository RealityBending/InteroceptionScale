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

// MAIA-2 questionnaire
var MAIA_items = [
    "When I am tense I notice where the tension is located in my body",
    "I notice when I am uncomfortable in my body",
    "I notice where in my body I am comfortable",
    "I notice changes in my breathing, such as whether it slows down or speeds up",
    "I ignore physical tension or discomfort until they become more severe",
    "I distract myself from sensations of discomfort",
    "When I feel pain or discomfort, I try to power through it",
    "I try to ignore pain",
    "I push feelings of discomfort away by focusing on something",
    "When I feel unpleasant body sensations, I occupy myself with something else so I do not have to feel them",
    "When I feel physical pain, I become upset",
    "I start to worry that something is wrong if I feel any discomfort",
    "I can notice an unpleasant body sensation without worrying about it",
    "I can stay calm and not worry when I have feelings of discomfort or pain",
    "When I am in discomfort or pain I cannot get it out of my mind",
    "I can pay attention to my breath without being distracted by things happening around me",
    "I can maintain awareness of my inner bodily sensations even when there is a lot going on around me",
    "When I am in conversation with someone, I can pay attention to my posture",
    "I can return awareness to my body if I am distracted",
    "I can refocus my attention from thinking to sensing my body",
    "I can maintain awareness of my whole body even when a part of me is in pain or discomfort",
    "I am able to consciously focus on my body as a whole",
    "I notice how my body changes when I am angry",
    "When something is wrong in my life I can feel it in my body",
    "I notice that my body feels different after a peaceful experience",
    "I notice that my breathing becomes free and easy when I feel comfortable",
    "I notice how my body changes when I feel happy / joyful",
    "When I feel overwhelmed I can find a calm place inside",
    "When I bring awareness to my body I feel a sense of calm",
    "I can use my breath to reduce tension",
    "When I am caught up in thoughts, I can calm my mind by focusing on my body/breathing",
    "I listen for information from my body about my emotional state",
    "When I am upset, I take time to explore how my body feels",
    "I listen to my body to inform me about what to do",
    "I am at home in my body",
    "I feel my body is a safe place",
    "I trust my body sensations",
]
var MAIA_dimensions = [
    "Noticing_1",
    "Noticing_2",
    "Noticing_3",
    "Noticing_4",
    "NotDistracting_1_R",
    "NotDistracting_2_R",
    "NotDistracting_3_R",
    "NotDistracting_4_R",
    "NotDistracting_5_R",
    "NotDistracting_6_R",
    "NotWorrying_1_R",
    "NotWorrying_2_R",
    "NotWorrying_3",
    "NotWorrying_4",
    "NotWorrying_5_R",
    "AttentionRegulation_1",
    "AttentionRegulation_2",
    "AttentionRegulation_3",
    "AttentionRegulation_4",
    "AttentionRegulation_5",
    "AttentionRegulation_6",
    "AttentionRegulation_7",
    "EmotionalAwareness_1",
    "EmotionalAwareness_2",
    "EmotionalAwareness_3",
    "EmotionalAwareness_4",
    "EmotionalAwareness_5",
    "SelfRegulation_1",
    "SelfRegulation_2",
    "SelfRegulation_3",
    "SelfRegulation_4",
    "BodyListening_1",
    "BodyListening_2",
    "BodyListening_3",
    "Trusting_1",
    "Trusting_2",
    "Trusting_3",
]

// MINT Items ================================================
var MINT_items = [
    "Sometimes my breathing becomes erratic or shallow and I often don't know why",
    "I often feel like I can't get enough oxygen by breathing normally",
    "Sometimes my heart starts racing and I often don't know why",
    "I sometimes feel like I need to urinate or defecate but when I go to the bathroom I produce less than I expected",
    "I often feel the need to urinate even when my bladder is not full",
    "Sometimes I am not sure whether I need to go to the toilet or not (to urinate or defecate)",
    "I often only notice how I am breathing when it becomes loud",
    "I only notice my heart when it is thumping in my chest",
    "I often only notice how I am breathing when my breathing becomes shallow or irregular",
    "I often check the smell of my own breath",
    "I often check the smell of my armpits",
    "I often check the smell of my farts",
    "I don't always feel the need to drink until I am really thirsty",
    "I don't always feel the need to eat until I am really hungry",
    "I don't always feel the need to urinate until my bladder is very full",
    "During sex or masturbation, I often feel very strong sensations coming from my genital areas",
    "When I am sexually aroused, I often notice specific sensations in my genital area (e.g., tingling, warmth, wetness, stiffness, pulsations)",
    "My genital organs are very sensitive to pleasant stimulations",
    "I always feel in my body if I am sexually aroused",
    "I always know when I am sexually aroused",
    "I can always tell that I am sexually aroused from the way I feel inside",
    "Being relaxed is a very different bodily feeling compared to other states (e.g., feeling anxious, sexually aroused or after exercise)",
    "Being anxious is a very different bodily feeling compared to other states (e.g., feeling sexually aroused, relaxed or after exercise)",
    "Being sexually aroused is a very different bodily feeling compared to other states (e.g., feeling anxious, relaxed, or after physical exercise)",
    "I can always accurately feel when I am about to sneeze",
    "I can always accurately feel when I am about to vomit",
    "I can always accurately feel when I am about to burp",
    "My skin is susceptible to itchy fabrics and materials",
    "My skin is very sensitive to painful stimulations (e.g., pinching)",
    "I can notice even very subtle stimulations to my skin (e.g., very light touches)",
    "I can notice even very subtle changes in my breathing",
    "In general, I am very sensitive to changes in my breathing",
    "I am always very aware of how I am breathing, even when I am calm",
    "I often notice changes in my heart rate",
    "I can always accurately feel if my heart rate is slow or fast",
    "I can notice even very subtle changes in the way my heart beats",
    "When I am sexually aroused, I often feel changes in my temperature (e.g., feeling warm or cold)",
    "When I am sexually aroused, I often feel like some areas of my skin become sweaty (e.g., palms, back, forehead)",
    "When I am sexually aroused, I often feel changes in the way my heart beats (e.g., faster or stronger)",

]

var MINT_dimensions = [
    "DysregulatedPerception_1",
    "DysregulatedPerception_2",
    "DysregulatedPerception_3",
    "DysregulatedPerception_4",
    "DysregulatedPerception_5",
    "DysregulatedPerception_6",
    "DysregulatedPerception_7",
    "DysregulatedPerception_8",
    "DysregulatedPerception_9",
    "DysregulatedPerception_10",
    "DysregulatedPerception_11",
    "DysregulatedPerception_12",
    "DysregulatedPerception_13",
    "DysregulatedPerception_14",
    "DysregulatedPerception_15",
    "HeightenedPerception_1",
    "HeightenedPerception_2",
    "HeightenedPerception_3",
    "HeightenedPerception_4",
    "HeightenedPerception_5",
    "HeightenedPerception_6",
    "HeightenedPerception_7",
    "HeightenedPerception_8",
    "HeightenedPerception_9",
    "HeightenedPerception_10",
    "HeightenedPerception_11",
    "HeightenedPerception_12",
    "HeightenedPerception_13",
    "HeightenedPerception_14",
    "HeightenedPerception_15",
    "HeightenedAwareness_1",
    "HeightenedAwareness_2",
    "HeightenedAwareness_3",
    "HeightenedAwareness_4",
    "HeightenedAwareness_5",
    "HeightenedAwareness_6",
    "HeightenedAwareness_7",
    "HeightenedAwareness_8",
    "HeightenedAwareness_9",

]

// IAS questionnaire
var IAS_items = [
    "I can always accurately perceive when my heart is beating fast",
    "I can always accurately perceive when I am hungry",
    "I can always accurately perceive when I am breathing fast",
    "I can always accurately perceive when I am thirsty",
    "I can always accurately perceive when I need to urinate",
    "I can always accurately perceive when I need to defecate",
    "I can always accurately perceive when I encounter different tastes",
    "I can always accurately perceive when I am going to vomit",
    "I can always accurately perceive when I am going to sneeze",
    "I can always accurately perceive when I am going to cough",
    "I can always accurately perceive when I am hot/cold",
    "I can always accurately perceive when I am sexually aroused",
    "I can always accurately perceive when I am going to pass wind",
    "I can always accurately perceive when I am going to burp",
    "I can always accurately perceive when my muscles are tired/sore",
    "I can always accurately perceive when I am going to get a bruise",
    "I can always accurately perceive when I am in pain",
    "I can always accurately perceive when my blood sugar is low",
    "I can always accurately perceive when someone is touching me affectionately rather than non-affectionately",
    "I can always accurately perceive when something is going to be ticklish",
    "I can always accurately perceive when something is going to be itchy",
]
var IAS_dimensions = [
    "IAS_1",
    "IAS_2",
    "IAS_3",
    "IAS_4",
    "IAS_5",
    "IAS_6",
    "IAS_7",
    "IAS_8",
    "IAS_9",
    "IAS_10",
    "IAS_11",
    "IAS_12",
    "IAS_13",
    "IAS_14",
    "IAS_15",
    "IAS_16",
    "IAS_17",
    "IAS_18",
    "IAS_19",
    "IAS_20",
    "IAS_21",
]

// BPQ questionnaire
var BPQ_items = [
    "Swallowing frequently.",
    "An urge to cough or clear my throat.",
    "My mouth being dry.",
    "How fast I am breathing.",
    "Watering or tearing of my eyes.",
    "Noises associated with my digestion.",
    "An urge to defecate.",
    "Muscle tension in my arms and legs.",
    "An bloating feeling because of water retention.",
    "Muscle tension in my face.",
    "Goose bumps.",
    "Stomach and gut pains.",
    "Stomach distension or bloatedness.",
    "Palms sweating.",
    "Sweat on my forehead.",
    "Tremor in my lips.",
    "Sweat in my armpits.",
    "The temperature of my face(especially my ears).",
    "Grinding my teeth.",
    "General jitteriness.",
    "The hair on the back of my neck 'standing up'.",
    "Difficulty in focussing.",
    "An urge to swallow.",
    "How hard my heart is beating.",
    "Feeling constipated.",
    "I have difficulty coordinating breathing and eating.",
    "When I am eating, I have difficulty talking.", 
    "My heart often beats irregularly.",
    "When I eat, food feels dry and sticks to my mouth and throat.",
    "I feel shortness of breath.",
    "I have difficulty coordinating breathing with talking.",
    "When I eat, I have difficulty coordinating swallowing, chewing, and/or sucking with breathing.",
    "I have a persistent cough that interferes with my talking and eating.",
    "I gag from the saliva in my mouth.",
    "I have chest pains.",
    "I gag when I eat.",
    "When I talk, I often feel I should cough or swallow the saliva in my mouth.",
    "When I breathe, I feel like I cannot get enough oxygen.",
    "I have difficulty controlling my eyes.",
    "I feel like vomiting.",
    "I have 'sour' stomach.",
    "I am constipated.",
    "I have indigestion.",
    "After eating I have digestive problems.",
    "I have diarrhea.", 
]

var BPQ_dimensions = [
    "BodyAwareness_1",
    "BodyAwareness_2",
    "BodyAwareness_3",
    "BodyAwareness_4",
    "BodyAwareness_5",
    "BodyAwareness_6",
    "BodyAwareness_7",
    "BodyAwareness_8",
    "BodyAwareness_9",
    "BodyAwareness_10",
    "BodyAwareness_11",
    "BodyAwareness_12",
    "BodyAwareness_13",
    "BodyAwareness_14",
    "BodyAwareness_15",
    "BodyAwareness_16",
    "BodyAwareness_17",
    "BodyAwareness_18",
    "BodyAwareness_19",
    "BodyAwareness_20",
    "BodyAwareness_21",
    "BodyAwareness_22",
    "BodyAwareness_23",
    "BodyAwareness_24",
    "BodyAwareness_25",
    "BodyAwareness_26",
    "AutonomicNervous_1",
    "AutonomicNervous_2",
    "AutonomicNervous_3",
    "AutonomicNervous_4",
    "AutonomicNervous_5",
    "AutonomicNervous_6",
    "AutonomicNervous_7",
    "AutonomicNervous_8",
    "AutonomicNervous_9",
    "AutonomicNervous_10",
    "AutonomicNervous_11",
    "AutonomicNervous_12",
    "AutonomicNervous_13",
    "AutonomicNervous_14",
    "AutonomicNervous_15",
    "AutonomicNervous_16",
    "AutonomicNervous_17",
    "AutonomicNervous_18",
    "AutonomicNervous_19",
    "AutonomicNervous_20",

]

// MAIA-2 Questions
var maia2_questions = []
for (const [index, element] of MAIA_items.entries()) {
    maia2_questions.push({
        prompt: "<b>" + element + "</b>",
        name: MAIA_dimensions[index],
        ticks: ["Never", "Always"],
        required: false,
        min: 0,
        max: 1,
        step: 0.01,
        slider_start: 0.5,
    })
}

var maia = {
    type: jsPsychMultipleSlider,
    questions: maia2_questions,
    randomize_question_order: true,
    preamble:
        "<h2>About your body sensations...</h2>" +
        "<p>Please indicate how often each statement applies to you generally in daily life.</p><br /><br/> ",
    require_movement: false,
    slider_width: null,
    data: {
        screen: "MAIA",
    },
}

// MINT Questions
// This function formats each question into a jsPsych-survey question that contains information about the question format
function mint_makequestions(
    groups,
    required = true,
    ticks = ["Disagree", "Agree"]
) {
    pages = []

// Make questions
    var mint_questions = []
    for (const [index, element] of MINT_items.entries()) {
    mint_questions.push({
        key: Object.keys(element)[0],
            q: {
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
    })
}
}

var mint = {
    type: jsPsychMultipleSlider,
    questions: mint_questions,
    randomize_question_order: true,
    preamble:
        "<h2>About you and your body...</h2>" +
        "<p>You will be asked various questions about the way you feel and you think about your body.</p>"+
        "<p>There are no right or wrong answers.</p><br /><br/> ",
    require_movement: false,
    slider_width: null,
    data: {
        screen: "MINT",
    },
}

// IAS Questions
var ias_questions = []
for (const [index, element] of IAS_items.entries()) {
    ias_questions.push({
        prompt: "<b>" + element + "</b>",
        name: IAS_dimensions[index],
        ticks: ["Strongly Disagree", "Strongly Agree"],
        required: false,
        min: 0,
        max: 1,
        step: 0.01,
        slider_start: 0.5,
    })
}

var ias = {
    type: jsPsychMultipleSlider,
    questions: ias_questions,
    randomize_question_order: true,
    preamble:
        "<h2>About your body sensations...</h2>" +
        "<p>Below are several statements regarding how accurately you can perceive specific bodily sensations. Please rate on the scale how well you believe you can perceive each specific signal.</p>" +
        "<p>For example, if you often feel you need to urinate and then realise you do not need to when you go to the toilet you would rate your accuracy perceiving this bodily signal as low.</p>" +
        "<p>Please only rate how well you can perceive these signals without using external cues, for example, if you can only perceive how fast your heart is beating when you measure it by taking your pulse this would not count as accurate internal perception.</p><br /><br/> ",
    require_movement: false,
    slider_width: null,
    data: {
        screen: "IAS",
    },
}

// BPQ Questions
var bpq_questions = []
for (const [index, element] of BPQ_items.entries()) {
    bpq_questions.push({
        prompt: "<b>" + element + "</b>",
        name: IAS_dimensions[index],
        ticks: ["Strongly Disagree", "Strongly Agree"],
        required: false,
        min: 0,
        max: 1,
        step: 0.01,
        slider_start: 0.5,
    })
}

var BPQ = {
    type: htmlButtonResponse,
    questions: ias_questions,
    randomize_question_order: true,
    preamble:
        "<h2> BPQ </h2>" +
        "<p> In your daily life, how often are you aware of the following sensations? Please rate yourself on each of the statements below: </p>" +
        "<p>Please only rate how well you can perceive these signals without using external cues, for example, if you can only perceive how fast your heart is beating when you measure it by taking your pulse this would not count as accurate internal perception.</p><br /><br/> ",
    require_movement: false,
    slider_width: null,
    data: {
        screen: "BPQ",
    },
}
