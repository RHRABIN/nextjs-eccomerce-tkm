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
    const res = await fetch(`${baseUrl}/wishList/${email}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


module.exports = {
    getWishListDataByEmail,
    addToWishListByEmail,
    deleteWishListDataByEmailId
}