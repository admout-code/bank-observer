import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRenderer from "./components/app-container/AppRenderer";
import AppRoutes from "./routes/AppRoutes";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRenderer>
                    <AppRoutes />
                </AppRenderer>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
