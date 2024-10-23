import "../../../style/alertMessages/KnowledgeAlerts/KnowledgeAlerts.css";
import useKnowledgeContext from "../../../hook/Knowledge/useKnowledgeContext.jsx";
import {useEffect} from "react";

function KnowledgeAlerts() {
    
    const {
        isFileUploadErrorAlertVisible, setIsFileUploadErrorAlertVisible,
        fileUploadErrorMessage,
        isFileUploadSuccessAlertVisible, setIsFileUploadSuccessAlertVisible,
        fileUploadSuccessMessage
    } = useKnowledgeContext();

    useEffect(() => {
        if (location.pathname === "/knowledge") {
            return;
        }

        setIsFileUploadErrorAlertVisible(false);
        setIsFileUploadSuccessAlertVisible(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isFileUploadErrorAlertVisible) {
            const timer = setTimeout(() => {
                setIsFileUploadErrorAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }

        if (isFileUploadSuccessAlertVisible) {
            const timer = setTimeout(() => {
                setIsFileUploadSuccessAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
        
    }, [isFileUploadErrorAlertVisible, isFileUploadSuccessAlertVisible]);

    return (
        <section className="knowledge-card-alerts">
            <span className={`knowledge-card-error-alert glass-effect ${isFileUploadErrorAlertVisible && "show-card-alert"}`}>
                {fileUploadErrorMessage}
            </span>

            <span className={`knowledge-card-success-alert glass-effect ${isFileUploadSuccessAlertVisible && "show-card-alert"}`}>
                {fileUploadSuccessMessage}
            </span>
        </section>
    );
}

export default KnowledgeAlerts;