import "./AccountAlerts.css";
import useAccountContext from "../../../hook/useAccountContext.jsx";
import { useEffect, useState } from "react";

function AccountAlerts() {
    const [isUserAlertVisible, setIsUserAlertVisible] = useState(false);
    const [isEmailAlertVisible, setIsEmailAlertVisible] = useState(false);
    const [isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible] = useState(false);


    const {
        isUserValid,
        isEmailValid,
        isPasswordMatch,
        hasInteractedOnce,
        isSignInErrorAlertVisible,
        isSignInSuccessfulAlertVisible,
    } = useAccountContext();

    const handleShowPasswordMatchAlert = () => {
        setIsPasswordMatchAlertVisible(!isPasswordMatch);
    };

    const handleShowEmailAlert = () => {
        setIsEmailAlertVisible(!isEmailValid);
    };

    const handleShowUserAlert = () => {
        setIsUserAlertVisible(!isUserValid);
    };

    useEffect(() => {
        if (!hasInteractedOnce) {
            return;
        }

        handleShowPasswordMatchAlert();
        handleShowEmailAlert();
        handleShowUserAlert();
    }, [isUserValid, isEmailValid, isPasswordMatch, hasInteractedOnce]);

    useEffect(() => {
        if (isPasswordMatchAlertVisible) {
            setIsUserAlertVisible(false);
            setIsEmailAlertVisible(false);
        }

        if (isEmailAlertVisible) {
            setIsUserAlertVisible(false);
        }
    }, [isEmailAlertVisible, isPasswordMatchAlertVisible]);

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