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
    items = shuffleObject(items)
    questions = []

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
                        visibleIf:
                            "{Disorders_Psychiatric} notempty and {Disorders_Psychiatric} notcontains 'None'",
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

// Somatic disorders - PHQ-15 ================================================
const items_phq15 = {
    PHQ15_1: "Stomach pain",
    PHQ15_2: "Back pain",
    PHQ15_3: "Pain in your arms, legs or joints (knees, hips, etc.)",
    PHQ15_4: "Menstrual cramps or other problems with your periods (if applicable)",
    PHQ15_5: "Headaches",
    PHQ15_6: "Dizziness",
    PHQ15_7: "Feeling your heart pound or race",
    PHQ15_8: "Shortness of breath",
    PHQ15_9: "Pain or problems during sexual intercourse",
    PHQ15_10: "Constipation, loose bowels or diarrhea",
    PHQ15_11: "Nausea, gas or indigestion",
    PHQ15_12: "Feeling tired or having low energy",
    PHQ15_13: "Trouble sleeping",
    PHQ15_14: "Chest pain",
    PHQ15_15: "Fainting spells",
}

const instructions_phq15 = {
    type: "html",
    name: "instructions_phq15",
    html: "<p>Over the <b>last week</b>, how often have you been bothered by the following problems?</p>",
}

function make_phq15(items, required = true) {
    items = shuffleObject(items)
    questions = []

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
                    value: 1,
                    text: "Bothered a little",
                },
                {
                    value: 2,
                    text: "Bothered a lot",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_phq15 = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your health",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_phq15(items_phq15),
        }
    },
    data: {
        screen: "questionnaire_phq15",
    },
}

// DDD - CEFSA-S ================================================

const items_cefsa = {
    CEFSA_Emotion_1: "I don't fully experience emotions",
    CEFSA_Connection_2: "I feel disconnected from the world around me",
    CEFSA_Agency_3: "I'm absorbed in my own world and don't notice what is happening around me",
    CEFSA_Self_4: "My personality changes seemingly at random",
    CEFSA_Connection_5: "I feel disconnected from other people",
    CEFSA_Agency_6: "I find myself drifting off into my own world when I'm with others",
    CEFSA_Body_7: "My body (or parts of it) feels unreal or strange",
    CEFSA_Emotion_8: "I feel detached from my emotions",
    CEFSA_Self_9: "I act like someone else without meaning to",
    CEFSA_Familiarity_10: "People I know seem unfamiliar",
    CEFSA_Reality_11: "I feel as though other people stop existing when I can't see them",
    CEFSA_Body_12: "My body feels numb",
    CEFSA_Familiarity_13: "Things I've done many times before seem new or unfamiliar",
    CEFSA_Reality_14: "I feel like an alien or a ghost",
    CEFSA_A: "I feel that to show I'm being attentive I will press the lowest option",
}

const instructions_cefsa = {
    type: "html",
    name: "instructions_cefsa",
    html:
        `<p>Please read the following items and rate how often you have experienced these over the past <b>two weeks</b>.</p>` +
        `<p>Please note that this should <b>NOT</b> be whilst under the influence of drugs, alcohol or legal highs.</p>`,
}

function make_cefsa(items, required = true, ticks = ["Never", "Always"]) {
    items = shuffleObject(items)
    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_cefsa = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your feelings",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_cefsa(items_cefsa),
        }
    },
    data: {
        screen: "questionnaire_cefsa",
    },
}