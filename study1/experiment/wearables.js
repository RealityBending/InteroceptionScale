var wearables_questions = {
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
                        title: "How often do you check your bodily signals with your device in a typical day (e.g., heart rate, calories burnt)?",
                        name: "Checking",
                        type: "radiogroup",
                        choices: [
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
                        visibleIf:
                            "{Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'",
                        title: "Which bodily signals do you check with your device?",
                        description: "Please select all that apply",
                        name: "Signals",
                        type: "checkbox",
                        choices: [
                            "Heart rate",
                            "Calories burnt",
                            "Calorie intake",
                            "Sleep quality",
                            "Blood oxygen level",
                            "Respiratory rate",
                            "Body Composition",
                        ],
                        showOtherItem: true,
                        showSelectAllItem: false,
                        showNoneItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf:
                            "{Usage} == '<1' || {Usage} == '1-2' || {Usage} == '3-4' || {Usage} == '5-6' || {Usage} == 'Everyday'",
                        title: "How important is it for you to check your bodily signals regularly?",
                        name: "Importance",
                        type: "radiogroup",
                        choices: [
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
        screen: "wearables_questions",
    },
}