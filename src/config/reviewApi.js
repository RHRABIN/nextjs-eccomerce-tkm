const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get all reviews 
const getAllReviewsByProductId = async (productId) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/review/allByProductId/${productId}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// get all reviews BY EMAIL
const getAllReviewsByEmail = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/review/get/${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// add a review 
const addSingleReview = async (email, data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/review/${email}`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        console.error(error);
    }
};



export {
    getAllReviewsByProductId,
    getAllReviewsByEmail,
    addSingleReview
}