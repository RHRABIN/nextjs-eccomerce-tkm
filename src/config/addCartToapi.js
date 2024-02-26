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


// delete cart data
const deleteCardDataByEmailId = async (email, productId) => {
    const res = await fetch(`${baseUrl}/cart/cartEdit/${email}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productId),
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// place single order 
const placeSingleOrderByEmail = async (email, data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/order/add/newOrder/${email}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};


// get all order order 
const getAllOrdersByEmail = async (email, search) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/order/user/all/${email}?${search}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};



export {
    getAddToCartDataByEmail,
    addToCartNewDataByEmail,
    deleteCardDataByEmailId,
    placeSingleOrderByEmail,
    getAllOrdersByEmail
}