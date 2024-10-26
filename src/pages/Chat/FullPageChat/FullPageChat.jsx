/* eslint-disable react/prop-types */
import "../../../style/Chat/FullPageChat/FullPageChat.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getRandomChatId } from "../../../utils";
import useAuthenticationContext from "../../../hook/Authentication/useAuthenticationContext";

export function FullPageChat(props) {
    const { messages, onNewMessage, isIaTyping, currentChatId, onDeleteChat } =
        props;

    const { authedUser, chatHistory } = useAuthenticationContext();

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
                        navigate(`/?chatId=${getRandomChatId()}`);
                    }}
                    type="button"
                >
                    Nova conversa
                </button>
                <ul>
                    {Object.entries(chatHistory).map(([chatId, history]) => (
                        <li
                            key={chatId}
                            className={`chat-history-item ${
                                chatId === currentChatId ? "active" : ""
                            }`}
                            onClick={() => {
                                navigate(`/?chatId=${chatId}`);
                            }}
                        >
                            <span>
                                {history?.messages?.find(
                                    (msg) => msg.author === "user"
                                )?.content ||
                                    (history?.messages?.[0].timestamp &&
                                        new Date(history.messages[0].timestamp)
                                            .toLocaleDateString("pt-BR", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                            .replace(", ", " - ")) ||
                                    "-"}
                            </span>
                            <button
                                className="delete-chat-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onDeleteChat(chatId);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container chat-wrapper">
                <div ref={chatBodyRef} className="chat-body">
                    {messages.map((message) => (
                        <div
                            key={message.timestamp}
                            className={[
                                "message-wrapper",
                                message.author,
                                message.type,
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "message-body",
                                    message.typing && "typing",
                                ].join(" ")}
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
                                {new Date(message.timestamp).toLocaleDateString(
                                    "pt-BR",
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}
                            </small>
                        </div>
                    ))}
                    {isIaTyping && (
                        <div className="typing-indicator">
                            <span />
                        </div>
                    )}
                </div>
                {chatHistory[currentChatId]?.status !== "closed" &&
                authedUser ? (
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
                            {messages.at(-1)?.type !== "question" ? (
                                <input
                                    type="text"
                                    name="message"
                                    className={`form-control me-2  ${
                                        isIaTyping && "disabled"
                                    }`}
                                    placeholder="Escreva aqui sua dúvida"
                                    value={messageInput}
                                    onChange={(e) =>
                                        setMessageInput(e.target.value)
                                    }
                                />
                            ) : (
                                <div className="question-options">
                                    {messages.at(-1).options?.map((option) => (
                                        <button
                                            key={option.label}
                                            onClick={option.action}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
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
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
