// Single Item Life Satisfaction scale ================================================

const questionnaire_sils = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your life satisfaction",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: [
                {
                    elements: [
                        {
                            title: "Thinking about your own life and personal circumstances, how satisfied are you with your life as a whole?",
                            name: "questionnaire_sils",
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
        }
    },
    data: {
        screen: "questionnaire_sils",
    },
}

// TAS-20 questionnaire ================================================
// Short alexithymia: PAQ-S questionnaire? (https://www.sciencedirect.com/science/article/pii/S0165032723000460à

const items_tas = {
    TAS_DIF_1: "I am often confused about what emotion I am feeling",
    TAS_DDF_2: "I have physical sensations that even doctors don't understand",
    TAS_DIF_3: "When I am upset, I don't know if I am sad, frightened, or angry",
    TAS_DDF_4: "I am often puzzled by sensations in my body",
    TAS_EOT_5: "I have feelings that I can't quite identify",
    TAS_DIF_6: "I don't know what's going on inside me",
    TAS_DIF_7: "I often don't know why I am angry",
    TAS_EOT_8: "It is difficult for me to find the right words for my feelings",
    TAS_DIF_9: "I am able to describe my feelings easily",
    TAS_EOT_10: "I find it hard to describe how I feel about people",
    TAS_DDF_11: "People tell me to describe my feelings more",
    TAS_DDF_12: "It is difficult for me to reveal my innermost feelings, even to close friends",
    TAS_DIF_13: "I prefer to analyze problems rather than just describe them",
    TAS_DIF_14:
        "I prefer to just let things happen rather than to understand why they turned out that way",
    TAS_EOT_15: "Being in touch with emotions is essential",
    TAS_EOT_16:
        "I prefer talking to people about their daily activities rather than their feelings",
    TAS_DDF_17: "I prefer to watch 'light' entertainment shows rather than psychological dramas",
    TAS_EOT_18: "I can feel close to someone, even in moments of silence",
    TAS_EOT_19: "I find examination of my feelings useful in solving personal problems",
    TAS_EOT_20: "Looking for hidden meanings in movies or plays distracts from their enjoyment",
}

function make_tas(items, required = true, ticks = ["Strongly Disagree", "Strongly Agree"]) {
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
            rateValues: [1, 2, 3, 4, 5], // 5-point Likert scale
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_tas = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About TODO",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_tas(items_tas),
        }
    },
    data: {
        screen: "questionnaire_tas",
    },
}

// Emotion Regulation Questionnaire (ERQ-6) ================================================
const items_erq = {
    ERQ_Reappraisal_1:
        "When I want to feel more positive emotion, I change the way I am thinking about the situation",
    ERQ_Suppression_2: "I control my emotions by not expressing them",
    ERQ_Reappraisal_3:
        "When I want to feel less negative emotion, I change the way I am thinking about the situation",
    ERQ_Suppression_4: "When I am feeling positive emotions, I am careful not to express them",
    ERQ_Reappraisal_5:
        "I control my emotions by changing the way I think about the situation I am in",
    ERQ_Suppression_6: "When I am feeling negative emotions, I make sure not to express them",
}

const instructions_erq = {
    type: "html",
    name: "instructions_erq",
    html:
        "<p>We would like to ask you some questions about your emotional life, in particular, how you <b>control " +
        "(that is, regulate and manage) your emotions</b>.<br>The questions below involve two distinct aspects of your " +
        "emotional life:</p><p>" +
        "- One is your emotional <b>experience</b>, or what you feel like <i>inside</i>.<br>" +
        "- The other is your emotional <b>expression</b>, or how you <i>show</i> your emotions in the way you talk, gesture, or behave.</p>" +
        "<p>Although some of the following questions may seem similar to one another, they differ in important ways.</p>",
}

function make_erq(items, required = true, ticks = ["Strongly Disagree", "Strongly Agree"]) {
    questions = [instructions_erq]

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
            rateValues: [1, 2, 3, 4, 5, 6, 7], // 7-point Likert scale
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_erq = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your emotions",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_erq(items_erq),
        }
    },
    data: {
        screen: "questionnaire_erq",
    },
}

// PI-18 - Primals ================================================

const items_pi18 = {
    PI18_GE_1: "In life, there's way more beauty than ugliness",
    PI18_GA_2: "It often feels like events are happening in order to help me in some way",
    PI18_GS_3: "I tend to see the world as pretty safe",
    PI18_A_4: "What happens in the world is meant to happen",
    PI18_GE_5_R: "While some things are worth checking out or exploring further, most things probably aren't worth the effort",
    PI18_GE_6_R: "Most things in life are kind of boring",
    PI18_GE_7: "The world is an abundant place with tons and tons to offer",
    PI18_GE_8: "No matter where we are or what the topic might be, the world is fascinating",
    PI18_GE_9_R: "The world is a somewhat dull place where plenty of things are not that interesting",
    PI18_GS_10_R: "On the whole, the world is a dangerous place",
    PI18_GS_11_R: "Instead of being cooperative, the world is a cut-throat and competitive place",
    PI18_A_12_R: "Events seem to lack any cosmic or bigger purpose",
    PI18_GS_13_R: "Most things have a habit of getting worse",
    PI18_GA_14: "The universe needs me for something important",
    PI18_GS_15: "Most things in the world are good",
    PI18_A_16: "Everything happens for a reason and on purpose",
    PI18_GS_17: "Most things and situations are harmless and totally safe",
    PI18_GE_18: "No matter where we are, incredible beauty is always around us",
}

const instructions_pi18 = {
    type: "html",
    name: "instructions_pi18",
    html:
        `<p>Below are very general statements about the world, not the world we wish we lived in, but the actual world as it is now.</p>` +
        `<p>Please share your sense of agreement or disagreement.</p>` +
        `<p>When in doubt, go with what initially feels true of the real world.</p>` +
        `<p><p>There are no wrong answers. There is no need to overthink.</p><br /><br/>`,
}

function make_pi18(items, required = true, ticks = ["Strongly Disagree", "Strongly Agree"]) {
    questions = [instructions_pi18]

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
            rateValues: [0, 1, 2, 3, 4, 5],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_pi18 = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About the world we live in",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_pi18(items_pi18),
        }
    },
    data: {
        screen: "questionnaire_pi18",
    },
}