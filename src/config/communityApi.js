const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get all community 
const getAllCommunity = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/community-image`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getAllCommunity
}