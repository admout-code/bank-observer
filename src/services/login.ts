import axios from "axios";

const URL = "https://627b-2a02-587-2010-382a-857b-4ee5-bf6b-a5d1.ngrok.io";

export const login = (data: any) => {
    const res = axios
        .post(`${URL}/login`, data)
        .then((res) => res.data)
        .catch((err) => {
            console.log("error: ", err);
            return "Error";
        });
    return res;
};
