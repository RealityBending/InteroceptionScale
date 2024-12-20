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
