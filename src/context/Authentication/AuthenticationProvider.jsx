import { useEffect, useState } from "react";
import AuthenticationContext from "./AuthenticationContext.jsx";
import PropTypes from "prop-types";

AuthenticationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function AuthenticationProvider({ children }) {
    const salt_key = "rUbmak-kihpyf-9tiffo";
    const salt_value = "zehvuj-biKzi1-festij";
    const storedInitialValues =
        localStorage.getItem(btoa(salt_key + "AuthenticationProvider")) || //btoa = Base 64 TO Alpha
        btoa(salt_value + "{}");
    const decryptedInitialValues = atob(storedInitialValues).replace(
        //atob = Alpha TO Base 64
        salt_value,
        ""
    );
    const initialValues = JSON.parse(decryptedInitialValues);

    //-----===| CARDS (+ modal) |===-----//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);
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
            btoa(salt_key + "AuthenticationProvider"),
            btoa(
                salt_value +
                    JSON.stringify({
                        registeredUsersList,
                        authedUser,
                        chatHistory,
                    })
            )
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
