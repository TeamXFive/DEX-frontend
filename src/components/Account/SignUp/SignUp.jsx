import "../AccountCard.css";
import useAccountContext from "../../../hook/useAccountContext.jsx";
import {useState} from "react";

function SignUp() {

    // INPUT FIELDS //
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // ALERTS //
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const {
        setIsSignInVisible,
        setIsSignUpVisible
    } = useAccountContext();

    const handleConfirmPassword = () => {

    }

    const handleSignUpSubmit = () => {}

    const handleFazerLoginBtn = () => {
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
                                type="text" name="user" id="user" placeholder="Usuário" required
                                value={user}
                                autoFocus={true}
                                onChange={(event) => setUser(event.target.value)}
                            />
                        </fieldset>

                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name="email" id="email" placeholder="Email" required
                                value={email}
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

                        <fieldset className="fs-confirm-password">
                            <label htmlFor="confirm-password">Confirmar senha</label>
                            <input
                                type="password" name="confirm-password" id="confirm-password" placeholder="Confirmar senha" required
                                value={confirmPassword}
                                onChange={(event) => {setConfirmPassword(event.target.value);}}
                                onBlur={() => {
                                    if (password !== confirmPassword) {
                                        setIsPasswordMatch(false);
                                    } else {
                                        setIsPasswordMatch(true);
                                    }
                                }}
                            />

                            <span className={`account-card-alert ${isPasswordMatch && "hidden-card-alert"}`}>As senhas não coincidem!</span>
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