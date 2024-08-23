import "./SignInUp.css";

function SignIn({ showSignUp }) {
    return (
        <>
            <div className="account-card">
                <div className="account-card-title">
                    <h1>ENTRAR</h1>
                </div>

                <div className="account-card-form-container">
                    <form className="account-card-form">
                        <fieldset className="fs-email">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </fieldset>

                        <fieldset className="fs-password">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Senha"/>
                        </fieldset>
                    </form>
                </div>

                <input type="submit" value="LOGIN"/>

                <div className="account-card-switch">
                    <p>Não tem conta? <a onClick={showSignUp} className="switch-btn">Criar</a></p>
                </div>
            </div>
        </>
    );
}

export default SignIn;