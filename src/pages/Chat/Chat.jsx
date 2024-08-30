/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FullPageChat } from "./FullPageChat/FullPageChat";
import { Widget } from "./Widget/Widget";
import { useLocation } from "react-router-dom";

function Chat({ type }) {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [isIaTyping, setIsIaTyping] = useState(false);

    const chatBodyRef = useRef();

    useEffect(() => {
        const iaPossibleMessages = [
            "Entendi, posso te ajudar com mais alguma coisa?",
            "Acho que entendi, você poderia me dar mais detalhes?",
            "Hmm, interessante, me fale mais sobre isso.",
            "Você sabia que eu sou uma inteligência artificial?",
            "Que legal, você poderia me explicar melhor?",
        ];

        const lastMessage = messages.at(-1);

        if (messages.length === 0) {
            setMessages([
                {
                    content: "Olá, eu sou a IA, como posso te ajudar?",
                    author: "ia",
                    timestamp: new Date(),
                },
            ]);
        }

        if (lastMessage && lastMessage.author !== "ia" && !isIaTyping) {
            console.log("IA is typing...");
            const waitTime = Math.floor(Math.random() * 2000) + 500;
            setIsIaTyping(true);
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        content:
                            iaPossibleMessages[
                                Math.floor(
                                    Math.random() * iaPossibleMessages.length
                                )
                            ],
                        author: "ia",
                        timestamp: new Date(),
                    },
                ]);
                setIsIaTyping(false);
            }, waitTime);
        }

        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [isIaTyping, messages]);

    if (type === "widget" && location.pathname === "/chat") {
        return null;
    }

    return type === "widget" ? (
        <Widget
            messages={messages}
            onNewMessage={setMessages}
            isIaTyping={isIaTyping}
        />
    ) : (
        <FullPageChat
            messages={messages}
            onNewMessage={setMessages}
            isIaTyping={isIaTyping}
        />
    );
}

export default Chat;
