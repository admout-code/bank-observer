import React from "react";

const useAuth = () => {
    const token = localStorage.getItem("token");
    const [isTokenValid, setIsTokenValid] = React.useState(token === "ACTIVE_TOKEN");

    const handleUpdateToken = (token: string) => {
        setIsTokenValid(token === "ACTIVE_TOKEN");
        localStorage.setItem("token", token);
    };

    return {
        isTokenValid,
        updateToken: handleUpdateToken,
    };
};

export default useAuth;
