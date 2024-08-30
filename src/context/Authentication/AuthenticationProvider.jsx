import { useState } from 'react';
import AuthenticationContext from './AuthenticationContext.jsx';
import PropTypes from 'prop-types';

AuthenticationProvider.propTypes = {
    children: PropTypes.node.isRequired
};

function AuthenticationProvider({ children }) {

    //-----===| CARDS (+ modal) |===-----//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);
    const [isShowSignInCloseBtn, setIsShowSignInCloseBtn] = useState(true);

    //-----===| USER |===-----//
    const [registeredUsersList, setRegisteredUsersList] = useState([
        { username: "user1", email: "user1@gmail.com", password: "user1" },
        { username: "user2", email: "user2@gmail.com", password: "user2" },
        { username: "user3", email: "user3@gmail.com", password: "user3" },
    ]);

    //-----===| INPUT FIELDS |===-----//
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //-----===| VALIDATIONS |===-----//
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserValid, setIsUserValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [isUserInputInvalid, setIsUserInputInvalid] = useState(false);
    const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
    const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
    const [hasInteractedOnce, setHasInteractedOnce] = useState(false);
    const [isSignInErrorAlertVisible, setIsSignInErrorAlertVisible] = useState(false);
    const [isSignInSuccessfulAlertVisible, setIsSignInSuccessfulAlertVisible] = useState(false);
    const [isUserAlertVisible, setIsUserAlertVisible] = useState(false);
    const [isEmailAlertVisible, setIsEmailAlertVisible] = useState(false);
    const [isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible] = useState(false);

    return (
        <AuthenticationContext.Provider value={{
            //-----===| MODAL |===-----//
            isModalVisible, setIsModalVisible,

            //-----===| AUTHENTICATION CARDS |===-----//
            isSignInVisible, setIsSignInVisible,
            isSignUpVisible, setIsSignUpVisible,
            isShowSignInCloseBtn, setIsShowSignInCloseBtn,

            //-----===| USER STATE |===-----//
            isUserLogged, setIsUserLogged,

            //-----===| USER |===-----//
            // Lista de usuários registrados
            registeredUsersList, setRegisteredUsersList,

            //-----===| INPUT FIELDS |===-----//
            user, setUser,
            email, setEmail,
            password, setPassword,

            //-----===| VALIDATIONS |===-----//
            isUserValid, setIsUserValid,
            isEmailValid, setIsEmailValid,
            isPasswordMatch, setIsPasswordMatch,
            isUserInputInvalid, setIsUserInputInvalid,
            isEmailInputInvalid, setIsEmailInputInvalid,
            isPasswordInputInvalid, setIsPasswordInputInvalid,
            hasInteractedOnce, setHasInteractedOnce,
            isSignInErrorAlertVisible, setIsSignInErrorAlertVisible,
            isSignInSuccessfulAlertVisible, setIsSignInSuccessfulAlertVisible,
            isUserAlertVisible, setIsUserAlertVisible,
            isEmailAlertVisible, setIsEmailAlertVisible,
            isPasswordMatchAlertVisible, setIsPasswordMatchAlertVisible
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationProvider;