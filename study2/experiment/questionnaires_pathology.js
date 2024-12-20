// PHQ-4 ================================================
const items_phq4 = {
    PHQ4_Anxiety_1: "Feeling nervous, anxious or on edge",
    PHQ4_Anxiety_2: "Not being able to stop or control worrying",
    PHQ4_Depression_3: "Feeling down, depressed, or hopeless",
    PHQ4_Depression_4: "Little interest or pleasure in doing things",
}

const instructions_phq4 = {
    type: "html",
    name: "instructions_phq4",
    html: "<p>Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?</p>",
}

function make_phq4(items, required = true) {
    questions = [instructions_phq4]

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            isRequired: required,
            rateValues: [
                {
                    value: 0,
                    text: "Not at all",
                },
                {
                    value: 0.5,
                    text: "Once or twice",
                },
                {
                    value: 1,
                    text: "Several days",
                },
                {
                    value: 2,
                    text: "More than half the days",
                },
                {
                    value: 3,
                    text: "Nearly every day",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_phq4 = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your mood",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_phq4(items_phq4),
        }
    },
    data: {
        screen: "questionnaire_phq4",
    },
}

// Psychiatric Disorders ================================================
const questions_mentalhealth = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Mental health",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: true,
        showQuestionNumbers: false,
        // showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        title: "Are you currently living with one of the following medically diagnosed difficulty?",
                        name: "Disorders_Psychiatric",
                        type: "checkbox",
                        choices: [
                            "Addiction",
                            "Attention Deficit Hyperactivity Disorder (ADHD)",
                            "Autism",
                            "Bipolar Disorder",
                            "Borderline Personality Disorder (BPD)",
                            "Generalized Anxiety Disorder (GAD)",
                            "Major Depressive Disorder (MDD)",
                            "Obsessive-Compulsive Disorder (OCD)",
                            "Panic Disorder",
                            "Post-Traumatic Stress Disorder (PTSD)",
                            "Schizophrenia",
                            "Social Anxiety Disorder (Social Phobia)",
                            "Specific Phobias",
                            // "Dysthymia (Persistent Depressive Disorder)",
                            // "Seasonal Affective Disorder (SAD)",
                            // "Premenstrual Dysphoric Disorder (PMDD)",
                            // "Substance/Medication-Induced Mood Disorder",
                            // "Mood Disorder Due to a General Medical Condition",
                            // "Disruptive Mood Dysregulation Disorder",
                            // "Adjustment Disorder with Depressed Mood",
                            // "Agoraphobia",
                            // "Separation Anxiety Disorder",
                            // "Selective Mutism",
                            // "Acute Stress Disorder",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Disorders_Psychiatric} notempty",
                        title: "Are you currently undergoing any of the following treatments",
                        name: "Disorders_PsychiatricTreatment",
                        type: "checkbox",
                        choices: [
                            "Antidepressant Medication (e.g., PROZAC, ZOLOFT, EFFEXOR...)",
                            "Anxiolytic Medication (e.g., XANAX, VALIUM, ...)",
                            "Psychotherapy/Counselling (e.g., CBT, ACT, ...)",
                            "Mood Stabilizers (e.g., LITHIUM, LAMICTAL, ...)",
                            "Antipsychotic Medication (e.g., RISPERDAL, SEROQUEL, ...)",
                            // "Electroconvulsive Therapy (ECT)",
                            // "Transcranial Magnetic Stimulation (TMS)",
                            "Lifestyle Changes (e.g., diet, exercise, ...)",
                            "Mindfulness and Stress Management Techniques",
                            "Alternative Therapies (e.g., acupuncture, herbal remedies, ...)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "questions_mentalhealth",
    },
}
