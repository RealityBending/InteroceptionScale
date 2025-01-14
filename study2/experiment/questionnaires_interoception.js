// MAIA-2 =================================================================================================
const items_maia = {
    MAIA_Noticing_1: "When I am tense I notice where the tension is located in my body",
    MAIA_Noticing_2: "I notice when I am uncomfortable in my body",
    MAIA_Noticing_3: "I notice where in my body I am comfortable",
    MAIA_Noticing_4: "I notice changes in my breathing, such as whether it slows down or speeds up",
    MAIA_NotDistracting_1_R:
        "I ignore physical tension or discomfort until they become more severe",
    MAIA_NotDistracting_2_R: "I distract myself from sensations of discomfort",
    MAIA_NotDistracting_3_R: "When I feel pain or discomfort, I try to power through it",
    MAIA_NotDistracting_4_R: "I try to ignore pain",
    MAIA_NotDistracting_5_R: "I push feelings of discomfort away by focusing on something",
    MAIA_NotDistracting_6_R:
        "When I feel unpleasant body sensations, I occupy myself with something else so I do not have to feel them",
    MAIA_NotWorrying_1_R: "When I feel physical pain, I become upset",
    MAIA_NotWorrying_2_R: "I start to worry that something is wrong if I feel any discomfort",
    MAIA_NotWorrying_3: "I can notice an unpleasant body sensation without worrying about it",
    MAIA_NotWorrying_4: "I can stay calm and not worry when I have feelings of discomfort or pain",
    MAIA_NotWorrying_5_R: "When I am in discomfort or pain I cannot get it out of my mind",
    MAIA_AttentionRegulation_1:
        "I can pay attention to my breath without being distracted by things happening around me",
    MAIA_AttentionRegulation_2:
        "I can maintain awareness of my inner bodily sensations even when there is a lot going on around me",
    MAIA_AttentionRegulation_3:
        "When I am in conversation with someone, I can pay attention to my posture",
    MAIA_AttentionRegulation_4: "I can return awareness to my body if I am distracted",
    MAIA_AttentionRegulation_5: "I can refocus my attention from thinking to sensing my body",
    MAIA_AttentionRegulation_6:
        "I can maintain awareness of my whole body even when a part of me is in pain or discomfort",
    MAIA_AttentionRegulation_7: "I am able to consciously focus on my body as a whole",
    MAIA_EmotionalAwareness_1: "I notice how my body changes when I am angry",
    MAIA_EmotionalAwareness_2: "When something is wrong in my life I can feel it in my body",
    MAIA_EmotionalAwareness_3: "I notice that my body feels different after a peaceful experience",
    MAIA_EmotionalAwareness_4:
        "I notice that my breathing becomes free and easy when I feel comfortable",
    MAIA_EmotionalAwareness_5: "I notice how my body changes when I feel happy / joyful",
    MAIA_SelfRegulation_1: "When I feel overwhelmed I can find a calm place inside",
    MAIA_SelfRegulation_2: "When I bring awareness to my body I feel a sense of calm",
    MAIA_SelfRegulation_3: "I can use my breath to reduce tension",
    MAIA_SelfRegulation_4:
        "When I am caught up in thoughts, I can calm my mind by focusing on my body/breathing",
    MAIA_BodyListening_1: "I listen for information from my body about my emotional state",
    MAIA_BodyListening_2: "When I am upset, I take time to explore how my body feels",
    MAIA_BodyListening_3: "I listen to my body to inform me about what to do",
    MAIA_Trusting_1: "I am at home in my body",
    MAIA_Trusting_2: "I feel my body is a safe place",
    MAIA_Trusting_3: "I trust my body sensations",
    MAIA_A: "I notice that I am being asked to respond all the way to the right",
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_maia(items, required = true, ticks = ["Never", "Always"]) {
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
const questionnaire_maia = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please indicate how often each statement applies to you generally in daily life.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_maia(items_maia),
        }
    },
    data: {
        screen: "questionnaire_maia",
    },
}


// IAS =================================================================================================
const items_ias = {
    IAS_1: "I can always accurately perceive when my heart is beating fast",
    IAS_2: "I can always accurately perceive when I am hungry",
    IAS_3: "I can always accurately perceive when I am breathing fast",
    IAS_4: "I can always accurately perceive when I am thirsty",
    IAS_5: "I can always accurately perceive when I need to urinate",
    IAS_6: "I can always accurately perceive when I need to defecate",
    IAS_7: "I can always accurately perceive when I encounter different tastes",
    IAS_8: "I can always accurately perceive when I am going to vomit",
    IAS_9: "I can always accurately perceive when I am going to sneeze",
    IAS_10: "I can always accurately perceive when I am going to cough",
    IAS_11: "I can always accurately perceive when I am hot/cold",
    IAS_12: "I can always accurately perceive when I am sexually aroused",
    IAS_13: "I can always accurately perceive when I am going to pass wind",
    IAS_14: "I can always accurately perceive when I am going to burp",
    IAS_15: "I can always accurately perceive when my muscles are tired/sore",
    IAS_16: "I can always accurately perceive when I am going to get a bruise",
    IAS_17: "I can always accurately perceive when I am in pain",
    IAS_18: "I can always accurately perceive when my blood sugar is low",
    IAS_19: "I can always accurately perceive when someone is touching me affectionately rather than non-affectionately",
    IAS_20: "I can always accurately perceive when something is going to be ticklish",
    IAS_21: "I can always accurately perceive when something is going to be itchy",
    IAS_A: "I can always accurately choose the lowest option",
}


// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_ias(items, required = true, ticks = ["Disagree Strongly", "Strongly Agree"]) {
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
            rateValues: [1, 2, 3, 4, 5],
        }
        questions.push(q)
    }

    return { elements: questions }
}

// Questionnaire ================================================
const questionnaire_ias = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please rate on the scale how accurately you believe you can perceive each specific signals without using external cues, e.g. measuring your pulse.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_ias(items_ias),
        }
    },
    data: {
        screen: "questionnaire_ias",
    },
}


//BPQ =================================================================================================

const items_bpq = {
    BodyAwareness_1: "Swallowing frequently.",
    BodyAwareness_2: "An urge to cough or clear my throat.",
    BodyAwareness_3: "An urge to cough or clear my throat.",
    BodyAwareness_4: "My mouth being dry.",
    BodyAwareness_5: "How fast I am breathing.",
    BodyAwareness_6: "Watering or tearing of my eyes.",
    BodyAwareness_7: "Noises associated with my digestion.",
    BodyAwareness_8: "An urge to defecate.",
    BodyAwareness_9: "Muscle tension in my arms and legs.",
    BodyAwareness_10: "An bloating feeling because of water retention.",
    BodyAwareness_11: "Muscle tension in my face.",
    BodyAwareness_12: "Goose bumps.",
    BodyAwareness_13: "Stomach and gut pains.",
    BodyAwareness_14: "Stomach distension or bloatedness.",
    BodyAwareness_15: "Palms sweating.",
    BodyAwareness_16: "Sweat on my forehead.",
    BodyAwareness_17: "Tremor in my lips.",
    BodyAwareness_18: "Sweat in my armpits.",
    BodyAwareness_19: "The temperature of my face (especially my ears).",
    BodyAwareness_20: "Grinding my teeth.",
    BodyAwareness_21: "General jitteriness.",
    BodyAwareness_22: "The hair on the back of my neck 'standing up'.",
    BodyAwareness_23: "Difficulty in focusing.",
    BodyAwareness_24: "An urge to swallow.",
    BodyAwareness_25: "How hard my heart is beating.",
    BodyAwareness_26: "Feeling constipated.",
    AutonomicNervous_1: "I have difficulty coordinating breathing and eating.",
    AutonomicNervous_2: "When I am eating, I have difficulty talking.",
    AutonomicNervous_3: "My heart often beats irregularly.",
    AutonomicNervous_4: "When I eat, food feels dry and sticks to my mouth and throat.",
    AutonomicNervous_5: "I feel shortness of breath.",
    AutonomicNervous_6: "I have difficulty coordinating breathing with talking.",
    AutonomicNervous_7: "When I eat, I have difficulty coordinating swallowing, chewing, and/or sucking with breathing.",
    AutonomicNervous_8: "I have a persistent cough that interferes with my talking and eating.",
    AutonomicNervous_9: "I gag from the saliva in my mouth.",
    AutonomicNervous_10: "I have chest pains.",
    AutonomicNervous_11: "I gag when I eat.",
    AutonomicNervous_12: "When I talk, I often feel I should cough or swallow the saliva in my mouth.",
    AutonomicNervous_13: "When I breathe, I feel like I cannot get enough oxygen.",
    AutonomicNervous_14: "I have difficulty controlling my eyes.",
    AutonomicNervous_15: "I feel like vomiting.",
    AutonomicNervous_16: "I have 'sour' stomach.",
    AutonomicNervous_17: "I am constipated.",
    AutonomicNervous_18: "I have indigestion.",
    AutonomicNervous_19: "After eating I have digestive problems.",
    AutonomicNervous_20: "I have diarrhea.",
    AutonomicNervous_A: "I have no difficulty responding all the way to the right.",
}


// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_bpq(items, required = true, ticks = ["Never", "Always"]) {
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
            rateValues: [1, 2, 3, 4, 5],
        }
        questions.push(q)
    }

    return { elements: questions }
}

// Questionnaire ================================================
const questionnaire_bpq = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "In your daily life, how often are you aware of the following sensations??",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_bpq(items_bpq),
        }
    },
    data: {
        screen: "questionnaire_bpq",
    },
}
