import "../../../style/alertMessages/AuthenticationAlerts/AuthenticationAlerts.css";
import useAuthenticationContext from "../../../hook/Authentication/useAuthenticationContext.jsx";
import { useEffect } from "react";

function AuthenticationAlerts() {
    const {
        isSignInErrorAlertVisible,
        isSignInSuccessfulAlertVisible,
        
        isUserAlertVisible,
        setIsUserAlertVisible,
        isEmailAlertVisible,
        setIsEmailAlertVisible,
        isPasswordMatchAlertVisible,
        setIsPasswordMatchAlertVisible,
    } = useAuthenticationContext();

    useEffect(() => {
        if (location.pathname === "/authentication") {
            return;
        }

        setIsUserAlertVisible(false);
        setIsEmailAlertVisible(false);
        setIsPasswordMatchAlertVisible(false);
    }, [location.pathname]);

    return (
        <section className="authentication-card-alerts">
            <span className={`authentication-card-error-alert glass-effect ${isSignInErrorAlertVisible && "show-card-alert"}`}>
                Email/Usuário ou Senha incorretos!
            </span>

            <span className={`authentication-card-success-alert glass-effect ${isSignInSuccessfulAlertVisible && "show-card-alert"}`}>
                Bem-vindo!
            </span>

            <span className={`authentication-card-error-alert glass-effect ${isUserAlertVisible && "show-card-alert"}`}>
                Preencha com um usuário válido!
            </span>

            <span className={`authentication-card-error-alert glass-effect ${isEmailAlertVisible && "show-card-alert"}`}>
                Preencha com um email válido!
            </span>

            <span className={`authentication-card-error-alert glass-effect ${isPasswordMatchAlertVisible && "show-card-alert"}`}>
                As senhas não coincidem!
            </span>
        </section>
    );
}

export default AuthenticationAlerts;
