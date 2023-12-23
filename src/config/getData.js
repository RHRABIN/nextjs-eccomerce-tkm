import axios from "axios";
import { baseUrl } from "./baseUrl";

export const getData = async (pathUrl) => {
    let response;
    try {
        response = await axios.get(`${baseUrl}/${pathUrl}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};
