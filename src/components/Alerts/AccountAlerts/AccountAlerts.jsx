import "./AccountAlerts.css";
import useAccountContext from "../../../hook/Account/useAccountContext.jsx";
import {useEffect} from "react";

function AccountAlerts() {

    const {
        isSignInErrorAlertVisible,
        isSignInSuccessfulAlertVisible,

        isUserAlertVisible, setIsUserAlertVisible,
        isEmailAlertVisible, setIsEmailAlertVisible,
        isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible
    } = useAccountContext();

    useEffect(() => {
        if (location.pathname === "/account") {
            return;
        }
        
        setIsUserAlertVisible && setIsEmailAlertVisible && setIsPasswordMatchAlertVisible(false);
    }, [location.pathname]);

    return (
        <section className="account-card-alerts">
            <span className={`account-card-error-alert glass-effect ${isSignInErrorAlertVisible && "show-card-alert"}`}>Email ou Senha incorretos!</span>

            <span className={`account-card-success-alert glass-effect ${isSignInSuccessfulAlertVisible && "show-card-alert"}`}>Bem-vindo!</span>

            <span className={`account-card-error-alert glass-effect ${isUserAlertVisible && "show-card-alert"}`}>Preencha com um usuário válido!</span>

            <span className={`account-card-error-alert glass-effect ${isEmailAlertVisible && "show-card-alert"}`}>Preencha com um email válido!</span>

            <span className={`account-card-error-alert glass-effect ${isPasswordMatchAlertVisible && "show-card-alert"}`}>As senhas não coincidem!</span>
        </section>
    );
}

export default AccountAlerts;