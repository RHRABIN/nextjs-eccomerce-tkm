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
            userData(response)
        }
    } catch (error) {
        console.error(error);
    }
};


const userData = () => {
    let getUser = {};

    try {
        const storedUser = localStorage.getItem('auth');
        if (storedUser) {
            getUser = JSON.parse(storedUser);
            return getUser;
        }
    } catch (error) {

    }
}
export {
    userLoggedIn,
    userData
}