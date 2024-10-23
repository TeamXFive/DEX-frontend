import { useContext } from 'react';
import KnowledgeContext from '../../context/Knowledge/KnowledgeContext.jsx';

const useKnowledgeContext = () => {
    const context = useContext(KnowledgeContext);
    if (context === undefined) {
        throw new Error('useKnowledgeContext must be used within an KnowledgeProvider');
    }
    return context;
};

export default useKnowledgeContext;