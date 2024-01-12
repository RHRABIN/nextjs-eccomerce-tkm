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


// store user from localstorage 
const userData = () => {
    try {
        const storedUser = localStorage.getItem('auth');

        if (storedUser) {
            const parseUser = JSON.parse(storedUser);
            return parseUser?.data?.user;
        } else {
            console.error('No user data found');
        }
    } catch (error) {
        // console.error(error);
    }
};


const user = userData()
console.log(user)
module.exports = {
    userLoggedIn,
    userData
}