// Conditions 

// Quiz information at the beginning 
const quiz_info = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "I understand",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "QuizInfo",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 40%;'>" +
                            "<center><figure><img src='img/warning.png' alt='Warning' style='width: 50%;'></figure></center>" +
                            "</div>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h3 style='color:#FF5722'><b>Conditional Credit Allocation</b></h3>" +
                            "<p> Please note that this experiment includes a <b>short quiz at the end</b> with a few multiple-choice questions about the experiment and its content." +
                            " This quiz helps ensure the validity of the data." +
                            "<p><p>To receive your course credits, you <b>must pass this brief quiz</b>!</p></p>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

// Quiz at the end 
const quiz_items = {
    type: jsPsychSurvey,
    survey_json: {
        title: "About the experiment",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        title: "This questionnaire involved a lot of questions on?",
                        name: "Quiz_1",
                        type: "radiogroup",
                        choices: ["Bodily feelings", "Music preferences", "Travel habits", "Ability to remember facts"],
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "One questionnaire was about my political beliefs",
                        name: "Quiz_2",
                        type: "boolean",
                        renderAs: "radio",
                        valueTrue: "True",
                        valueFalse: "False",
                        isRequired: true,
                    },
                    {
                        title: "Some of the questions asked about my ability to regulate?",
                        name: "Quiz_3",
                        type: "radiogroup",
                        choices: ["My emotions", "My financial investments", "My social media presence", "My food intake"],
                        isRequired: true,
                        colCount: 1,
                    }
                ]
            }
        ]
    },
    data: {
        screen: "quiz_answers"
    }
}