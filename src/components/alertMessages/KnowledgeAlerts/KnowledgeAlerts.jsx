import "../../../style/alertMessages/KnowledgeAlerts/KnowledgeAlerts.css";
import useKnowledgeContext from "../../../hook/Knowledge/useKnowledgeContext.jsx";
import {useEffect} from "react";

function KnowledgeAlerts() {
    
    const {
        isDocumentErrorAlertVisible, setIsDocumentErrorAlertVisible,
        documentErrorMessage,
        isDocumentSuccessAlertVisible, setIsDocumentSuccessAlertVisible,
        documentSuccessMessage
    } = useKnowledgeContext();

    useEffect(() => {
        if (location.pathname === "/knowledge") {
            return;
        }

        setIsDocumentErrorAlertVisible(false);
        setIsDocumentSuccessAlertVisible(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isDocumentErrorAlertVisible) {
            const timer = setTimeout(() => {
                setIsDocumentErrorAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }

        if (isDocumentSuccessAlertVisible) {
            const timer = setTimeout(() => {
                setIsDocumentSuccessAlertVisible(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
        
    }, [isDocumentErrorAlertVisible, isDocumentSuccessAlertVisible]);

    return (
        <section className="knowledge-card-alerts">
            <span className={`knowledge-card-error-alert glass-effect ${isDocumentErrorAlertVisible && "show-card-alert"}`}>
                {documentErrorMessage}
            </span>

            <span className={`knowledge-card-success-alert glass-effect ${isDocumentSuccessAlertVisible && "show-card-alert"}`}>
                {documentSuccessMessage}
            </span>
        </section>
    );
}

export default KnowledgeAlerts;