// Consent Form =================================================================
// The consent form is dynamically generated based on the URL variables.

const ConsentForm = {
    type: jsPsychSurvey,
    survey_json: function () {
        // Get URL variables
        let urlvars = jsPsych.data.urlVariables()

        // Logo and title
        let text =
            "<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>" +
            "<h1>Informed Consent</h1>"

        // this part is about specific messages for participants based on the recruitment platform
        if (urlvars["exp"] == "surveyswap") {
            text +=
                "<p style='color:green;' align='left'><b>Note: You will receive a <i style='color:purple;'>SurveySwap.iocompletion code</i>  at the end of the experiment.</b></p>"
        }

        if (jsPsych.data.urlVariables()["exp"] == "prolific") {
            text +=
                "<p style='color:green;' align='left'><b>Note: You will receive information regarding your <i style='color:purple;'>Prolific</i> participation at the end of the experiment.</b></p>"
        }

        if (jsPsych.data.urlVariables()["exp"] == "sona") {
            text +=
                "<p style='color:green;' align='left'><b>Note: You will receive a <i style='color:purple;'>Sona completion code</i> at the end of the experiment.</b></p>"
        }
        // Main Text
        text +=
            // Overview
            "<p align='left'><b>Invitation to Take Part</b><br>" +
            "Thank you for considering to take part in this study conducted by Dr Dominique Makowski from the University of Sussex and his team (see contact information below).</p>" +
            // Description
            "<p align='left'><b>Why have I been invited and what will I do?</b><br>" +
            "The aim of this study is to validate a new questionnaire measuring Interoception. Interoception refers to the sensing, interpretation and processing of internal bodily signals (e.g., feeling changes in the way one's heart beats). " +
            "The whole experiment will take you <b style='color:#FF5722;'>~30 min</b> to complete. Please make you sure that you are <b>attentive and in a quiet environment</b>, and that you have time to complete it in one go.</p>" +
            // Results and personal information
            "<p align='left'><b>What will happen to the results and my personal information?</b><br>" +
            "The results of this research may be written into a scientific publication. Your anonymity will be ensured in the way described in the consent information below. <b>Please read this information carefully</b> and then, if you wish to take part, please acknowledge that you have fully understood this sheet, and that you consent to take part in the study as it is described here.</p>" +
            "<p align='left'><b>Consent</b><br></p>" +
            // Bullet points
            "<li align='left'>I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet</li>" +
            "<li align='left'>I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalized in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).</li>" +
            "<li align='left'>I understand that since the study is anonymous, it will be impossible to withdraw my data once I have completed it.</li>" +
            "<li align='left'>I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.</li>" +
            "<li align='left'>I understand that my collected data will be stored in a de-identified way. De-identified data may be made publicly available through secured scientific online data repositories.</li>"

        // Incentive
        if (["surveyswap", "prolific", "sona"].includes(urlvars["exp"])) {
            text +=
                "<li align='left'>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, ...).</li>"
        }

        // End
        text +=
            "<li align='left'>By participating, you agree to follow the instructions and provide honest answers. If you do not wish to participate or if you don't have the time, simply close your browser.</li></p>" +
            "<p align='left'><br><sub><sup>For further information about this research, or if you have any concerns, please contact Dr Dominique Makowski (<i style='color:DodgerBlue;'>D.Makowski@sussex.ac.uk</i>) and/or Ana Neves (<i style='color:DodgerBlue;'>asf25@sussex.ac.uk</i>). This research has been approved (ER/XXXX/X) by the Sciences & Technology Cross-Schools Research Ethics Committee (C-REC) (<i style='color:DodgerBlue;'>crecscitec@sussex.ac.uk</i>). The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.</sup></sub></p>"

        // Return Survey
        return {
            showQuestionNumbers: false,
            completeText: "I read, understood, and I consent",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "ConsentForm",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
}

// var demographics_browser_info = {
//     type: jsPsychBrowserCheck,
//     data: {
//         screen: "browser_info",
//         date: new Date().toLocaleDateString("en-GB"),
//         time: new Date().toLocaleTimeString("en-GB"),
//     },
//     on_finish: function (data) {
//         data["participantID"] = participantID
//         data["condition"] = intero_condition

//         // Rename
//         dat = jsPsych.data.get().filter({ screen: "browser_info" }).values()[0]
//         data["screen_height"] = dat["height"]
//         data["screen_width"] = dat["width"]

//         // Add URL variables - ?sona_id=x&exp=1
//         let urlvars = jsPsych.data.urlVariables()
//         data["researcher"] = urlvars["exp"]
//         data["sona_id"] = urlvars["sona_id"]
//         data["prolific_id"] = urlvars["PROLIFIC_PID"] // Prolific
//         data["study_id"] = urlvars["STUDY_ID"] // Prolific
//         data["session_id"] = urlvars["SESSION_ID"] // Prolific
//     },
// }


// Demographic questions

var demographic_questions = {
    type: jsPsychSurvey,
    survey_json: {
        title: "About yourself",
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
                        title: "What is your gender?",
                        name: "Gender",
                        type: "radiogroup",
                        choices: ["Male", "Female", "Other"],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        type: "text",
                        title: "Please enter your age (in years)",
                        name: "Age",
                        isRequired: true,
                        inputType: "number",
                        min: 0,
                        max: 100,
                        placeholder: "e.g., 21",
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "What is your highest completed education level?",
                        name: "Education",
                        type: "radiogroup",
                        choices: [
                            {
                                value: "Doctorate",
                                text: "University (doctorate)",
                            },
                            {
                                value: "Master",
                                text: "University (master)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "Bachelor",
                                text: "University (bachelor)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "High school",
                                text: "High school",
                            },
                            {
                                value: "Elementary school",
                                text: "Elementary school",
                            },
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf:
                            "{Education} == 'Doctorate' || {Education} == 'Master' || {Education} == 'Bachelor'",
                        title: "What is your discipline?",
                        name: "Discipline",
                        type: "radiogroup",
                        choices: [
                            "Arts and Humanities",
                            "Literature, Languages",
                            "History, Archaeology",
                            "Sociology, Anthropology",
                            "Political Science, Law",
                            "Business, Economics",
                            "Psychology, Neuroscience",
                            "Medicine",
                            "Biology, Chemistry, Physics",
                            "Mathematics, Physics",
                            "Engineering, Computer Science",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                    },
                    {
                        visibleIf:
                            "{Education} == 'High school' || {Education} == 'Master' || {Education} == 'Bachelor'",
                        title: "Are you currently a student?",
                        name: "Student",
                        type: "boolean",
                        swapOrder: true,
                        isRequired: true,
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "How would you describe your ethnicity?",
                        name: "Ethnicity",
                        type: "radiogroup",
                        choices: [
                            "White",
                            "Black",
                            "Hispanic/Latino",
                            "Middle Eastern/North African",
                            "South Asian",
                            "East Asian",
                            "Southeast Asian",
                            "Mixed",
                            "Prefer not to say",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: false,
                        colCount: 1,
                    },
                    {
                        title: "In which country are you currently living?",
                        name: "Country",
                        type: "dropdown",
                        choicesByUrl: {
                            url: "https://surveyjs.io/api/CountriesExample",
                        },
                        placeholder: "e.g., France",
                        isRequired: false,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "demographic_questions",
    },
}


// Wearable devices survey

var demographics_wearables = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Wearable Device Usage",
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
                        title: "Do you own a device that can monitor any of the following?",
                        description:
                            "Many electronic devices, like smart watches, sports sensors (FitBits) or medical devices, can detect bodily signals such as heart rate, sleep quality, etc.",
                        name: "Wearables_Ownership",
                        type: "checkbox",
                        choices: [
                            "Heart rate",
                            "Number of steps",
                            "Calories burnt",
                            "Calorie intake",
                            "Sleep quality",
                            "Respiratory rate",
                        ],
                        showSelectAllItem: false,
                        showNoneItem: true,
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        separateSpecialChoices: true,
                        colCount: 0,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Wearables_Ownership} notcontains 'None'",
                        title: "How important is this information about your body to you?",
                        name: "Wearables_Importance",
                        type: "rating",
                        rateCount: 8,
                        rateMin: 0,
                        rateMax: 7,
                        minRateDescription: "Not at all",
                        maxRateDescription: "Very much",
                    },
                    {
                        visibleIf: "{Wearables_Ownership} contains 'Heart rate'",
                        title: "How often do you check your heart rate with your device?",
                        name: "Wearables_Heart",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Very rarely",
                            "A few times per week",
                            "A few times per day",
                            "A few times per hour",
                            "Whenever I have the occasion",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                ],
            },
        ],
    },

    data: {
        screen: "demographics_wearables",
    },
}


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
    data: {
        screen: "demographics_tas",
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



// Feedback, Debrief, Thank you Screen

var experiment_feedback = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Feedback",
        description: 
            "It is the end of the experiment! Don't hesitate to leave us a feedback.",
        completeText: "Complete the experiment",
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Feedback_Alert",
                        html: "<p><b style='color:red;'>Answers to these questions will not affect your reward but will help us to contextualize your answers</b></p>"
                    },
                    {
                        type: "rating",
                        name: "Feedback_Enjoyment",
                        title: "Did you enjoy doing this experiment?",
                        isRequired: false,
                        rateMin: 0,
                        rateMax: 4,
                        rateType: "stars",
                    },
                    {
                        type: "comment",
                        name: "Feedback_Text",
                        title: "Anything else you would like to share with us?",
                        description:
                            "Please note that these comments might be shared publicly as part of the results of this study - avoid sharing personal information.",
                        isRequired: false,
                    },
                    {
                        type: "rating",
                        name: "Feedback_Performance",
                        title: "To what extent did you do the experiment carefully and to the best of your abilities?",
                        isRequired: false,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "experiment_feedback",
    },
}

