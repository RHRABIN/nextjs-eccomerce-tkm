const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get desktop banner
const getDesktopAllBanner = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/desktopBanner`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getDesktopAllBanner
}