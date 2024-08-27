import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";
import SignIn from "./components/Account/SignIn/SignIn.jsx";
import Header from "./components/header/header";

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
            <section className={`login-modal-container ${!isSignInVisible && "hidden"} ${scrollDirection === "down" && "cover-hidden-header"}`}>
                <SignIn isSignInVisible={isSignInVisible} setIsSignInVisible={setIsSignInVisible} />
            </section>

            <React.Fragment>
                <Header />

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
