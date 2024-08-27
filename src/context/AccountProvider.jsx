import { useState } from 'react';
import AccountContext from './AccountContext.jsx';
import PropTypes from 'prop-types';

AccountProvider.propTypes = {
    children: PropTypes.node.isRequired
};

function AccountProvider({ children }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(false);
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isShowSignInCloseBtn, setIsShowSignInCloseBtn] = useState(true);
    //-----===| USER |===-----//
    const [userUsername, setUserUsername] = useState("1");
    const [userEmail, setUserEmail] = useState("1");
    const [userPassword, setUserpassword] = useState("1");

    return (
        <AccountContext.Provider value={{
            //-----===| MODAL |===-----//
            isModalVisible, setIsModalVisible,
            //-----===| ACCOUNT CARDS |===-----//
            isSignInVisible, setIsSignInVisible,
            isSignUpVisible, setIsSignUpVisible,
            isShowSignInCloseBtn, setIsShowSignInCloseBtn,
            //-----===| USER STATE |===-----//
            isUserLogged, setIsUserLogged,
            //-----===| USER |===-----//
            userUsername, setUserUsername,
            userEmail, setUserEmail,
            userPassword, setUserpassword
        }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;