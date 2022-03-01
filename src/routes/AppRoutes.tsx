import React from "react";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
