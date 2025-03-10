// attention checks function ================================================

function check_attentionchecks() {
    function get_screen(screen) {
        return jsPsych.data.get().filter({ screen: screen }).values()[0].response
    }

    // Compute scores for mint
    let data_mint = get_screen("questionnaire_mint")
    let mint_score_A = 1 - data_mint["MINT_AttentionCheck_1"] / 6

    // compute scores for tas) }).values()[0].response
    let data_tas = get_screen("questionnaire_tas")
    let tas_score_A = 1 - (data_tas["TAS_AttentionCheck_1"] - 1) / 4

    //compute scores for pi18
    let data_pi = get_screen("questionnaire_pi18")
    let pi_score_A = data_pi["PI18_AttentionCheck_1"] / 5

    // compute scores for CEFSA
    let data_cefsa = get_screen("questionnaire_cefsa") //.values()[0].response
    let cefsa_score_A = 1 - data_cefsa["CEFSA_AttentionCheck_1"] / 4

    //compute scores for MAIA
    let data_maia = get_screen("questionnaire_maia")
    let maia_score_A = data_maia["MAIA_AttentionCheck_1"] / 6

    //compute scores for IAS
    let data_ias = get_screen("questionnaire_ias")
    let ias_score_A = 1 - (data_ias["IAS_AttentionCheck_1"] - 1) / 4

    //compute scores for BPQ
    let data_bpq = get_screen("questionnaire_bpq")
    let bpq_score_A = data_bpq["BodyAwareness_AttentionCheck_1"] / 4

    // Average
    return (mint_score_A + tas_score_A + pi_score_A + cefsa_score_A + maia_score_A + ias_score_A + bpq_score_A) / 7
}

// Make general chart ========================================================================================================
function radar_plotdata() {
    // filter by screen
    let data_ias = jsPsych.data.get().filter({ screen: "questionnaire_ias" }).values()[0].response
    let data_cerq = jsPsych.data.get().filter({ screen: "questionnaire_cerq" }).values()[0].response
    let data_tas = jsPsych.data.get().filter({ screen: "questionnaire_tas" }).values()[0].response
    let data_phq4 = jsPsych.data.get().filter({ screen: "questionnaire_phq4" }).values()[0].response

    // Compute average and rescale to percentage
    BodyConnect = Object.keys(data_ias).filter((key) => key.includes("IAS"))
    BodyConnect =
        BodyConnect.map((key) => data_ias[key]).reduce((a, b) => a + b) / BodyConnect.length
    BodyConnect = (BodyConnect / 5) * 100

    CopingSkills = Object.keys(data_cerq).filter((key) => key.includes("CERQ"))
    CopingSkills =
        CopingSkills.map((key) => data_cerq[key]).reduce((a, b) => a + b) / CopingSkills.length
    CopingSkills = (CopingSkills / 7) * 100

    EmotionUnderstanding = Object.keys(data_tas).filter((key) => key.includes("DIF")) // DIF = difficulty identifying feelings
    EmotionUnderstanding =
        EmotionUnderstanding.map((key) => data_tas[key]).reduce((a, b) => a + b) /
        EmotionUnderstanding.length
    EmotionUnderstanding = (EmotionUnderstanding / 5) * 100

    LowMood = Object.keys(data_phq4).filter((key) => key.includes("PHQ4"))
    LowMood = LowMood.map((key) => data_phq4[key]).reduce((a, b) => a + b) / LowMood.length
    LowMood = (LowMood / 5) * 100

    // Prepare output
    var output = {
        names: ["Body Connection", "Coping Skills", "Emotional Understanding", "Low Mood"],
        scores: [BodyConnect, CopingSkills, EmotionUnderstanding, LowMood],
        label: "Your Results (%)",
    }
    return output
}

// Results
const radar_feedback = {
    type: jsPsychCanvasButtonResponse,
    on_load: function () {
        document.querySelector("canvas").style.removeProperty("display") // Force it to center
    },
    stimulus: function (c) {
        let data = radar_plotdata()
        let ctx = c.getContext("2d")
        new Chart(
            ctx,
            make_radarplot(
                (names = data.names),
                (scores = data.scores),
                (minmax = [0, 100]),
                (label = data.label),
                (color = [0, 137, 123])
            )
        )
    },
    canvas_size: plot_getsize(),
    choices: ["Click here to continue"],
    prompt:
        "<p><b>Done!</b> This chart represents how you relate to different body functions. <b>What does it mean?</b></p>" +
        "<p>From what we know so far, it seems like people vary a lot on these dimensions. However, we don't exactly know what these differences mean yet (hence why we are doing this research).<br>" +
        'It seems like it is neither good or bad to score high on any of these, and that there is no "normal": everybody is different!</p>',
}
