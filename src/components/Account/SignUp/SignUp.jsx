import "../AccountCard.css";
import useAccountContext from "../../../hook/useAccountContext.jsx";
import {useEffect, useState} from "react";

function SignUp() {

    // INPUT FIELDS //
    const [confirmPassword, setConfirmPassword] = useState("");

    const {
        // CARDS //
        setIsSignInVisible,
        setIsSignUpVisible,

        // USER //
        setIsUserLogged,
        setRegisteredUsersList,

        // INPUT FIELDS //
        user, setUser,
        email, setEmail,
        password, setPassword,

        // VALIDATIONS //
        isUserValid, setIsUserValid,
        isEmailValid, setIsEmailValid,
        isPasswordMatch, setIsPasswordMatch,
        isUserInputInvalid, setIsUserInputInvalid,
        isEmailInputInvalid, setIsEmailInputInvalid,
        isPasswordInputInvalid, setIsPasswordInputInvalid,
        hasInteractedOnce, setHasInteractedOnce,

    } = useAccountContext();

    // Zerando form quando mudar de página
    useEffect(() => {
        setUser("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }, [location.key]);

    const handleUserValidation = () => {
        setIsUserValid(user.length > 0);

        setIsUserInputInvalid(false);
    }

    const handleEmailValidation = () => {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        setIsEmailValid(emailRegex.test(email) && email.trim().length > 0);

        setIsEmailInputInvalid(false);
    }

    const handleConfirmPassword = () => {
        setIsPasswordMatch((password === confirmPassword) && (password.length > 0));

        setIsPasswordInputInvalid(false);
    }

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        handleUserValidation();
        handleEmailValidation();
        handleConfirmPassword();

        setIsUserInputInvalid(!isUserValid);
        setIsEmailInputInvalid(!isEmailValid);
        setIsPasswordInputInvalid(!isPasswordMatch);

        if (isUserValid && isEmailValid && isPasswordMatch) {
            setRegisteredUsersList([{ username: user, email: email, password: password }]);
            setIsUserLogged(true);
            setHasInteractedOnce(false);
        }
    }

    const handleHasInteractedOnce = () => {
        if (!hasInteractedOnce) {
            setHasInteractedOnce(true);
        }
    }

    const handleFazerLoginBtn = () => {
        // Sumindo Sign Up e aparecendo Sign In
        setIsSignUpVisible(false);
        setIsSignInVisible(true);
        setHasInteractedOnce(false);
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
                                type="text" name="user" id="user" placeholder="Usuário" className={`${isUserInputInvalid && "invalid-input"}`}
                                value={user}
                                autoFocus={true}
                                onChange={(event) => setUser(event.target.value)}
                                onKeyUp={handleUserValidation}
                            />
                        </fieldset>

                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name="email" id="email" placeholder="Email" className={`${isEmailInputInvalid && "invalid-input"}`}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                onKeyUp={handleEmailValidation}
                            />
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password" name="password" id="password" placeholder="Senha" className={`${isPasswordInputInvalid && "invalid-input"}`}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={handleConfirmPassword}
                            />
                        </fieldset>

                        <fieldset className="fs-confirm-password">
                            <label htmlFor="confirm-password">Confirmar senha</label>
                            <input
                                type="password" name="confirm-password" id="confirm-password" placeholder="Confirmar senha" className={`${isPasswordInputInvalid && "invalid-input"}`}
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                onKeyUp={handleConfirmPassword}
                            />
                        </fieldset>

                        <input type="submit" value="SIGN UP" onClick={handleHasInteractedOnce}/>
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