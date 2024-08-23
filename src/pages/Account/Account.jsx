import SignIn from "../../components/Account/SignIn.jsx";
import {useState} from "react";
import SignUp from "../../components/Account/SignUp.jsx";
import "./Account.css";
import {CSSTransition} from "react-transition-group";

function Account () {
    const [visibleElement, setVisibleElement] = useState("sign-in");

    const showSignIn = () => setVisibleElement("sign-in");
    const showSignUp = () => setVisibleElement("sign-up");

    return (
        <>
            <div className="account-container">
                <div className="account-card-container">
                    <CSSTransition
                        in={visibleElement === "sign-in"}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit>

                        <SignIn showSignUp={showSignUp}/>

                    </CSSTransition>

                    <CSSTransition
                        in={visibleElement === "sign-up"}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit>

                        <SignUp showSignIn={showSignIn}/>

                    </CSSTransition>

                    {/*{visibleElement === "sign-in" && <SignIn showSignUp={showSignUp}/>}*/}
                    {/*{visibleElement === "sign-up" && <SignUp showSignIn={showSignIn}/>}*/}

                </div>
            </div>
        </>
    );
}

export default Account;