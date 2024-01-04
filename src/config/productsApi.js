const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get products by type 
const getProductsByType = async (type) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/product/productType?productType=${type}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};



// get single product 
const getSingleProduct = async (id) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/product/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getProductsByType,
    getSingleProduct
}