import axios from "axios";

const { baseUrl } = require("./baseUrl");

// get loged in by user email
const getLoggedInUserInfoByEmail = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/user${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// update user info by email

const updateUserInformationByEmail = async (email, data) => {
    let response;
    try {
        response = await axios.put(`${baseUrl}/user${email}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};




export {
    getLoggedInUserInfoByEmail,
    updateUserInformationByEmail,
}