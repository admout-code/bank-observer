import { Box } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

function RequireAuth() {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate("/login");
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: (theme) => theme.palette.primary.main,
            }}
        >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Box>
    );
}

export default RequireAuth;
