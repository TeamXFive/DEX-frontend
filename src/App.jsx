import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";

export function App() {
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
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
        <Link to="/chat">Chat</Link>
      </div>
      {/* Placeholder Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </React.Fragment>
  );
}
