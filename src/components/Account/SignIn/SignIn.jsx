import PropTypes from 'prop-types';
import "./SignIn.css";
import { Link } from "react-router-dom";

SignIn.propTypes = {
    isSignInVisible: PropTypes.bool.isRequired,
    setIsSignInVisible: PropTypes.func.isRequired
}

function SignIn({ isSignInVisible, setIsSignInVisible}) {
    const handleCloseBtn = () => {
        setIsSignInVisible(false);
    };

    const handleSignInSubmit = (event) => {
        setIsSignInVisible(false);
        event.preventDefault();
    };

    return (
        <>
            <div className={isSignInVisible ? 'account-card' : 'account-card hidden'}>
                <div className="account-card-header">
                    <h1>ENTRAR</h1>
                    <p 
                        className="close-card-btn"
                        onClick={handleCloseBtn}
                    >
                        X
                    </p>
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
                    <p>Não tem conta? <Link to="/account" className="switch-btn">Criar</Link></p>
                </div>
            </div>
        </>
    );
}

export default SignIn;