const request = require('request');
const axios = require('axios');


const analyzeTone = (conversationText) => {

    const toneUsername = process.env.WATSON_TONE_ANALYSIS_USERNAME;
    const tonePassword = process.env.WATSON_TONE_ANALYSIS_PASSWORD;
    const toneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";

    const data = { text: conversationText };
    return axios.request({
        url: toneUrl,
        method: "post",
        data,
        auth: {
            username: toneUsername,
            password: tonePassword
        }
    })
    .then(response => {
        const processedTones = {};
        response.data.document_tone.tones.forEach(tone => {
            processedTones[tone.tone_id] = tone.score
        })
        return processedTones;
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = { analyzeTone }