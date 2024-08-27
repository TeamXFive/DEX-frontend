import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";
import SignIn from "./components/Account/SignIn/SignIn.jsx";
import useAccountContext from "./hook/useAccountContext.jsx";
import Header from "./components/header/header";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    //  Variáveis do CONTEXTO (tipo variáveis globais)
    const {
        isModalVisible, setIsModalVisible,
        setIsSignInVisible,
        isUserLogged,
        setIsShowSignInCloseBtn
    } = useAccountContext();

    // Clicar no LINK do HEADER do LOGIN
    const handleLogin = (event) => {
        // Se já estiver logado segue o fluxo
        if (isUserLogged) {
            return;
        }

        // Se já estiver na página de login, não mexe com o MODAL
        if (location.pathname === "/account") {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }

        setIsSignInVisible(true);

        event.preventDefault(); // Previne o comportamento padrão de redirecionamento do LINK
    };

    // Scroll gostoso do header
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

    // Voltar para o topo da página ao mudar de rota
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    // Mostrar o modal de LOGIN ao acessar a página de CHAT
    useEffect(() => {
        // Se não estiver logado e for para a página de CHAT, mostra o pop-up de LOGIN
        if (location.pathname === "/chat" && !isUserLogged) {
            setIsSignInVisible(true);
            setIsModalVisible(true);
        }

        // Quando for para a página HOME ou SOBRE, o pop-up de LOGIN some
        if (location.pathname === "/" || location.pathname === "/sobre") {
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }

        // Botão de fechar só mostra se não estiver na página de CHAT
        if (location.pathname === "/chat" || location.pathname === "/account") {
            setIsShowSignInCloseBtn(false);
        } else {
            setIsShowSignInCloseBtn(true);
        }

    }, [isUserLogged, location.pathname, navigate]);

    return (
        <div className="page">
            <section className={`login-modal-container ${!isModalVisible && "hidden-modal"} ${scrollDirection === "down" && "cover-hidden-header"}`}>
                <SignIn />
            </section>

            <React.Fragment>
                <header className={`page-header glass-effect ${scrollDirection === "down" && "hide-header"}`}>
                    <div className="header-title-container">
                        <h1 className={`header-title`}>DEX</h1>
                    </div>

                    <nav className="header-nav">
                        <div className="header-nav-links">
                            <Link to="/">HOME</Link>
                            <Link to="/sobre">SOBRE</Link>
                            <Link to="/chat">CHAT</Link>
                            <Link to="/account" onClick={handleLogin}>LOGIN</Link>
                        </div>
                    </nav>
                </header>

                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<div>Sobre o projeto</div>} />
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
