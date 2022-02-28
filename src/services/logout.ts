import axios from "axios";

export const logout = (data: any) => {
    try {
        const res = axios({
            method: "post",
            url: "https://627b-2a02-587-2010-382a-857b-4ee5-bf6b-a5d1.ngrok.io/logout",
            data: data,
        });

        return res;
    } catch (err) {
        console.log(err);
        // return err;
    }
};
