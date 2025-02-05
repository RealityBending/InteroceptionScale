const questionnaires_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Instructions",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h2>Instructions</h2>" +
                            "<p>In this study, you will be asked to complete various questionnaires. Please read each question carefully, and don't hesitate to take breaks in-between them.</p>" +
                            "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>. We reserve the right to withhold credit awards or reimbursement should we detect non-valid responses (e.g., random patterns of answers, instructions not read, failed attention checks...).</li>" +
                            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related, and opposite questions to be inversely related). " +
                            "<p style='color:green;'>At the end, you will be shown a <b>graph</b> summarizing your answers, and provided with an explanation about why we are asking all of this.<p>" +
                            "<center><figure><img src='img/example_chart.png' alt='Graph' style='width: 50%;'><figcaption><i>Example of result graph obtained at the end</i></figcaption></figure></center>" +
                            "</div>" +
                            "<div style='width: 40%;'>" +
                            "<img src='https://www.simplypsychology.org/wp-content/uploads/psychology.jpeg' alt='Illustration' style='width: 100%;'>" +
                            "</div>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

// Items ================================================
// We dropped the following dimensions:
// - Awareness_SexA: too high level and abstract compared to other items.
// - Sensitivity_Sign: Potentially ambiguous nature of "something important"
// - Sensitivity_SexC: Less consistent with the other dimensions of Sensitivity that were about different modalities
const items_mint = {
    MINT_Deficit_Urin_1: "I sometimes feel like I need to urinate or defecate but when I go to the bathroom I produce less than I expected",
    MINT_Deficit_Urin_2: "I often feel the need to urinate even when my bladder is not full",
    MINT_Deficit_Urin_3: "Sometimes I am not sure whether I need to go to the toilet or not (to urinate or defecate)",
    MINT_Deficit_CaCo_4: "Sometimes my breathing becomes erratic or shallow and I often don't know why",
    MINT_Deficit_CaCo_5: "I often feel like I can't get enough oxygen by breathing normally",
    MINT_Deficit_CaCo_6: "Sometimes my heart starts racing and I often don't know why",
    MINT_Deficit_CaNo_7: "I often only notice how I am breathing when it becomes loud",
    MINT_Deficit_CaNo_8: "I only notice my heart when it is thumping in my chest",
    MINT_Deficit_CaNo_9: "I often only notice how I am breathing when my breathing becomes shallow or irregular",
    MINT_Deficit_Olfa_10: "I often check the smell of my armpits",
    MINT_Deficit_Olfa_11: "I often check the smell of my own breath",
    MINT_Deficit_Olfa_12: "I often check the smell of my farts",
    MINT_Deficit_Sati_13: "I don't always feel the need to eat until I am really hungry",
    MINT_Deficit_Sati_14: "Sometimes I don't realise I was hungry until I ate something",
    MINT_Deficit_Sati_15: "I don't always feel the need to drink until I am really thirsty",
    // MINT_Awareness_SexA_16: "I always feel in my body if I am sexually aroused",
    // MINT_Awareness_SexA_17: "I can always tell that I am sexually aroused from the way I feel inside",
    // MINT_Awareness_SexA_18: "I always know when I am sexually aroused",
    MINT_Awareness_SexS_19: "During sex or masturbation, I often feel very strong sensations coming from my genital areas",
    MINT_Awareness_SexS_20:
        "When I am sexually aroused, I often notice specific sensations in my genital area (e.g., tingling, warmth, wetness, stiffness, pulsations)",
    MINT_Awareness_SexS_21: "My genital organs are very sensitive to pleasant stimulations",
    MINT_Awareness_SexO_22: "In general, I am very sensitive to changes in my genital organs",
    MINT_Awareness_SexO_23: "I can notice even very subtle changes in the state of my genital organs",
    MINT_Awareness_SexO_24: "I am always very aware of the state of my genital organs, even when I am calm",
    MINT_Awareness_UrSe_25: "In general, I am very aware of the sensations that are happening when I am urinating",
    MINT_Awareness_UrSe_26: "In general, I am very aware of the sensations that are happening when I am defecating",
    MINT_Awareness_UrSe_27: "I often experience a pleasant sensation when relieving myself when urinating or defecating)",
    MINT_Awareness_RelA_28: "I always know when I am relaxed",
    MINT_Awareness_RelA_29: "I always feel in my body if I am relaxed",
    MINT_Awareness_RelA_30: "My body is always in the same specific state when I am relaxed",
    MINT_Awareness_StaS_31:
        "Being relaxed is a very different bodily feeling compared to other states (e.g., feeling anxious, sexually aroused or after exercise)",
    MINT_Awareness_StaS_32:
        "Being sexually aroused is a very different bodily feeling compared to other states (e.g., feeling anxious, relaxed, or after physical exercise)",
    MINT_Awareness_StaS_33:
        "Being anxious is a very different bodily feeling compared to other states (e.g., feeling sexually aroused, relaxed or after exercise)",
    MINT_Awareness_ExAc_34: "I can always accurately feel when I am about to burp",
    MINT_Awareness_ExAc_35: "I can always accurately feel when I am about to fart",
    MINT_Awareness_ExAc_36: "I can always accurately feel when I am about to sneeze",
    MINT_Sensitivity_Card_37: "In general, I am very sensitive to changes in my heart rate",
    MINT_Sensitivity_Card_38: "I can notice even very subtle changes in the way my heart beats",
    MINT_Sensitivity_Card_39: "I often notice changes in my heart rate",
    MINT_Sensitivity_Resp_40: "I can notice even very subtle changes in my breathing",
    MINT_Sensitivity_Resp_41: "I am always very aware of how I am breathing, even when I am calm",
    MINT_Sensitivity_Resp_42: "In general, I am very sensitive to changes in my breathing",
    // MINT_Sensitivity_Sign_43: "When something important is happening in my life, I can feel immediately feel changes in my heart rate",
    // MINT_Sensitivity_Sign_44: "When something important is happening in my life, I can immediately feel changes in my breathing",
    // MINT_Sensitivity_Sign_45: "When something important is happening in my life, I can feel it in my body",
    MINT_Sensitivity_Gast_46: "I can notice even very subtle changes in what my stomach is doing",
    MINT_Sensitivity_Gast_47: "In general, I am very sensitive to what my stomach is doing",
    MINT_Sensitivity_Gast_48: "I am always very aware of what my stomach is doing, even when I am calm",
    MINT_Sensitivity_Derm_49: "In general, my skin is very sensitive",
    MINT_Sensitivity_Derm_50: "My skin is susceptible to itchy fabrics and materials",
    MINT_Sensitivity_Derm_51: "I can notice even very subtle stimulations to my skin (e.g., very light touches)",
    // MINT_Sensitivity_SexC_52: "When I am sexually aroused, I often feel changes in the way my heart beats (e.g., faster or stronger)",
    // MINT_Sensitivity_SexC_53: "When I am sexually aroused, I often feel changes in my breathing (e.g., faster, shallower, or less regular)",
    // MINT_Sensitivity_SexC_54: "When I am sexually aroused, I often feel changes in my temperature (e.g., feeling warm or cold)",
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
            description: "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_mint(items_mint),
        }
    },
    data: {
        screen: "questionnaire_mint",
    },
}
