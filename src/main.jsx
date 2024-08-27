import { Analytics } from '@vercel/analytics/react';
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AccountProvider from "./context/AccountProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AccountProvider>
                <App />
            </AccountProvider>

            <Analytics />
        </BrowserRouter>
    </StrictMode>
);
