import "./style/App.css";
import React, { useEffect, useState } from "react";
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Authentication from "./pages/Authentication/Authentication.jsx";
import SignIn from "./components/AuthenticationCard/SignIn.jsx";
import useAuthenticationContext from "./hook/Authentication/useAuthenticationContext.jsx";
import Header from "./layouts/Header/Header.jsx";
import AuthenticationAlerts from "./components/alertMessages/AuthenticationAlerts/AuthenticationAlerts.jsx";
import Account from "./pages/Account/Account.jsx";
import About from "./pages/About/About.jsx";
import Knowledge from "./pages/Knowledge/Knowledge.jsx";
import KnowledgeAlerts from "./components/alertMessages/KnowledgeAlerts/KnowledgeAlerts.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

export function App() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const location = useLocation();
    const navigate = useNavigate();
    const hideHeaderRoutes = ["/dashboard"];
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    const {
        isModalVisible,
        setIsModalVisible,
        setIsSignInVisible,
        setIsSignUpVisible,
        isSignInVisible,
        isSignUpVisible,
        authedUser,
        setIsShowSignInCloseBtn,
    } = useAuthenticationContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    useEffect(() => {
        if (
            ((location.pathname === "/" && !authedUser) ||
                location.pathname === "/authentication") &&
            !isSignInVisible &&
            !isSignUpVisible
        ) {
            setIsSignInVisible(true);
            setIsModalVisible(false);
        }

        if (location.pathname === "/knowledge" && !authedUser) {
            setIsSignInVisible(true);
            setIsModalVisible(true);
        }

        if (location.pathname === "/sobre") {
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }

        if ((authedUser && isSignInVisible) || isSignUpVisible) {
            setIsSignInVisible(false);
            setIsSignUpVisible(false);
        }

        if (
            location.pathname === "/" ||
            location.pathname === "/authentication" ||
            location.pathname === "/knowledge"
        ) {
            setIsShowSignInCloseBtn(false);
        } else {
            setIsShowSignInCloseBtn(true);
        }

        if (location.pathname === "/account" && !authedUser) {
            navigate("/authentication");
        }
    }, [
        location.pathname,
        authedUser,
        isSignInVisible,
        isSignUpVisible,
        setIsModalVisible,
        setIsSignInVisible,
        setIsSignUpVisible,
        setIsShowSignInCloseBtn,
        navigate,
    ]);

    return (
        <div className="page">
            <AuthenticationAlerts />
            <KnowledgeAlerts />

            <section
                className={`login-modal-container ${
                    !isModalVisible && "hidden-modal"
                } ${scrollDirection === "down" && "cover-hidden-header"}`}
            >
                <SignIn />
            </section>

            <React.Fragment>
                {!shouldHideHeader && (
                    <Header
                        scrollDirection={scrollDirection}
                        setScrollDirection={setScrollDirection}
                    />
                )}

                <div className="page-content">
                    <Routes>
                        <Route path="/sobre" element={<About />} />
                        {!authedUser ? (
                            <>
                                <Route
                                    path="/authentication"
                                    element={<Authentication />}
                                />
                                <Route
                                    path="*"
                                    element={<Navigate to="/authentication" />}
                                />
                            </>
                        ) : (
                            <>
                                <Route path="/" element={<Chat />} />

                                <Route
                                    path="/knowledge"
                                    element={<Knowledge />}
                                />
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />

                                <Route path="/account" element={<Account />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </>
                        )}
                    </Routes>
                </div>
            </React.Fragment>
        </div>
    );
}
