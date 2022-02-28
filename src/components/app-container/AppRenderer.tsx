import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppContainer from "./AppContainer";
import { ColorModeContext } from "./ColorModeContext";
import { useQuery } from "react-query";
import RequireAuth from "./RequireAuth";

interface AppContainerProps {
    children: React.ReactNode;
}

function AppRenderer({ children }: AppContainerProps) {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const { data: user } = useQuery("user", () => {}, { staleTime: Infinity, refetchOnMount: false });

    const toggleMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    console.log("user: ", user);

    return (
        <ColorModeContext.Provider value={toggleMode}>
            <ThemeProvider theme={theme}>
                {user ? <AppContainer>{children}</AppContainer> : <RequireAuth />}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default AppRenderer;
