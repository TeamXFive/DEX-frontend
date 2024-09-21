import React from 'react';
import { useNavigate } from "react-router-dom"

function CallToActionButton() {


    const navigate = useNavigate();

    const redirectButton = () => {
        navigate('/chat');
    }

    return (
        <div className='call-button'>
            <button onClick={redirectButton}>
                Chatbot
            </button>
        </div>
    )

}

export default CallToActionButton;