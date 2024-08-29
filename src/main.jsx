import { Analytics } from '@vercel/analytics/react';
import "./style/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./context/Authentication/AuthenticationProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthenticationProvider>
                <App />
            </AuthenticationProvider>

            <Analytics />
        </BrowserRouter>
    </StrictMode>
);
