import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FormContextProvider } from "./context/ContextoFormulario";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <FormContextProvider>
                    <App />
                </FormContextProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);

