// TAS-20 questionnaire

const tas_items = [
    "I am often confused about what emotion I am feeling",
    "I have physical sensations that even doctors don't understand",
    "When I am upset, I don't know if I am sad, frightened, or angry",
    "I am often puzzled by sensations in my body",
    "I have feelings that I can't quite identify",
    "I don't know what's going on inside me",
    "I often don't know why I am angry",
    "It is difficult for me to find the right words for my feelings",
    "I am able to describe my feelings easily",
    "I find it hard to describe how I feel about people",
    "People tell me to describe my feelings more",
    "It is difficult for me to reveal my innermost feelings, even to close friends",
    "I prefer to analyze problems rather than just describe them",
    "I prefer to just let things happen rather than to understand why they turned out that way",
    "Being in touch with emotions is essential",
    "I prefer talking to people about their daily activities rather than their feelings",
    "I prefer to watch 'light' entertainment shows rather than psychological dramas",
    "I can feel close to someone, even in moments of silence",
    "I find examination of my feelings useful in solving personal problems",
    "Looking for hidden meanings in movies or plays distracts from their enjoyment",
]

// Emotion Regulation Questionnaire - Short

const erqs_items = [
    "When I want to feel more positive emotion, I change the way I am thinking about the situation",
    "I control my emotions by not expressing them",
    "When I want to feel less negative emotion, I change the way I am thinking about the situation",
    "When I am feeling positive emotions, I am careful not to express them",
    "I control my emotions by changing the way I think about the situation I am in",
    "When I am feeling negative emotions, I make sure not to express them",
]

// PHQ-4 Questionnaire

const phq4_items = [
    "Feeling nervous, anxious or on edge",
    "Not being able to stop or control worrying",
    "Feeling down, depressed or hopeless",
    "Little interest or pleasure in doing things",
]

// Cernis Felt Sense of Anomaly Scale - Short

const cefsa_items = [
    "I don't fully experience emotions",
    "I feel disconnected from the world around me",
    "I'm absorbed in my own world and don't notice what is happening around me",
    "My personality changes seemingly at random",
    "I feel disconnected from other people",
    "I find myself drifting off into my own world when I'm with others",
    "My body (or parts of it) feels unreal or strange",
    "I feel detached from my emotions",
    "I act like someone else without meaning to",
    "People I know seem unfamiliar",
    "I feel as though other people stop existing when I can't see them",
    "My body feels numb",
    "Things I've done many times before seem new or unfamiliar",
    "I feel like an alien or a ghost",
]

// Primals Questionnaire - Short

const pi18_items = [
    "In life, there's way more beauty than ugliness",
    "It often feels like events are happening in order to help me in some way",
    "I tend to see the world as pretty safe",
    "What happens in the world is meant to happen",
    "While some things are worth checking out or exploring further, most things probably aren't worth the effort",
    "Most things in life are kind of boring",
    "The world is an abundant place with tons and tons to offer",
    "No matter where we are or what the topic might be, the world is fascinating",
    "The world is a somewhat dull place where plenty of things are not that interesting",
    "On the whole, the world is a dangerous place",
    "Instead of being cooperative, the world is a cut-throat and competitive place",
    "Events seem to lack any cosmic or bigger purpose",
    "Most things have a habit of getting worse",
    "The universe needs me for something important",
    "Most things in the world are good",
    "Everything happens for a reason and on purpose",
    "Most things and situations are harmless and totally safe",
    "No matter where we are, incredible beauty is always around us",
]

// Function to shuffle an array - to shuffle items
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]] // Swap elements
    }
    return arr
}

