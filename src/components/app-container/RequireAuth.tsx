import { Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

interface RequireAuthProps {
    children: React.ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
    const { data: user } = useQuery("user", () => undefined, { staleTime: Infinity });
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user) return navigate("/login");
    }, [user]);

    console.log("user: ", user);
    console.log("login");

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
            {children}
        </Box>
    );
}

export default RequireAuth;
