import "../../style/Authentication/AuthenticationCard/AuthenticationCard.css";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    // INPUT FIELDS //
    const [confirmPassword, setConfirmPassword] = useState("");

    const {
        // CARDS //
        setIsSignInVisible,
        isSignUpVisible, setIsSignUpVisible,

        // USER //
        setAuthedUser,
        registeredUsersList, setRegisteredUsersList,

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

        isUserAlertVisible, setIsUserAlertVisible,
        isEmailAlertVisible, setIsEmailAlertVisible,
        isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible,
    } = useAuthenticationContext();

    const handleUserValidation = () => {
        setIsUserValid(user.trim().length > 0);

        setIsUserInputInvalid(false);

        setIsUserAlertVisible(!isUserValid);
    };

    const handleEmailValidation = () => {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        setIsEmailValid(emailRegex.test(email) && email.trim().length > 0);

        setIsEmailInputInvalid(false);

        setIsEmailAlertVisible(!isEmailValid);
    };

    const handleConfirmPassword = () => {
        setIsPasswordMatch(
            password === confirmPassword && password.trim().length > 0
        );

        setIsPasswordInputInvalid(false);

        setIsPasswordMatchAlertVisible(!isPasswordMatch);
    };

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        handleUserValidation();
        handleEmailValidation();
        handleConfirmPassword();

        setIsUserInputInvalid(!isUserValid);
        setIsEmailInputInvalid(!isEmailValid);
        setIsPasswordInputInvalid(!isPasswordMatch);

        if (isUserValid && isEmailValid && isPasswordMatch) {
            setRegisteredUsersList([
                ...registeredUsersList,
                { username: user, email: email, password: password },
            ]);
            setAuthedUser({ username: user, email: email });
            setHasInteractedOnce(false);
            navigate("/account");
        }
    };

    const handleHasInteractedOnce = () => {
        if (hasInteractedOnce) {
            return;
        }

        setHasInteractedOnce(true);
    };

    const handleFazerLoginBtn = () => {
        // Sumindo Sign Up e aparecendo Sign In
        setIsSignUpVisible(false);
        setIsSignInVisible(true);
        setHasInteractedOnce(false);
    };

    // Zerando form quando mudar de página
    useEffect(() => {
        setUser("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setIsUserInputInvalid(false);
        setIsEmailInputInvalid(false);
        setIsPasswordInputInvalid(false);

        setIsUserAlertVisible(false);
        setIsEmailAlertVisible(false);
        setIsPasswordMatchAlertVisible(false);
    }, [location.key]);

    useEffect(() => {
        if (isPasswordMatchAlertVisible) {
            setIsUserAlertVisible(false);
            setIsEmailAlertVisible(false);
        }

        if (isEmailAlertVisible) {
            setIsUserAlertVisible(false);
        }
    }, [isUserAlertVisible, isEmailAlertVisible, isPasswordMatchAlertVisible]);

    // tirando alertas ao mudar de card (Sign Up -> Sign In)
    useEffect(() => {
        if (isSignUpVisible) {
            return;
        }

        setIsUserAlertVisible(false);
        setIsEmailAlertVisible(false);
        setIsPasswordMatchAlertVisible(false);
    }, [isSignUpVisible]);

    return (
        <>
            <div className={`authentication-card`} id="signUp">
                <div className="authentication-card-header">
                    <h1>Sign Up</h1>
                </div>

                <div className="authentication-card-form-container">
                    <form
                        className="authentication-card-form"
                        onSubmit={handleSignUpSubmit}
                    >
                        <fieldset className="fs-user">
                            <label htmlFor="user">Usuário</label>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Usuário"
                                className={`${
                                    isUserInputInvalid && "invalid-input"
                                }`}
                                value={user}
                                autoFocus={true}
                                onChange={(event) =>
                                    setUser(event.target.value)
                                }
                                onKeyUp={handleUserValidation}
                            />
                        </fieldset>

                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className={`${
                                    isEmailInputInvalid && "invalid-input"
                                }`}
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                onKeyUp={handleEmailValidation}
                            />
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Senha"
                                className={`${
                                    isPasswordInputInvalid && "invalid-input"
                                }`}
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                onKeyUp={handleConfirmPassword}
                            />
                        </fieldset>

                        <fieldset className="fs-confirm-password">
                            <label htmlFor="confirm-password">
                                Confirmar senha
                            </label>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="Confirmar senha"
                                className={`${
                                    isPasswordInputInvalid && "invalid-input"
                                }`}
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                                onKeyUp={handleConfirmPassword}
                            />
                        </fieldset>

                        <input
                            type="submit"
                            value="SIGN UP"
                            onClick={handleHasInteractedOnce}
                        />
                    </form>
                </div>

                <div className="authentication-card-switch">
                    <p>
                        Já tem conta?{" "}
                        <span
                            className={`switch-link`}
                            onClick={handleFazerLoginBtn}
                        >
                            Log In
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;
