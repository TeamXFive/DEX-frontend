import PropTypes from 'prop-types';
import "../AccountCard.css";
import {Link, useNavigate} from "react-router-dom";
import { IoIosClose } from "react-icons/io"
import {useEffect} from "react";

SignIn.propTypes = {
    setIsSignInVisible: PropTypes.func.isRequired,
    setIsSignUpVisible: PropTypes.func,
    setIsUserLogged: PropTypes.func.isRequired,
    isShowCloseBtn: PropTypes.bool,
    setIsModalVisible: PropTypes.func
}
SignIn.defaultProps = {
    isShowCloseBtn: false,
    setIsModalVisible: () => {},
    setIsSignUpVisible: () => {}
}

function SignIn({ setIsSignInVisible,
                    setIsSignUpVisible,
                    setIsUserLogged, isShowCloseBtn,
                    setIsModalVisible }) {

    const navigate = useNavigate(); // Navega para rota especificada

    const handleCloseBtn = () => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
    };

    const handleSignInSubmit = (event) => {
        setIsSignInVisible(false);
        setIsModalVisible(false);
        setIsUserLogged(true);
        event.preventDefault();
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
                    {isShowCloseBtn && <IoIosClose className="close-card-btn" onClick={handleCloseBtn} />}
                </div>

                <div className="account-card-form-container">
                    <form className="account-card-form" onSubmit={handleSignInSubmit}>
                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Senha"/>
                        </fieldset>

                        <input type="submit" value="LOGIN" />
                    </form>
                </div>


                <div className="account-card-switch">
                    <p>
                        Não tem conta? <span className="switch-link" onClick={handleCriarContaBtn}>Criar conta</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;