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

//send otp
const sendOtp = async (data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/auth/otp`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        
        return response;
    } catch (error) {
        return error;
    }
}

// user signup
const userSignup = async (data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/auth/register`, data,
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

// forget password
const forgetPassword = async (data) => {
    let response;
    try {
        response = await axios.post(`${baseUrl}/auth/forget-password`, data,
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
    userSignup,
    sendOtp, 
    forgetPassword
}