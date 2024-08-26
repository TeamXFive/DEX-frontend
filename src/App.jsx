import "./App.css";
import React, {useEffect, useState} from "react";
import {Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";
import SignIn from "./components/Account/SignIn/SignIn.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation(); // Obtenha a localização atual
    const navigate = useNavigate(); // Navega para rota especificada

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isShowCloseBtn, setShowSignInCLoseBtn] = useState(false);

    const handleLogin = (event) => {
        if (isUserLogged) {
            return;
        }

        // Se estiver no /account, não mostrar popup quando clicar em LOGIN
        if (location.pathname === "/account") {
            setIsSignInVisible(true);
            setIsModalVisible(false);
        } else {
            setIsSignInVisible(true);
            setIsModalVisible(true);
        }

        event.preventDefault();
    };

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
        // Scroll para o topo da página
        window.scrollTo(0, 0);

    }, [location.key]);

    useEffect(() => {
        // Pedir Login no CHAT
        if (location.pathname === "/chat" && !isUserLogged) {
            setIsSignInVisible(true);
            setIsModalVisible(true);
        }

        // Não mostrar popup quando MUDAR para HOME ou SOBRE
        if (location.pathname === "/" || location.pathname === "/sobre") {
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }

        // Mostrar botão de fechar no popup somente se for CHAT
        if (location.pathname === "/chat") {
            setShowSignInCLoseBtn(false);
        } else {
            setShowSignInCLoseBtn(true);
        }

    }, [isUserLogged, location.pathname, navigate]);

    return (
        <div className="page">
            <section className={`login-modal-container ${!isModalVisible && "hidden-modal"} ${scrollDirection === "down" && "cover-hidden-header"}`}>
                <SignIn
                    setIsSignInVisible={setIsSignInVisible}
                    setIsUserLogged={setIsUserLogged}
                    isShowCloseBtn={isShowCloseBtn}
                    setIsModalVisible={setIsModalVisible}
                />
            </section>

          <React.Fragment>
              {/* Placeholder Header */}
              <header className={`page-header glass-effect ${scrollDirection === "down" && "hide-header"}`}>
                  <figure className="header-logo">
                      <img src="src/assets/icons/chat.svg" alt="Logo Header"/>
                  </figure>

                  <nav className="header-nav">
                      <div className="header-nav-links">
                          <Link to="/">HOME</Link>
                          <Link to="/sobre">SOBRE</Link>
                          <Link to="/chat">CHAT</Link>
                          <Link to="/account" onClick={handleLogin}>LOGIN</Link>
                      </div>
                  </nav>
              </header>
              {/* Placeholder Header */}

              <div className="page-content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sobre" element={<div>Sobre</div>} />
                      <Route path="/chat" element={<Chat />} />

                      <Route path="/account" element={
                          <Account
                              isSignInVisible={isSignInVisible} setIsSignInVisible={setIsSignInVisible}
                              isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}
                          />
                      } />

                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                  <Chat type="widget" />
              </div>
        </React.Fragment>
        </div>
    );
}
