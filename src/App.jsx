import "./style/App.css";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Authentication from "./pages/Authentication/Authentication.jsx";
import SignIn from "./components/AuthenticationCard/SignIn.jsx";
import useAuthenticationContext from "./hook/Authentication/useAuthenticationContext.jsx";
import Header from "./layouts/Header/Header.jsx";
import AuthenticationAlerts from "./components/alertMessages/AuthenticationAlerts/AuthenticationAlerts.jsx";
import Account from "./pages/Account/Account.jsx";
import SignIn from "./components/Account/SignIn/SignIn.jsx";
import useAccountContext from "./hook/useAccountContext.jsx";
import Header from "./components/header/header";
import AccountAlerts from "./components/Alerts/AccountAlerts/AccountAlerts.jsx";
import { About } from "./pages/About/About.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const location = useLocation();
    const navigate = useNavigate();

    const {
        isModalVisible, setIsModalVisible,
        setIsSignInVisible,
        isUserLogged,
        setIsShowSignInCloseBtn,
    } = useAuthenticationContext();

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

        if (location.pathname === "/chat" || location.pathname === "/authentication") {
            setIsShowSignInCloseBtn(false);
        } else {
            setIsShowSignInCloseBtn(true);
        }

        if (location.pathname === "/account" && !isUserLogged) {
            navigate("/authentication");
        }

    }, [isUserLogged, location.pathname, navigate]);

    return (
        <div className="page">
            <AuthenticationAlerts />

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
                        <Route path="/sobre" element={<About />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/authentication" element={<Authentication />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>

                    <Chat type="widget" />
                </div>
            </React.Fragment>
        </div>
    );
}
