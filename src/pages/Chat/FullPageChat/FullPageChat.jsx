/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import "../../../style/Chat/FullPageChat/FullPageChat.css";
import { useEffect, useRef, useState } from "react";
import { getRandomChatId } from "../Chat";

export function FullPageChat(props) {
    const { messages, onNewMessage, isIaTyping, chatHistory } = props;

    const navigate = useNavigate();
    const location = useLocation();

    const chatBodyRef = useRef();
    const [messageInput, setMessageInput] = useState("");

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);

    return (
        <div className="container ">
            <div className="chat-history">
                <h4>Histórico de suporte</h4>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        navigate(`/chat?chatId=${getRandomChatId()}`);
                    }}
                    type="button"
                >
                    Nova conversa
                </button>
                <ul>
                    {Object.entries(chatHistory).map(([chatId, history]) => (
                        <li
                            key={chatId}
                            onClick={() => {
                                navigate(`/chat?chatId=${chatId}`);
                            }}
                        >
                            {history[0]?.content || "-"}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container chat-wrapper">
                <div ref={chatBodyRef} className="chat-body">
                    {messages.map((message) => (
                        <div
                            key={message.timestamp.getTime()}
                            className={[
                                "message-wrapper",
                                message.author,
                                message.type,
                            ].join(" ")}
                        >
                            <div
                                key={message.timestamp.getTime()}
                                className={`message-body`}
                            >
                                {message.type === "pdf" ? (
                                    <object
                                        data="/documents/mercury-presentation.pdf"
                                        type="application/pdf"
                                        width="100%"
                                        height="100%"
                                    >
                                        <p>
                                            Casso o PDF não carregue, utilize o
                                            link abaixo: <br />
                                            <a href="/documents/mercury-presentation.pdf">
                                                {location.origin +
                                                    "/documents/mercury-presentation.pdf"}
                                            </a>
                                        </p>
                                    </object>
                                ) : (
                                    <span>{message.content}</span>
                                )}
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
                                <span>...</span>
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

                        onNewMessage((prev) => [
                            ...prev,
                            {
                                author: "user",
                                content: messageInput,
                                timestamp: new Date(),
                            },
                        ]);
                        setMessageInput("");
                    }}
                >
                    <div className="mb-3 d-flex">
                        <input
                            type="text"
                            name="message"
                            className={`form-control me-2  ${
                                isIaTyping && "disabled"
                            }`}
                            placeholder="Escreva aqui sua dúvida"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <button
                            disabled={isIaTyping}
                            type="submit"
                            className={`btn btn-primary ${
                                isIaTyping && "disabled"
                            }`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
