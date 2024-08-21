import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    console.log("INITIAL LOAD");
  }, []);

  useEffect(() => {
    setCurrentPage(window.location.pathname.replace("/", ""));
  }, []);

  return (
    <React.Fragment>
      {/* Placeholder Header */}
      <div>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/login">Login</a>
        <a href="/chat">Chat</a>
      </div>
      {/* Placeholder Header */}
      {currentPage === "" && <Home/>}

      {currentPage === "sobre" && <h1>Sobre</h1>}

      {currentPage === "login" && <h1>Login</h1>}

      {currentPage === "chat" && <Chat />}
    </React.Fragment>
  );
}
