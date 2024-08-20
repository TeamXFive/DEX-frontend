import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const [isIaTyping, setIsIaTyping] = useState(false);

  const chatBodyRef = useRef();

  // Big set of full random messages said by an IA pretending to be human
  const iaPossibleMessages = [
    "Bacana",
    "Entendi",
    "Legal",
    "Interessante",
    "Vou pesquisar mais sobre isso",
    "Que legal",
    "Bem legal",
    "Bem bacana",
    "Bem interessante",
  ];

  useEffect(() => {
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
                Math.floor(Math.random() * iaPossibleMessages.length)
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

  return (
    <div className="container chat-wrapper">
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

          setMessages((prev) => [
            ...prev,
            { author: "user", content: messageInput, timestamp: new Date() },
          ]);
          setMessageInput("");
        }}
      >
        <div className="mb-3 d-flex">
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
  );
}

export default App;
