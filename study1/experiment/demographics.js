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

        if (urlvars["exp"] == "surveyswap") {
            text +=
                "<p style='color:green;' align='left'><b>Note: You will receive a <i style='color:purple;'>SurveySwap.io</i> completion code at the end of the experiment.</b></p>"
        }

        // Main Text
        text +=
            // Overview
            "<p align='left'><b>Invitation to Take Part</b><br>" +
            "Thank you for considering to take part in this study conducted by Dr Dominique Makowski from the University of Sussex (see contact information below).</p>" +
            // Description
            "<p align='left'><b>Why have I been invited and what will I do?</b><br>" +
            "The goal is to study how new technology can impact <b>human perception</b>. In this study, you will be shown facial images and asked to complete a few questionnaires and perform some tasks. " +
            "The whole experiment will take you <b style='color:#FF5722;'>~35 min</b> to complete. Please make you sure that you are <b>attentive and in a quiet environment</b>, and that you have time to complete it in one go.</p>" +
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
        if (["surveyswap", "prolific"].includes(urlvars["exp"])) {
            text +=
                "<li align='left'>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, ...).</li>"
        }

        // End
        text +=
            "<li align='left'>By participating, you agree to follow the instructions and provide honest answers. If you do not wish to participate or if you don't have the time, simply close your browser.</li></p>" +
            "<p align='left'><br><sub><sup>For further information about this research, or if you have any concerns, please contact Dr Dominique Makowski (<i style='color:DodgerBlue;'>D.Makowski@sussex.ac.uk</i>). This research has been approved (xx/xxxxx/x) by the ethics board of the School of Psychology. The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.</sup></sub></p>"

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
                        title: "Are you currrently a student?",
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

var wearables_questions = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Wearable Device Usage",
        description: "This section is about your usage of 'wearables', i.e. electronic devices that are worn on your body. Some examples of this include smart watches, smart jewelry or medical devices. These wearables have built-in sensors that can detect bodily signals, such as heart rate or respiration rate.",
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
                        title: "Do you own a wearable device?",
                        name: "Ownership",
                        type: "radiogroup",
                        choices: [
                            {
                                value: "Yes",
                                text: "Yes",
                            },
                            {
                                value: "No",
                                text: "No",
                            },
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        visibleIf: "{Ownership} == 'Yes'",
                        title: "How often do you use a wearable device in a typical week (e.g., FitBit, Smart Watch)?",
                        name: "Usage",
                        type: "radiogroup",
                        choices: [
                            {
                                value: "Never",
                                text: "Never",
                            },
                            {
                                value: "<1",
                                text: "Less than 1 day per week",
                            },
                            {
                                value: "1-2",
                                text: "1-2 days per week",
                            },
                            {
                                value: "3-4",
                                text: "3-4 days per week",
                            },
                            {
                                value: "5-6",
                                text: "5-6 days per week",
                            },
                            {
                                value: "Everyday",
                                text: "Every day",
                            },
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        visibleIf:
                            "{Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'",
                        title: "Which bodily signals do you check with your device?",
                        description: "Please select all that apply",
                        name: "Signals",
                        type: "checkbox",
                        choices: [
                            {
                                value: "ECG",
                                text: "Heart rate",
                            },
                            {
                                value: "CaloriesBurnt",
                                text: "Calories burnt",
                            },
                            {
                                value: "CalorieIntake",
                                text: "Calorie intake",
                            },
                            {
                                value: "Sleep",
                                text: "Sleep quality",
                            },
                            {
                                value: "BloodOxygen",
                                text: "Blood oxygen level",
                            },
                            {
                                value: "RSP",
                                text: "Respiratory rate",
                            },
                            {
                                value: "Composition",
                                text: "Body Composition",
                            },
                            {
                                value: "None",
                                text: "I don't check",
                            },
                        ],
                        showOtherItem: true,
                        showSelectAllItem: false,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 1,
                    },
                ]
            },
            {
                elements: [
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your heart rate with your device in a typical day?",
                        name: "CheckingECG",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your heart rate regularly?",
                        name: "ImportanceECG",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check how many calories you have burnt with your device in a typical day?",
                        name: "CheckingCaloriesBurnt",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check how many calories you have burnt regularly?",
                        name: "ImportanceCaloriesBurnt",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your calorie intake with your device in a typical day?",
                        name: "CheckingCalorieIntake",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your calorie intake regularly?",
                        name: "ImportanceCalorieIntake",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your sleep quality with your device in a typical day?",
                        name: "CheckingSleep",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your sleep quality regularly?",
                        name: "ImportanceSleep",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your blood oxygen levels with your device in a typical day?",
                        name: "CheckingBloodOxygen",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your blood oxygen levels regularly?",
                        name: "ImportanceBloodOxygen",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your respiratory rate with your device in a typical day?",
                        name: "CheckingRSP",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your respiratory rate regularly?",
                        name: "ImportanceRSP",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How often do you check your body composition with your device in a typical day?",
                        name: "CheckingComposition",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Never",
                            "Less than once per day",
                            "1-2 times per day",
                            "3-5 times per day",
                            "6+ times per day",
                        ],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        //visibleIf: "({Signals} == 'ECG' and ({Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'))",
                        title: "How important is it for you to check your body composition regularly?",
                        name: "ImportanceComposition",
                        type: "rating",
                        displayMode: "buttons",
                        rateValues: [
                            "Not at all important",
                            "Low importance",
                            "Slightly important",
                            "Moderately important",
                            "Very important",
                            "Extremely important",
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

// Feedback, Debrief, Thank you Screen 

var experiment_feedback = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Feedback",
        description:
            "It is the end of the experiment! Don't hesitate to leave us feedback. After clicking 'Complete', your data will be saved on our secure servers, after what we will provide you with more information about the study. Please note that these comments might be shared publically alongside the results of this study",
        completeText: "Complete the experiment",
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
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
    type: jsPsychCanvasButtonResponse,
    css_classes: ["narrow-text"],
    stimulus:
        "<h2>Debriefing</h2>" +
        "<p align='left'>The purpose of this study was to create and validate a new questionnaire measuring interoception. " +
        "Interoception involves being aware of changes happening inside our bodies, both physiological (e.g., our heart rate) and emotional, and it plays a crucial role in how we perceive and experience the world around us. It has been related to emotion regulation, self-awareness and overall mental well-being. " +
        "<p align='left'><b>Thank you again!</b> Your participation in this study will be kept completely confidential. If you have any questions or concerns about the project, please contact D.Makowski@sussex.ac.uk.</p>" +
        "<p>To complete your participation in this study, click on 'Continue' and <b>wait until your responses have been successfully saved</b> before closing the tab.</p> ",
    choices: ["Continue"],
    data: { screen: "debriefing" },
}

var demographics_endscreen = {
    type: jsPsychCanvasButtonResponse,
    css_classes: ["narrow-text"],
    stimulus: function () {
        let text =
            "<h1>Thank you for participating</h1>" +
            "<p>It means a lot to us. Don't hesitate to share the study by sending this link <i>(but please don't reveal the details of the experiment)</i>:</p>" +
            "<p><a href='" +      
            "https://realitybending.github.io/InteroceptionScale/study1/experiment/index.html" + 
            "'>" +
            "<a/></p>"
        return text + "<p><b>You can safely close the tab now.</b></p>"
    },
    choices: ["End"],
    data: { screen: "endscreen" },
}
