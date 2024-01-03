const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get top spotlight 
const getTopSpotlight = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/topSpotLight`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// get bottom spotlight 
const getBottomSpotlight = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/bottomSpotLight`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getTopSpotlight,
    getBottomSpotlight
}