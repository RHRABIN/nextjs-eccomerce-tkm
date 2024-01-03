const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get all blog 
const getAllBlogsData = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/blogs`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// get single blog 
const getSingleBlog = async (slug) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/blogs/single/${slug}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get recent blog 
const getRecentBlogs = async () => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/blogs/recent`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getAllBlogsData,
    getSingleBlog,
    getRecentBlogs
}