var demographics_debriefing = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Continue",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Debrief",
                        html:
                            "<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>" +
                            "<h2>Debriefing</h2>" +
                            "<p align='left'>The purpose of this study was to create and validate a new questionnaire measuring interoception. " +
                            "Interoception involves being aware of changes happening inside our bodies, both physiological (e.g., our heart rate) and emotional, and it plays a crucial role in how we perceive and experience the world around us. It has been related to emotion regulation, self-awareness and overall mental well-being. " +
                            "<p align='left'><b>Thank you again!</b> Your participation in this study will be kept completely confidential. If you have any questions or concerns about the project, please contact D.Makowski@sussex.ac.uk.</p>" +
                            "<p>To complete your participation in this study, click on 'Continue' and <b>wait until your responses have been successfully saved</b> before closing the tab.</p> ",
                    },
                ],
            },
        ],
    },
    data: {
        screen: "demographics_debrief",
    },
    on_finish: function (data) {
        let score = check_attentionchecks() // This function is defined in intero.js
        if (score >= 0.75) {
            //  TODO: Change later
            data["Reward"] = "Automatic"
            data["AttentionScore"] = score
        } else {
            data["Reward"] = "Return"
            data["AttentionScore"] = score
        }
    },
}

var demographics_endscreen = {
    type: jsPsychSurvey,
    survey_json: function () {
        text =
            "<h2 style='color:green;'>Data saved successfully!</h2>" +
            "<p>Thank you for participating, it means a lot to us.</p>"

        // Snowball (uncomment if the study is really fun)
        // text +=
        //     "<p>Don't hesitate to share the study by sending this link <i>(but please don't reveal the details of the experiment)</i>:</p>" +
        //     "<p><a href='" +
        //     "https://realitybending.github.io/InteroceptionScale/study1/experiment/index.html" +
        //     "'>" +
        //     "https://realitybending.github.io/InteroceptionScale/study1/experiment/index.html" +
        //     "<a/></p>"

        // TEST:
        // data.reimbursment = "Automatic"

        // Deal with Prolific/SurveyCircle/SurveySwap/SONA
        if (jsPsych.data.urlVariables()["exp"] == "prolific") {
            d = jsPsych.data.get().filter({ screen: "demographics_debrief" })["trials"][0]
            if (d["Reward"] == "Automatic") {
                text +=
                    "<p><b style='color:red;'>After clicking 'End', you will be redirected to the Prolific reimbursement page</b> (You can alternatively click " +
                    "<a href='https://app.prolific.com/submissions/complete?cc=C8I1NGST'>here<a/>" +
                    " to directly access the link).</p>"
            } else {
                text +=
                    "<p><b style='color:red;'>Unfortunately, your participation data did not pass our quality check algorithm (this is typically caused by random patterns of answers and failed attention check questions)." +
                    " In order to avoid any penalties, we suggest that you return your participation by clicking " +
                    "<a href='https://app.prolific.com/submissions/complete?cc=C1BHVQIZ'>here<a/>" +
                    ". We apologize for this outcome. Please don't hesitate to contact us on Prolific if you believe that there was a mistake.</p>"
            }
        }
        if (jsPsych.data.urlVariables()["exp"] == "surveyswap") {
            text +=
                "<p style='color:red;'><b>Click " +
                "<a href='https://surveyswap.io/sr/E9XP-DWMS-BHA3'>here<a/>" +
                " to redeem your SurveySwap participation</b><br>(in case the link doesn't work, the code is: E9XP-DWMS-BHA3)</p>"
        }
        text += "<p><b>You can safely close the tab now.</b></p>"

        // Return survey
        return {
            showQuestionNumbers: false,
            completeText: "End",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "Endscreen",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
    data: {
        screen: "demographics_endscreen",
    },
}
