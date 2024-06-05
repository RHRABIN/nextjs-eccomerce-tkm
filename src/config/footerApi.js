const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get store location
const getStoreLocationQuery = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/storeLocation`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get delivery info
const getDeliveryInfoQuery = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/deliveryInfo`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get privacy policy
const getPrivacyPolicyQuery = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/privacy-policy`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get terms condition
const getTermsConditionQuery = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/termsCondition`);
        return response;
    } catch (error) {
        console.error(error);
    }
};



module.exports = {
    getStoreLocationQuery,
    getDeliveryInfoQuery,
    getPrivacyPolicyQuery,
    getTermsConditionQuery
}