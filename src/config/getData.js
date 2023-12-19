import axios from "axios";
import { baseUrl } from "./baseUrl";

export const getData = async (pathUrl) => {
    let response;
    try {
        if (pathUrl) {
            response = await axios.get(`${baseUrl}/${pathUrl}`);
            return response;
        } else {
            response = await axios.get(baseUrl);
            return response
        }
    } catch (error) {
        console.error(error);
    }
};
