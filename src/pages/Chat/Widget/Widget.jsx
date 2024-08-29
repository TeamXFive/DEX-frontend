/* eslint-disable react/prop-types */
import "../../../style/Chat/Widget/Widget.css";
import {useEffect, useRef, useState} from "react";
import ChatIcon from "../../../assets/icons/chat.svg?react";
import CloseIcon from "../../../assets/icons/close.svg?react";
import useAuthenticationContext from "../../../hook/Authentication/useAuthenticationContext.jsx";

export function Widget(props) {
    const {messages, onNewMessage, isIaTyping} = props;

    const chatBodyRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [messageInput, setMessageInput] = useState("");

    const {
        isUserLogged,
        setIsModalVisible,
        setIsSignInVisible,
    } = useAuthenticationContext();

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);

    const isAuthenticationPage = location.pathname === "/authentication";

    useEffect(() => {
        setIsOpen(false);
    }, [isAuthenticationPage]);

    return (
        <>
            <button
                className={`widget-button ${isOpen ? "open" : ""} ${isAuthenticationPage ? "hidden-widget" : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <ChatIcon/>
            </button>
            <div className={`container chat-wrapper widget ${isOpen ? "open" : ""}`}>
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    <CloseIcon/>
                </button>
                <div ref={chatBodyRef} className="chat-body">
                    {messages.map((message) => (
                        <div
                            key={message.timestamp.getTime()}
                            className={["message-wrapper", message.author].join(" ")}
                        >
                            <div key={message.timestamp.getTime()} className="message-body">
                                <p>{message.content}</p>
                            </div>
                            <small className="secondary-data">
                                {message.timestamp.toLocaleDateString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </small>
                        </div>
                    ))}
                    {isIaTyping && (
                        <div className="message-wrapper ia">
                            <div className="message-body">
                                <p>...</p>
                            </div>
                        </div>
                    )}
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        if (!e.target.message.value?.trim() || isIaTyping) {
                            return;
                        }

                        if (!isUserLogged) {
                            setIsModalVisible(true);
                            setIsSignInVisible(true);
                            return;
                        }

                        onNewMessage((prev) => [
                            ...prev,
                            {author: "user", content: messageInput, timestamp: new Date()},
                        ]);
                        setMessageInput("");
                    }}
                >
                    <div className="d-flex">
                        <input
                            type="text"
                            name="message"
                            className={`form-control me-2  ${isIaTyping && "disabled"}`}
                            placeholder="Escreva aqui sua dúvida"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <button
                            disabled={isIaTyping}
                            type="submit"
                            className={`btn btn-primary ${isIaTyping && "disabled"}`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