function tas_questions(
    tas_items,
    required = true,
    ticks = ["Strongly Disagree", "Strongly Agree"],
    pageId = "TAS"
) {
    // Convert items into survey questions
    const questions = tas_items.map((item, index) => ({
        title: item, // The string from tas_items
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

function erqs_questions(
    erqs_items,
    required = true,
    ticks = ["Strongly Disagree", "Strongly Agree"],
    pageId = "ERQS"
) {
    // Convert items into survey questions
    const questions = erqs_items.map((item, index) => ({
        title: item, // The string from erqs_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [1, 2, 3, 4, 5, 6, 7], // 7-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function phq4_questions(
    phq4_items,
    required = true,
    ticks = ["Not al all", "Nearly every day"],
    pageId = "PHQ4"
) {
    // Convert items into survey questions
    const questions = phq4_items.map((item, index) => ({
        title: item, // The string from phq4_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function cefsa_questions(
    cefsa_items,
    required = true,
    ticks = ["Never", "Always"],
    pageId = "CEFSA"
) {
    // Convert items into survey questions
    const questions = cefsa_items.map((item, index) => ({
        title: item, // The string from cefsa_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [0, 1, 2, 3, 4], // 5-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

function pi18_questions(
    pi18_items,
    required = true,
    ticks = ["Strongly Disagree", "Strongly Agree"],
    pageId = "PI18"
) {
    // Convert items into survey questions
    const questions = pi18_items.map((item, index) => ({
        title: item, // The string from pi18_items
        name: `${pageId}_item_${index + 1}`, // Unique name for each question
        type: "rating",
        displayMode: "buttons",
        isRequired: required,
        minRateDescription: ticks[0],
        maxRateDescription: ticks[1],
        rateValues: [0, 1, 2, 3, 4, 5], // 6-point Likert scale
    }))

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions
}

const converg_questionnaires = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            // Single-Item Life Satisfaction Scale
            title: "About your life satisfaction...",
            completeText: "Continue",
            pageNextText: "Next",
            pagePrevText: "Previous",
            goNextPageAutomatic: false,
            showQuestionNumbers: false,
            showProgressBar: "aboveHeader",
            pages: [
                {
                    elements: [
                        {
                            title: "Thinking about your own life and personal circumstances, how satisfied are you with your life as a whole?",
                            name: "SILS",
                            type: "rating",
                            rateCount: 11,
                            rateMin: 0,
                            rateMax: 10,
                            minRateDescription: "No satisfaction at all",
                            maxRateDescription: "Completely satisfied",
                        },
                    ],
                },
            ],
        },
        {
            title: "About your physical and mental health...",
            description:
                "Below are some questions about your health.",
            completeText: "Continue",
            pageNextText: "Next",
            pagePrevText: "Previous",
            goNextPageAutomatic: false,
            showQuestionNumbers: false,
            showProgressBar: "aboveHeader",
            pages: [
                {
                    elements: [
                        {
                            title: "Do you have any physical disorders?",
                            name: "Physical_Disorders",
                            type: "boolean",
                            swapOrder: true,
                            isRequired: true,
                        },
                        {
                            visibleIf: "{Physical_Disorders} == 'Yes'",
                            type: "text",
                            title: "Please specify",
                            name: "Physical_Type",
                            isRequired: true,
                            placeholder: "e.g., Asthma, Fibromyalgia",
                        },
                        {
                            title: "Do you have any mental disorders?",
                            name: "Mental_Disorders",
                            type: "boolean",
                            swapOrder: true,
                            isRequired: true,
                        },
                        {
                            visibleIf: "{Mental_Disorders} == 'Yes'",
                            type: "text",
                            title: "Please specify",
                            name: "Mental_Type",
                            isRequired: true,
                            placeholder: "e.g., Anxiety, ADHD",
                        },
                    ],
                },
            ],
        },
        {
            title: "About your emotions...",
            description:
                "Below are several questionnaires about your emotional life.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pageNextText: "Next",
            pagePrevText: "Previous",
            showProgressBar: "aboveHeader",
            pages: [
                // TAS Questions with description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please indicate your sense of agreement or disagreement with each statement.</p>`,
                        },
                        ...tas_questions(tas_items),
                    ],
                },

                // ERQ-S Questions with description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please answer the following questions based on how accurately each statement describes you in general.</p>`,
                        },
                        ...erqs_questions(erqs_items),
                    ],
                },

                // PHQ-4 Questions with description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Over the last two weeks, how often have you been bothered by the following problems?</p>`,
                        },
                        ...phq4_questions(phq4_items),
                    ],
                },
                // CEFSA-S Questions with description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Please read the following items and rate how often you have experienced these over the past two weeks.</p>` +
                            `<p>Please note that this should NOT be whilst under the influence of drugs, alcohol or legal highs.</p>`,
                        },
                        ...cefsa_questions(cefsa_items),
                    ],
                },
            ],
        },
        {
            title: "About the world we live in...",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pageNextText: "Next",
            pagePrevText: "Previous",
            showProgressBar: "aboveHeader",
            pages: [
                // PI-18 Questions with description
                {
                    elements: [
                        {
                            type: "html",
                            html: `<p>Below are very general statements about the world, not the world we wish we lived in, but the actual world as it is now.</p>` +
                            `<p>Please share your sense of agreement or disagreement.</p>` +
                            `<p>When in doubt, go with what initially feels true of the real world.</p>` +
                            `<p><p>There are no wrong answers. There is no need to overthink.</p><br /><br/>`,
                        },
                        ...pi18_questions(pi18_items),
                    ],
                },
            ],
        }
    },
}