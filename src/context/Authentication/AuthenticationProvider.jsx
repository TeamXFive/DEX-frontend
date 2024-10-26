import { useEffect, useState } from "react";
import AuthenticationContext from "./AuthenticationContext.jsx";
import PropTypes from "prop-types";

AuthenticationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function AuthenticationProvider({ children }) {
    const storedInitialValues =
        localStorage.getItem("AuthenticationProvider") || "{}";
    const initialValues = JSON.parse(storedInitialValues);

    //-----===| CARDS (+ modal) |===-----//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(true);
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);
    const [isShowSignInCloseBtn, setIsShowSignInCloseBtn] = useState(true);

    //-----===| USER |===-----//
    const [registeredUsersList, setRegisteredUsersList] = useState(
        initialValues.registeredUsersList || [
            { username: "tester", email: "tester", password: "tester" },
            { username: "adm", email: "adm@adm.com", password: "adm" },
            { username: "user1", email: "user1@gmail.com", password: "user1" },
        ]
    );

    //-----===| INPUT FIELDS |===-----//
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //-----===| VALIDATIONS |===-----//
    const [authedUser, setAuthedUser] = useState(initialValues.authedUser);
    const [isUserValid, setIsUserValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [isUserInputInvalid, setIsUserInputInvalid] = useState(false);
    const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
    const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
    const [hasInteractedOnce, setHasInteractedOnce] = useState(false);
    const [isSignInErrorAlertVisible, setIsSignInErrorAlertVisible] =
        useState(false);
    const [isSignInSuccessfulAlertVisible, setIsSignInSuccessfulAlertVisible] =
        useState(false);
    const [isUserAlertVisible, setIsUserAlertVisible] = useState(false);
    const [isEmailAlertVisible, setIsEmailAlertVisible] = useState(false);
    const [isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible] =
        useState(false);
    const [isTesterAlertVisible, setIsTesterAlertVisible] = useState(false);
    const [isAccountEditedAlertVisible, setAccountEditedAlertVisible] =
        useState(false);

    //-----===| CHAT HISTORY |===-----//
    const [chatHistory, setChatHistory] = useState(
        initialValues.chatHistory || {}
    );

    useEffect(() => {
        localStorage.setItem(
            "AuthenticationProvider",
            JSON.stringify({
                registeredUsersList,
                authedUser,
                chatHistory,
            })
        );
    }, [registeredUsersList, authedUser, chatHistory]);

    return (
        <AuthenticationContext.Provider
            value={{
                //-----===| MODAL |===-----//
                isModalVisible,
                setIsModalVisible,

                //-----===| AUTHENTICATION CARDS |===-----//
                isSignInVisible,
                setIsSignInVisible,
                isSignUpVisible,
                setIsSignUpVisible,
                isShowSignInCloseBtn,
                setIsShowSignInCloseBtn,

                //-----===| USER STATE |===-----//
                authedUser,
                setAuthedUser,

                //-----===| USER |===-----//
                // Lista de usuários registrados
                registeredUsersList,
                setRegisteredUsersList,

                //-----===| INPUT FIELDS |===-----//
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,

                //-----===| VALIDATIONS |===-----//
                isUserValid,
                setIsUserValid,
                isEmailValid,
                setIsEmailValid,
                isPasswordMatch,
                setIsPasswordMatch,
                isUserInputInvalid,
                setIsUserInputInvalid,
                isEmailInputInvalid,
                setIsEmailInputInvalid,
                isPasswordInputInvalid,
                setIsPasswordInputInvalid,
                hasInteractedOnce,
                setHasInteractedOnce,
                isSignInErrorAlertVisible,
                setIsSignInErrorAlertVisible,
                isSignInSuccessfulAlertVisible,
                setIsSignInSuccessfulAlertVisible,
                isUserAlertVisible,
                setIsUserAlertVisible,
                isEmailAlertVisible,
                setIsEmailAlertVisible,
                isPasswordMatchAlertVisible,
                setIsPasswordMatchAlertVisible,
                isTesterAlertVisible,
                setIsTesterAlertVisible,
                isAccountEditedAlertVisible,
                setAccountEditedAlertVisible,

                //-----===| CHAT HISTORY |===-----//
                chatHistory,
                setChatHistory,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationProvider;
