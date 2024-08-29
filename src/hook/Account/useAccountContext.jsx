import { useContext } from 'react';
import AccountContext from '../../context/Account/AccountContext.jsx';

const useAccountContext = () => {
    const context = useContext(AccountContext);
    if (context === undefined) {
        throw new Error('useAccountContext must be used within an AccountProvider');
    }
    return context;
};

export default useAccountContext;