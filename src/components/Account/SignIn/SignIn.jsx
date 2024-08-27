import "../AccountCard.css";
import { IoIosClose } from "react-icons/io";
import useAccountContext from "../../../hook/useAccountContext.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function SignIn() {

    const navigate = useNavigate(); // Navega para rota especificada
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        setIsUserLogged, setIsSignInVisible,
        setIsSignUpVisible, isShowSignInCloseBtn,
        setIsModalVisible,
        userEmail, userPassword
    } = useAccountContext();

    const handleCloseBtn = () => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
    };

    const handleSignInSubmit = (event) => {

        event.preventDefault();

        if (email !== userEmail || password !== userPassword) {
            alert("Email ou senha inválidos");

        } else {

            setIsUserLogged(true);
            setIsSignInVisible(false);
            setIsModalVisible(false);
        }
    };

    const handleCriarContaBtn = () => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
        setIsSignUpVisible(true);

        if (location.pathname !== "/account") {
            navigate("/account");
        }
    }

    return (
        <>
            <div className={`account-card`} id="signIn">
                <div className="account-card-header">
                    <h1>Log In</h1>
                    {isShowSignInCloseBtn && <IoIosClose className="close-card-btn" onClick={handleCloseBtn} />}
                </div>

                <div className="account-card-form-container">
                    <form className="account-card-form" onSubmit={handleSignInSubmit}>
                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name="email" id="email" placeholder="Email"  required
                                value={email}
                                autoFocus={true}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password" name="password" id="password" placeholder="Senha" required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </fieldset>

                        <input type="submit" value="LOGIN" />
                    </form>
                </div>


                <div className="account-card-switch">
                    <p>
                        Não tem conta? <span className="switch-link" onClick={handleCriarContaBtn}>Sign Up</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;