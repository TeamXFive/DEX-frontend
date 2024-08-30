import SignUp from "../../components/AuthenticationCard/SignUp.jsx";
import "../../style/Authentication/Authentication.css";
import SignIn from "../../components/AuthenticationCard/SignIn.jsx";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext.jsx";

function Authentication() {
    const {
        isSignInVisible,
        setIsSignInVisible,
        isSignUpVisible,
        setIsSignUpVisible,
        setAuthedUser,
    } = useAuthenticationContext();

    return (
        <>
            <div className="authentication-container">
                <article className={`authentication-cards-container`}>
                    <section
                        className={`sign-in-container ${
                            !isSignInVisible && "hidden-sign-in"
                        }`}
                    >
                        <SignIn
                            setIsSignInVisible={setIsSignInVisible}
                            setIsSignUpVisible={setIsSignUpVisible}
                            setIsUserLogged={setAuthedUser}
                        />
                    </section>

                    <section
                        className={`sign-up-container ${
                            !isSignUpVisible && "hidden-sign-up"
                        }`}
                    >
                        <SignUp
                            isSignUpVisible={isSignUpVisible}
                            setIsSignUpVisible={setIsSignUpVisible}
                            setIsSignInVisible={setIsSignInVisible}
                        />
                    </section>
                </article>
            </div>
        </>
    );
}

export default Authentication;
