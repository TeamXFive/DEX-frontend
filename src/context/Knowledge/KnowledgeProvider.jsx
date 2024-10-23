import KnowledgeContext from "./KnowledgeContext.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

KnowledgeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function KnowledgeProvider({ children }) {
    const [fileName, setFileName] = useState("");
    const [isFileUploadErrorAlertVisible, setIsFileUploadErrorAlertVisible] = useState(false);
    const [fileUploadErrorMessage, setFileUploadErrorMessage] = useState("");
    const [isFileUploadSuccessAlertVisible, setIsFileUploadSuccessAlertVisible] = useState(false);
    const [fileUploadSuccessMessage, setFileUploadSuccessMessage] = useState("");
    
    return (
        <KnowledgeContext.Provider value={{
            fileName, setFileName,
            isFileUploadErrorAlertVisible, setIsFileUploadErrorAlertVisible,
            fileUploadErrorMessage, setFileUploadErrorMessage,
            isFileUploadSuccessAlertVisible, setIsFileUploadSuccessAlertVisible,
            fileUploadSuccessMessage, setFileUploadSuccessMessage
        }}>
            {children}
        </KnowledgeContext.Provider>
    );
}

export default KnowledgeProvider;