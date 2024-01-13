const { default: axios } = require("axios");
const { baseUrl } = require("./baseUrl");


// get loggedin 
const userLoggedIn = async (data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/auth/login`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (response) {
            localStorage.setItem('auth', JSON.stringify(response?.data));
        }
        return response;
    } catch (error) {
        console.error(error);
    }
};

export {
    userLoggedIn,
}