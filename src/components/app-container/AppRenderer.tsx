import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppContainer from "./AppContainer";
import { AppContext } from "./AppContext";
import { useQuery } from "react-query";
import RequireAuth from "./RequireAuth";
import { useLocation, useNavigate } from "react-router-dom";

interface AppContainerProps {
    children: React.ReactNode;
}

function AppRenderer({ children }: AppContainerProps) {
    const { data: user, isLoading } = useQuery("user", () => "undefined", { staleTime: Infinity });
    const [mode, setMode] = React.useState<"light" | "dark">("light");

    const toggleColorMode = React.useCallback(() => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }, []);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <AppContext.Provider value={{ toggleColorMode, user }}>
            <ThemeProvider theme={theme}>
                {user ? <AppContainer>{children}</AppContainer> : <RequireAuth>{children}</RequireAuth>}
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default AppRenderer;
