const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get all divisions
const getAllDivisions = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/division`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get all district
const getAllDistrict = async (division) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/district/filter?parent=${division}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get all sub district
const getAllSubDistrict = async (district) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/sub-district/filter?parent=${district}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getAllDivisions,
    getAllDistrict,
    getAllSubDistrict
}