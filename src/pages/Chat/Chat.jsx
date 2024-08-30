/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FullPageChat } from "./FullPageChat/FullPageChat";
import { Widget } from "./Widget/Widget";
import { useLocation } from "react-router-dom";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext";
import Chamados from "../../assets/base-chamados.json";

function Chat({ type }) {
    const { authedUser } = useAuthenticationContext();

    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [isIaTyping, setIsIaTyping] = useState(false);

    const chatBodyRef = useRef();

    const welcomeMessages = [
        {
            content: `
    Seja bem vindo ${authedUser?.name || authedUser?.username}, eu sou Dex!
    Agente de suporte técnico de IA generativa projetado para auxiliar os times da Sofftek.
    Por ainda ser prototipo, nossa interação vai ser mais restrita.`.trim(),
        },
        {
            content:
                `Você pode descobrir um pouco mais sobre mim no documento abaixo, ou até mesmo assistir a nosso vídeo pitch na home ou aqui mesmo.`.trim(),
        },
        {
            content: "/documents/mercury-presentation.pdf",
            type: "pdf",
        },
    ];

    const handleSendMessage = (message) => {
        setMessages((prev) => [...prev, { ...message, timestamp: new Date() }]);
    };

    const handleSentIaMessages = (messages) => {};

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
            setMessages(
                welcomeMessages.map((msg) => ({
                    content: msg.content,
                    type: msg.type,
                    author: "ia",
                    timestamp: new Date(),
                }))
            );
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
