import "./SignUp.css";

function SignUp() {
    return (
        <>
            <div className="account-card">
                <div className="account-card-title">
                    <h1>CRIAR CONTA</h1>
                </div>

                <div className="account-card-form-container">
                    <form className="account-card-form">
                        <fieldset className="fs-user">
                            <label htmlFor="user">Usuário</label>
                            <input type="text" name="user" id="user" placeholder="Usuário"/>
                        </fieldset>

                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Senha"/>
                        </fieldset>

                        <fieldset className="fs-confirm-password">
                            <label htmlFor="confirm-password">Confirmar senha</label>
                            <input type="password" name="confirm-password" id="confirm-password"
                                   placeholder="Confirmar senha"/>
                        </fieldset>
                    </form>
                </div>

                <input type="submit" value="SIGN UP"/>

                <div className="account-card-switch">
                    <p>Já tem uma conta? <a onClick={console.log("oi")} className="switch-btn">Login</a></p>
                </div>
            </div>
        </>
    );
}

export default SignUp;