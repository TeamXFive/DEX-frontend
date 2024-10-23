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

            {/*<div className={`tester-knowledge-card-error-alert glass-effect ${isTesterAlertVisible && "tester-show-card-alert"}`}>*/}
            {/*    <span className={`tester-card-title`}><b>AVISO PARA TESTER</b></span>*/}
            {/*    <span className={`tester-card-email`}><b>Email</b>: tester</span>*/}
            {/*    <span className={`tester-card-password`}><b>Senha</b>: tester</span>*/}
            {/*</div>*/}
        </section>
    );
}

export default KnowledgeAlerts;