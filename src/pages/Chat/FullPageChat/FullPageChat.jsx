/* eslint-disable react/prop-types */
import "../../../style/Chat/FullPageChat/FullPageChat.css";
import { useEffect, useRef, useState } from "react";

export function FullPageChat(props) {
    const { messages, onNewMessage, isIaTyping } = props;

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
        <div className="container chat-wrapper">
            <div ref={chatBodyRef} className="chat-body">
                {messages.map((message) => (
                    <div
                        key={message.timestamp.getTime()}
                        className={["message-wrapper", message.author].join(
                            " "
                        )}
                    >
                        <div
                            key={message.timestamp.getTime()}
                            className="message-body"
                        >
                            {message.type === "pdf" ? (
                                <object
                                    data="http://localhost:5173/documents/mercury-presentation.pdf"
                                    type="application/pdf"
                                    width="100%"
                                    height="100%"
                                >
                                    <p>
                                        Alternative text - include a link{" "}
                                        <a href="http://localhost:5173/documents/mercury-presentation.pdf">
                                            to the PDF!
                                        </a>
                                    </p>
                                </object>
                            ) : (
                                // <iframe
                                //     src={`http://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=${message.content}&hl=en&embedded=true`}
                                //     // style="width:600px; height:500px;"
                                //     frameBorder="0"
                                // />
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
    );
}
