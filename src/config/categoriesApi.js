import axios from "axios";
const { baseUrl } = require("./baseUrl");

// get categories 
const getCategories = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/category`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get all brands 
const getAllBrands = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/manufacturer`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get category by title 
const getCategoryByTitle = async (query) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/category/filter?${query}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};
// sort brands 
const getAllSortedBrands = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/manufacturer/sort-brands`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getCategories,
    getCategoryByTitle,
    getAllBrands,
    getAllSortedBrands
}