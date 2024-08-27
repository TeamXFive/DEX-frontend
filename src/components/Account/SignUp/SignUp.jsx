import "../AccountCard.css";
import useAccountContext from "../../../hook/useAccountContext.jsx";
import {useEffect, useState} from "react";

function SignUp() {

    // INPUT FIELDS //
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // ALERTS //
    const [isUserValid, setIsUserValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isPasswordMatchOK, setIsPasswordMatchOK] = useState(false);

    const {
        setIsSignInVisible,
        setIsSignUpVisible
    } = useAccountContext();

    const handleUserValidation = () => {
        setIsUserValid(user.length > 0);
    }

    const handleEmailValidation = () => {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        setIsEmailValid(emailRegex.test(email));
    }

    const handleConfirmPassword = () => {
        setIsPasswordMatch((password === confirmPassword));
        setIsPasswordMatchOK(false);
    }
    const handleConfirmPasswordOK = () => {
        setIsPasswordMatchOK(password === confirmPassword && (password.trim() !== "" && confirmPassword.trim() !== ""));
    }

    const handleSignUpSubmit = (event) => {
        if (user.trim() === "" || !isUserValid || !isEmailValid || !isPasswordMatchOK) {
            event.preventDefault();
        }

        if (password.trim() === "" || confirmPassword.trim() === "") {
            setIsPasswordMatch(false);
        }
    }

    const handleFazerLoginBtn = () => {
        // Sumindo Sign Up e aparecendo Sign In
        setIsSignUpVisible(false);
        setIsSignInVisible(true);
    };

    return (
        <>
            <div className={`account-card`} id="signUp">
                <div className="account-card-header">
                    <h1>Sign Up</h1>
                </div>

                <div className="account-card-form-container">
                    <form className="account-card-form" onSubmit={handleSignUpSubmit}>
                        <fieldset className="fs-user">
                            <label htmlFor="user">Usuário</label>
                            <input
                                type="text" name="user" id="user" placeholder="Usuário"
                                value={user}
                                autoFocus={true}
                                onChange={(event) => setUser(event.target.value)}
                                onKeyUp={handleUserValidation}
                            />

                            <span
                                className={`account-card-error-alert glass-effect ${!isUserValid && "show-card-alert"}`}>Preencha corretamente!</span>
                        </fieldset>

                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name="email" id="email" placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                onKeyUp={handleEmailValidation}
                            />

                            <span className={`account-card-error-alert glass-effect ${!isEmailValid && "show-card-alert"}`}>Preencha o email corretamente!</span>
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password" name="password" id="password" placeholder="Senha"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={handleConfirmPassword}
                                onBlur={handleConfirmPasswordOK}
                            />

                            <span className={`account-card-error-alert glass-effect ${!isPasswordMatch && "show-card-alert"}`}>As senhas não coincidem!</span>
                            <span className={`account-card-success-alert glass-effect ${isPasswordMatchOK && "show-card-alert"}`}>As senhas coincidem!</span>
                        </fieldset>

                        <fieldset className="fs-confirm-password">
                            <label htmlFor="confirm-password">Confirmar senha</label>
                            <input
                                type="password" name="confirm-password" id="confirm-password" placeholder="Confirmar senha"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                onKeyUp={handleConfirmPassword}
                                onBlur={handleConfirmPasswordOK}
                            />

                            <span className={`account-card-error-alert glass-effect ${!isPasswordMatch && "show-card-alert"}`}>As senhas não coincidem!</span>
                            <span className={`account-card-success-alert glass-effect ${isPasswordMatchOK && "show-card-alert"}`}>As senhas coincidem!</span>
                        </fieldset>

                        <input type="submit" value="SIGN UP"/>
                    </form>
                </div>


                <div className="account-card-switch">
                    <p>
                        Já tem conta? <span  className={`switch-link`} onClick={handleFazerLoginBtn}>Log In</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;