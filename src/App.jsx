import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

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
    </React.Fragment>
  );
}
