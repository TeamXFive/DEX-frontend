import SignUp from "../../components/Account/SignUp/SignUp.jsx";
import "./Account.css";
import SignIn from "../../components/Account/SignIn/SignIn.jsx";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

Account.propTypes = {
    isSignInVisible: PropTypes.bool.isRequired,
    setIsSignInVisible: PropTypes.func.isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    setIsUserLogged: PropTypes.func.isRequired,
    isShowCloseBtn: PropTypes.bool.isRequired,
}

function Account ({ isSignInVisible, setIsSignInVisible, isUserLogged, setIsUserLogged }) {
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);

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
                        <p>fodase</p>
                    )
                }
            </div>
        </>
    );
}

export default Account;