
// Single-Item Life Satisfaction Scale

var demographics_sils = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Single-Item Life Satisfaction Scale",
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

    data: {
        screen: "demographics_sils",
    },
}


// TAS-20

var TAS_items = [
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

var TAS_dimensions = [
    "IdentifyingFeelings_1",
    "IdentifyingFeelings_2",
    "IdentifyingFeelings_3",
    "IdentifyingFeelings_4",
    "IdentifyingFeelings_5",
    "IdentifyingFeelings_6",
    "IdentifyingFeelings_7",
    "DescribingFeelings_1",
    "DescribingFeelings_2",
    "DescribingFeelings_3",
    "DescribingFeelings_4",
    "DescribingFeelings_5",
    "ExternalThinking_1",
    "ExternalThinking_2",
    "ExternalThinking_3",
    "ExternalThinking_4",
    "ExternalThinking_5",
    "ExternalThinking_6",
    "ExternalThinking_7",
    "ExternalThinking_8",
]

var TAS_questions = []
for (const [index, element] of TAS_items.entries()) {
    TAS_questions.push({
        prompt: "<b>" + element + "</b>",
        name: TAS_dimensions[index],
        ticks: ["Strongly Disagree", "Strongly Agree"],
        required: false,
        min: 1,
        max: 5,
        step: 1,
        slider_start: 3,
    })
}

var TAS = {
    type: jsPsychMultipleSlider,
    questions: TAS_questions,
    randomize_question_order: true,
    preamble:
        "<h2>About your emotions...</h2>" +
        "<p>Please indicate your sense of agreement or disagreement with each statement.</p><br /><br/>",
    require_movement: false,
    slider_width: null,
    data: { screen: "demographics_tas",
    },
}


// Emotion Regulation Questionnaire - Short

var ERQS_items = [
    "When I want to feel more positive emotion, I change the way I am thinking about the situation",
    "I control my emotions by not expressing them",
    "When I want to feel less negative emotion, I change the way I am thinking about the situation",
    "When I am feeling positive emotions, I am careful not to express them",
    "I control my emotions by changing the way I think about the situation I am in",
    "When I am feeling negative emotions, I make sure not to express them",
]

var ERQS_dimensions = [
    "CognitiveReappraisal_1",
    "ExpressiveSuppression_1",
    "CognitiveReappraisal_2",
    "ExpressiveSuppression_2",
    "CognitiveReappraisal_3",
    "ExpressiveSuppression_3",
]

var ERQS_questions = []
for (const [index, element] of ERQS_items.entries()) {
    ERQS_questions.push({
        prompt: "<b>" + element + "</b>",
        name: ERQS_dimensions[index],
        ticks: ["Strongly Disagree", "Strongly Agree"],
        required: false,
        min: 1,
        max: 7,
        step: 1,
        slider_start: 4,
    })
}

var ERQS = {
    type: jsPsychMultipleSlider,
    questions: ERQS_questions,
    randomize_question_order: false,
    preamble:
        "<h2>About your emotions...</h2>" +
        "<p>We would like to ask you some questions about your emotional life.</p>" +
        "<p>Specifically, we would like to know how you regulate and manage your emotions.</p><br /><br/>",
    require_movement: false,
    slider_width: null,
    data: {
        screen: "demographics_erqs",
    },
}


// PHQ-4

var demographics_phq4 = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Over the last two weeks, how often have you been bothered by the following problems?",
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
                        title: "Feeling nervous, anxious or on edge",
                        name: "PHQ4_1",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all",
                            "Several days",
                            "More than half the days",
                            "Nearly every day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        title: "Not being able to stop or control worrying",
                        name: "PHQ4_2",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all",
                            "Several days",
                            "More than half the days",
                            "Nearly every day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        title: "Feeling down, depressed or hopeless ",
                        name: "PHQ4_3",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all",
                            "Several days",
                            "More than half the days",
                            "Nearly every day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        title: "Little interest or pleasure in doing things",
                        name: "PHQ4_4",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all",
                            "Several days",
                            "More than half the days",
                            "Nearly every day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                ],
            },
        ],
    },

    data: {
        screen: "demographics_phq4",
    },
}


// Physical and mental disorders

var demographics_disorders = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Your Physical and Mental Health",
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

    data: {
        screen: "demographics_disorders",
    },
}

