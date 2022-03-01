import axios from "axios";

const { REACT_APP_APP_BASE_URL } = process.env;

export const register = (data: any) => {
    const res = axios
        .post(`${REACT_APP_APP_BASE_URL}/login`, data)
        .then((res) => res.data)
        .catch((err) => {
            console.log("error: ", err);
            return "Error";
        });
    return res;
};
