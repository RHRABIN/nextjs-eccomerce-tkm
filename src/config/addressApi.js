const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");

// get address 
const getAllAddress = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/address/all/${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

//get single address
const getSingleAddress = async (addressId) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/address/${addressId}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// post address 
const createAddress = async (email, data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/address/${email}`, data,
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


// update address 
const updateAddress = async (id, data) => {
    let response;
    try {
        response = await axios.put(`${baseUrl}/address/${id}`, { data });
        return response;
    } catch (error) {
        console.error(error);
    }
};


// active address 
const setActiveAddress = async (id, email) => {
    let response;
    try {
        response = await axios.put(`${baseUrl}/address/active/${email}`, { id });
        return response;
    } catch (error) {
        console.error(error);
    }
};

// get active address 
const getActiveAddress = async (email) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/address/active/${email}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

// delete address 
const deleteAddress = async ({ id, email }) => {
    let response;
    try {
        response = await axios.delete(`${baseUrl}/address/${email}`, { id });
        return response;
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getAllAddress,
    getSingleAddress,
    createAddress,
    updateAddress,
    setActiveAddress,
    getActiveAddress,
    deleteAddress
}