import axios from "axios";

const { baseUrl } = require("./baseUrl");

// get add to cart 
const getAddToCartDataByEmail = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/cart/myCart/${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// add cart data 

const addToCartNewDataByEmail = async (email, data) => {
    let response;
    let loading = false
    try {
        response = await axios.post(`${baseUrl}/cart/cartAdd/${email}`, data);
        loading = true
    } catch (error) {
        console.error(error);
    }
    return { response, loading };
};


// add cart data 

const deleteCardDataByEmailId = async (email, productId) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/cart/cartEdit/${email}`, productId);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export {
    getAddToCartDataByEmail,
    addToCartNewDataByEmail,
    deleteCardDataByEmailId
}