const questionnaires_instructions = {
    type: jsPsychSurvey,
    survey_json: function () {
        let text =
            "<div style='display: flex;'>" +
            "<div style='width: 60%; margin-right: 10px;'>" +
            "<h2>Instructions</h2>" +
            "<p>In this study, you will be asked to complete various questionnaires. Please read each question carefully, and don't hesitate to take breaks in-between them.</p>"

        if (condition === "Attention Checks") {
            text +=
                "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. " +
                "We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, failed attention checks...).</li>"
        }

        text +=
            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related, and opposite questions to be inversely related)." +
            "<p style='color:green;'>At the end, you will be shown a <b>graph</b> summarizing your answers, and provided with an explanation about why we are asking all of this.<p>" +
            "<center><figure><img src='img/example_chart.png' alt='Graph' style='width: 50%;'><figcaption><i>Example of result graph obtained at the end</i></figcaption></figure></center>" +
            "</div>" +
            "<div style='width: 40%;'>" +
            "<img src='https://www.simplypsychology.org/wp-content/uploads/psychology.jpeg' alt='Illustration' style='width: 100%;'>" +
            "</div>" +
            "</div>"

        return {
            showQuestionNumbers: false,
            completeText: "Let's start",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "Instructions",
                            html: text
                        },
                    ],
                },
            ],
        }
    },
}

// Items ================================================
const items_mint = {
    InteroceptiveFailures_1: "Sometimes my breathing becomes erratic or shallow and I often don't know why",
    InteroceptiveFailures_2: "I often feel like I can't get enough oxygen by breathing normally",
    InteroceptiveFailures_3: "Sometimes my heart starts racing and I often don't know why",
    InteroceptiveFailures_4: "I sometimes feel like I need to urinate or defecate but when I go to the bathroom I produce less than I expected",
    InteroceptiveFailures_5: "I often feel the need to urinate even when my bladder is not full",
    InteroceptiveFailures_6: "Sometimes I am not sure whether I need to go to the toilet or not (to urinate or defecate)",
    InteroceptiveFailures_7: "I often only notice how I am breathing when it becomes loud",
    InteroceptiveFailures_8: "I only notice my heart when it is thumping in my chest",
    InteroceptiveFailures_9: "I often only notice how I am breathing when my breathing becomes shallow or irregular",
    InteroceptiveFailures_10: "I often check the smell of my own breath",
    InteroceptiveFailures_11: "I often check the smell of my armpits",
    InteroceptiveFailures_12: "I often check the smell of my farts",
    InteroceptiveFailures_13: "I don't always feel the need to drink until I am really thirsty",
    InteroceptiveFailures_14: "I don't always feel the need to eat until I am really hungry",
    InteroceptiveFailures_15: "I don't always feel the need to urinate until my bladder is very full",
    InteroceptiveSensitivityPleasure_1: "During sex or masturbation, I often feel very strong sensations coming from my genital areas",
    InteroceptiveSensitivityPleasure_2: "When I am sexually aroused, I often notice specific sensations in my genital area (e.g., tingling, warmth, wetness, stiffness, pulsations)",
    InteroceptiveSensitivityPleasure_3: "My genital organs are very sensitive to pleasant stimulations",
    InteroceptiveSensitivityPleasure_4: "I always feel it in my body if I am sexually aroused",
    InteroceptiveSensitivityPleasure_5: "I always know when I am sexually aroused",
    InteroceptiveSensitivityPleasure_6: "I can always tell that I am sexually aroused from the way I feel inside",
    InteroceptiveSensitivityPleasure_7: "Being relaxed is a very different bodily feeling compared to other states (e.g., feeling anxious, sexually aroused or after exercise)",
    InteroceptiveSensitivityPleasure_8: "Being anxious is a very different bodily feeling compared to other states (e.g., feeling sexually aroused, relaxed or after exercise)",
    InteroceptiveSensitivityPleasure_9: "Being sexually aroused is a very different bodily feeling compared to other states (e.g., feeling anxious, relaxed, or after physical exercise)",
    InteroceptiveSensitivityPleasure_10: "I can always accurately feel when I am about to sneeze",
    InteroceptiveSensitivityPleasure_11: "I can always accurately feel when I am about to vomit",
    InteroceptiveSensitivityPleasure_12: "I can always accurately feel when I am about to burp",
    InteroceptiveSensitivityPleasure_13: "My skin is susceptible to itchy fabrics and materials",
    InteroceptiveSensitivityPleasure_14: "My skin is very sensitive to painful stimulations (e.g., pinching)",
    InteroceptiveSensitivityPleasure_15: "I can notice even very subtle stimulations to my skin (e.g., very light touches)",
    InteroceptiHypervigilance_1: "I can notice even very subtle changes in my breathing",
    InteroceptiHypervigilance_2: "In general, I am very sensitive to changes in my breathing",
    InteroceptiHypervigilance_3: "I am always very aware of how I am breathing, even when I am calm",
    InteroceptiHypervigilance_4: "I often notice changes in my heart rate",
    InteroceptiHypervigilance_5: "I can always accurately feel if my heart rate is slow or fast",
    InteroceptiHypervigilance_6: "I can notice even very subtle changes in the way my heart beats",
    InteroceptiHypervigilance_7: "When I am sexually aroused, I often feel changes in my temperature (e.g., feeling warm or cold)",
    InteroceptiHypervigilance_8: "When I am sexually aroused, I often feel like some areas of my skin become sweaty (e.g., palms, back, forehead)",
    InteroceptiHypervigilance_9: "When I am sexually aroused, I often feel changes in the way my heart beats (e.g., faster or stronger)",
    MINT_AttentionCheck_1: "I can always accurately answer to the extreme left on this question to show that I am reading it",
}

// Generation code ================================================
// Convernience function to shuffle an object (used internally)
function shuffleObject(obj) {
    const entries = Object.entries(obj)
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[entries[i], entries[j]] = [entries[j], entries[i]]
    }
    return Object.fromEntries(entries)
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_mint(items, required = true, ticks = ["Disagree", "Agree"]) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        questions.push(q)
    }

    return { elements: questions }
}

// Questionnaire ================================================
const questionnaire_mint = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_mint(items_mint),
        }
    },
    data: {
        screen: "questionnaire_mint",
    },
}


