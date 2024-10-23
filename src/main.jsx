import { Analytics } from '@vercel/analytics/react';
import "./style/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./context/Authentication/AuthenticationProvider.jsx";
import KnowledgeProvider from "./context/Knowledge/KnowledgeProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthenticationProvider>
                <KnowledgeProvider>
                    <App />
                </KnowledgeProvider>
            </AuthenticationProvider>

            <Analytics />
        </BrowserRouter>
    </StrictMode>
);
