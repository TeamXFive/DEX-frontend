import "./App.css";
import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";

export function App() {
  return (
      <div className="page">
          <React.Fragment>
          {/* Placeholder Header */}
          <header className="page-header">
              <Link to="/">Home</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/chat">Chat</Link>
              <Link to="/account">Login</Link>
          </header>
          {/* Placeholder Header */}
              <div className="page-content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sobre" element={<div>Sobre</div>} />
                      <Route path="/chat" element={<Chat />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                  <Chat type="widget" />
              </div>
        </React.Fragment>
      </div>
  );
}
