import "./App.css";
import React, {useEffect, useState} from "react";
import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";
import EstudoRapido from "./pages/EstudoRapido/EstudoRapido";
import SignIn from "./components/Account/SignIn/SignIn.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation(); // Obtenha a localização atual
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isUserLogged, setisUserLogged] = useState(false);

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

    // Evento em qualquer Rota
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    // Evento na Rota do CHAT
    useEffect(() => {
        if (location.pathname === "/chat") {    
            setisUserLogged(false);
            setIsSignInVisible(true);
        } else {
            setisUserLogged(true);
            setIsSignInVisible(false);
        }

    }, [location.pathname])

  return (
      <div className="page">
            <section className={isSignInVisible ? 'login-modal-container' : 'login-modal-container hidden'}>
                <SignIn isSignInVisible={isSignInVisible} setIsSignInVisible={setIsSignInVisible} />
            </section>

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
                          <Link to="/estudo-rapido">ESTUDO RÁPIDO</Link>
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
                      <Route path="/estudo-rapido" element={<EstudoRapido />} />
                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                  <Chat type="widget" />
              </div>
        </React.Fragment>
      </div>
  );
}
