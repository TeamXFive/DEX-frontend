import { useContext } from 'react';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext.jsx';

const useAuthenticationContext = () => {
    const context = useContext(AuthenticationContext);
    if (context === undefined) {
        throw new Error('useAuthenticationContext must be used within an AuthenticationProvider');
    }
    return context;
};

export default useAuthenticationContext;