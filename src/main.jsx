import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />      
        <Home />
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
        <App />      
        <Chat />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);