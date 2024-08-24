import "./App.css";
import React, {useEffect, useState} from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

  return (
      <div className="page">
          <React.Fragment>
              {/* Placeholder Header */}
              <header className={`page-header glass-effect ${scrollDirection === "down" ? "hide-header" : ""}`}>
                  <figure className="header-logo">
                      <img src="src/assets/icons/chat.svg" alt="Logo Header"/>
                  </figure>

                  <nav className="header-nav">
                      <div className="header-nav-links">
                          <Link to="/">HOME</Link>
                          <Link to="/sobre">SOBRE</Link>
                          <Link to="/chat">CHAT</Link>
                          <Link to="/account">LOGIN</Link>
                      </div>
                  </nav>
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
