import "./style/App.css";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Account from "./pages/Account/Account.jsx";
import SignIn from "./components/AccountCard/SignIn.jsx";
import useAccountContext from "./hook/Account/useAccountContext.jsx";
import Header from "./layouts/Header/Header.jsx";
import AccountAlerts from "./components/alertMessages/AccountAlerts/AccountAlerts.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const location = useLocation();
    const navigate = useNavigate();

    const {
        isModalVisible, setIsModalVisible,
        setIsSignInVisible,
        isUserLogged,
        setIsShowSignInCloseBtn,
    } = useAccountContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    useEffect(() => {
        if (location.pathname === "/chat" && !isUserLogged) {
            setIsSignInVisible(true);
            setIsModalVisible(true);
        }

        if (location.pathname === "/" || location.pathname === "/sobre") {
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }

        if (location.pathname === "/chat" || location.pathname === "/account") {
            setIsShowSignInCloseBtn(false);
        } else {
            setIsShowSignInCloseBtn(true);
        }

    }, [isUserLogged, location.pathname, navigate]);

    return (
        <div className="page">
            <AccountAlerts />

            <section className={`login-modal-container ${!isModalVisible && "hidden-modal"} ${scrollDirection === "down" && "cover-hidden-header"}`}>
                <SignIn />
            </section>

            <React.Fragment>
                <Header
                    scrollDirection={scrollDirection} setScrollDirection={setScrollDirection}
                />

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
