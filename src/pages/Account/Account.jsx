import SignUp from "../../components/AccountCard/SignUp.jsx";
import "../../style/Account/Account.css";
import SignIn from "../../components/AccountCard/SignIn.jsx";
import useAccountContext from "../../hook/Account/useAccountContext.jsx";
import AccountSettings from "./AccountSettings/AccountSettings.jsx";

function Account () {

    const {
        isSignInVisible, setIsSignInVisible,
        isSignUpVisible, setIsSignUpVisible,
        isUserLogged, setIsUserLogged
    } = useAccountContext();

    return (
        <>
            <div className="account-container">
                {(!isUserLogged) ?
                    (
                        <article className={`account-cards-container`}>
                            <section className={`sign-in-container ${!isSignInVisible && "hidden-sign-in"}`}>
                                <SignIn
                                    setIsSignInVisible={setIsSignInVisible}
                                    setIsSignUpVisible={setIsSignUpVisible}
                                    setIsUserLogged={setIsUserLogged}
                                />
                            </section>

                            <section className={`sign-up-container ${!isSignUpVisible && "hidden-sign-up"}`}>
                                <SignUp
                                    isSignUpVisible={isSignUpVisible} setIsSignUpVisible={setIsSignUpVisible}
                                    setIsSignInVisible={setIsSignInVisible}
                                />
                            </section>
                        </article>
                    ) : (
                        <AccountSettings />
                    )
                }
            </div>
        </>
    );
}

export default Account;