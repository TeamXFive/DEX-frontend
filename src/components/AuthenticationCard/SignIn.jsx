import "../../style/Authentication/AuthenticationCard/AuthenticationCard.css";
import { IoIosClose } from "react-icons/io";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function SignIn() {

    const navigate = useNavigate(); // Navega para rota especificada
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        isUserLogged, setIsUserLogged,
        setIsSignInVisible,
        setIsSignUpVisible,
        isShowSignInCloseBtn,
        setIsModalVisible,
        registeredUsersList, setRegisteredUsersList,
        setHasInteractedOnce,
        isSignInErrorAlertVisible, setIsSignInErrorAlertVisible,
        isSignInSuccessfulAlertVisible, setIsSignInSuccessfulAlertVisible
    } = useAuthenticationContext();

    const handleCloseBtn = () => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
    };

    const findUser = (email) => {
        return registeredUsersList.find(user => user.email === email);
    }

    const handleSignInSubmit = (event) => {

        event.preventDefault();

        const user = findUser(email);

        if (!user || user.password !== password) {
            setIsSignInErrorAlertVisible(true);
            setIsUserLogged(false);

        } else {
            setRegisteredUsersList(registeredUsersList.map((user) => {
                return [{user, email, password}];
            }));
            
            setIsSignInSuccessfulAlertVisible(true);

            setIsUserLogged(true);
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }
    };

    const handleCriarContaBtn = () => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
        setIsSignUpVisible(true);
        setHasInteractedOnce(false);

        // Resetando validações
        setIsSignInErrorAlertVisible(false);

        if (location.pathname !== "/authentication") {
            navigate("/authentication");
        }
    }

    useEffect(() => {
        if (isSignInErrorAlertVisible) {
            const timer = setTimeout(() => {
                setIsSignInErrorAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [isSignInErrorAlertVisible]);
    useEffect(() => {
        if (isSignInSuccessfulAlertVisible) {
            const timer = setTimeout(() => {
                setIsSignInSuccessfulAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [isSignInSuccessfulAlertVisible]);

    useEffect(() => {
        (isUserLogged && navigate("/account"))
    }, [isUserLogged]);

    return (
        <>
            <div className={`authentication-card`} id="signIn">
                <div className="authentication-card-header">
                    <h1>Log In</h1>
                    {isShowSignInCloseBtn && <IoIosClose className="close-card-btn" onClick={handleCloseBtn} />}
                </div>

                <div className="authentication-card-form-container">
                    <form className="authentication-card-form" onSubmit={handleSignInSubmit}>
                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name="email" id="email" placeholder="Email"
                                value={email}
                                autoFocus={true}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password" name="password" id="password" placeholder="Senha"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </fieldset>

                        <input type="submit" value="LOGIN"/>
                    </form>
                </div>


                <div className="authentication-card-switch">
                    <p>
                        Não tem conta? <span className="switch-link" onClick={handleCriarContaBtn}>Sign Up</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;