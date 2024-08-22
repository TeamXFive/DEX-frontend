import "./App.css";
import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";

export function App() {
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
        <Route path="/sobre" element={<div>Sobre</div>} />,
        <Route path="/login" element={<div>Login</div>} />,
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Chat type="widget" />
    </React.Fragment>
  );
}
