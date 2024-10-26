import { useNavigate } from "react-router-dom";

function CallToActionButton() {
    const navigate = useNavigate();

    const redirectButton = () => {
        navigate("/");
    };

    return (
        <div className="call-button">
            <button onClick={redirectButton}>Chatbot</button>
        </div>
    );
}

export default CallToActionButton;
