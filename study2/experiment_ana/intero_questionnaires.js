// Instructions ================================================
const instructions = {
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
                            //"<h1>About you and your body...</h1>" +
                            "<h2>Instructions</h2>" +
                            //REPHRASE
                            "<p>In the stage, you will be asked various questions about the way you feel and think about your body. " +
                            "There are no right or wrong answers.</p>" +
                            "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, ...).</li>" +
                            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related). " +
                            // "<p style='color:green;'>At the end, you will be shown a <b>graph</b> summarizing your answers.<p>" +
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

// QUESTIONNAIRES ============================================================================================================================

// MAIA-2 questionnaire
const MAIA_items = [
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

// MINT Items ================================================
const MINT_items = [
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

// IAS questionnaire
const IAS_items = [
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

// BPQ questionnaire short version
const BPQ_items = [
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

// Function to shuffle an array - to shuffle items
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]] // Swap elements
    }
    return arr
}

function maia_questions(
    MAIA_items,
    required = true,
    ticks = ["Never", "Always"],
    pageId = "MAIA"
) {
    // Convert items into survey questions
    const questions = MAIA_items.map((item, index) => ({
        title: item, // The string from IAS_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [0, 1, 2, 3, 4, 5, 6], // 7-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function mint_questions(
    MINT_items,
    required = true,
    ticks = ["Disagree", "Agree"],
    pageId = "MINT"
) {
    // Convert items into survey questions
    const questions = MINT_items.map((item, index) => ({
        title: item, // The string from IAS_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [0, 1, 2, 3, 4, 5, 6], // 7-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function ias_questions(
    IAS_items,
    required = true,
    ticks = ["Disagree Strongly", "Strongly Agree"],
    pageId = "IAS" //
) {
    // Convert items into survey questions
    const questions = IAS_items.map((item, index) => ({
        title: item, // The string from IAS_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [1, 2, 3, 4, 5], // 5-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function bpq_questions(
    BPQ_items,
    required = true,
    ticks = ["Never", "Always"],
    pageId = "BPQ"
) {
    // Convert items into survey questions
    const questions = BPQ_items.map((item, index) => ({
        title: item, // The string from BPQ_items
        name: `${pageId}_item_${index + 1}`,
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [0, 1, 2, 3, 4, 5, 6], // 7-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

const questionnaires = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your body sensations...",
            description:
                "Below are several questionnaires about the way you feel and think about your body.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pageNextText: "Next",
            pagePrevText: "Previous",
            showProgressBar: "aboveHeader",
            pages: [
                // MAIA Questions with discription
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please indicate how often each statement applies to you generally in daily life.</p>`,
                        },
                        ...maia_questions(MAIA_items),
                    ],
                },

                // MINT Questions with discription
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please answer the following questions based on how accurately each statement describes you in general.</p>`,
                        },
                        ...mint_questions(MINT_items),
                    ],
                },

                // IAS Questions with Description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please rate on the scale how accurately you believe you can perceive each specific signal.</p>`,
                        },
                        ...ias_questions(IAS_items),
                    ],
                },
                // BPQ Questions with Description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please rate your awareness on each of the characteristics described below.</p>`,
                        },
                        ...bpq_questions(BPQ_items),
                    ],
                },
            ],
        }
    },
}
