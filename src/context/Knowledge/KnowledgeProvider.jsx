import KnowledgeContext from "./KnowledgeContext.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

KnowledgeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function KnowledgeProvider({ children }) {
    const [fileAlertName, setFileAlertName] = useState("");
    const [isDocumentErrorAlertVisible, setIsDocumentErrorAlertVisible] = useState(false);
    const [documentErrorMessage, setDocumentErrorMessage] = useState("");
    const [isDocumentSuccessAlertVisible, setIsDocumentSuccessAlertVisible] = useState(false);
    const [documentSuccessMessage, setDocumentSuccessMessage] = useState("");
    const [files, setFiles] = useState([]);
    
    return (
        <KnowledgeContext.Provider value={{
            fileAlertName, setFileAlertName,
            isDocumentErrorAlertVisible, setIsDocumentErrorAlertVisible,
            documentErrorMessage, setDocumentErrorMessage,
            isDocumentSuccessAlertVisible, setIsDocumentSuccessAlertVisible,
            documentSuccessMessage, setDocumentSuccessMessage,
            files, setFiles
        }}>
            {children}
        </KnowledgeContext.Provider>
    );
}

export default KnowledgeProvider;