import React from "react";

interface AppContext {
    toggleColorMode: () => void;
    user: any;
}

export const AppContext = React.createContext<AppContext>({ toggleColorMode: () => {}, user: {} });
