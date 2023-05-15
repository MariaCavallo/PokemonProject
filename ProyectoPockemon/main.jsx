import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FormContextProvider } from "./context/ContextoFormulario";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <FormContextProvider>
                <App />
            </FormContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

