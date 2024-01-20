const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get wishlist product 
const getWishListDataByEmail = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/wishList/get/${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};



// add wishlist product 
const addToWishListByEmail = async (email, data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/wishList/${email}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};



// delete wishlist product 
const deleteWishListDataByEmailId = async (email, data) => {
    let response;
    try {
        response = await axios.delete(`${baseUrl}/wishList/${email}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getWishListDataByEmail,
    addToWishListByEmail,
    deleteWishListDataByEmailId
}