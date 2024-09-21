/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FullPageChat } from "./FullPageChat/FullPageChat";
import { Widget } from "./Widget/Widget";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthenticationContext from "../../hook/Authentication/useAuthenticationContext";
import Chamados from "../../assets/base-chamados.json";
import { handleOpenAiRequest } from "./openai";

const useRealApi = true;

export function getRandomChatId() {
    const firstSlice = Math.floor(Math.random() * 1000000)
        .toString()
        .slice(0, 4);
    const secondSlice = Math.floor(Math.random() * 1000000)
        .toString()
        .slice(0, 4);

    return `${firstSlice}-${secondSlice}`;
}

function Chat({ type }) {
    const { authedUser } = useAuthenticationContext();

    const navigate = useNavigate();
    const location = useLocation();
    const chatId = new URLSearchParams(location.search).get("chatId");

    const [isIaTyping, setIsIaTyping] = useState(false);
    const chatBodyRef = useRef();

    const isWelcomeSent = useRef(false);

    const [chatHistory, setChatHistory] = useState({});

    useEffect(() => {
        if (!chatId) {
            navigate(`/chat?chatId=${getRandomChatId()}`, {
                replace: true,
            });
        }
    }, [chatId, navigate]);

    const messages = useMemo(
        () => chatHistory[chatId] || [],
        [chatHistory, chatId]
    );

    const setMessages = useCallback(
        (prevFunc) => {
            setChatHistory((prev) => {
                return {
                    ...prev,
                    [chatId]: prevFunc(prev[chatId] || []),
                };
            });
        },
        [chatId]
    );

    const handleSendIaMessages = useCallback(
        async (messages) => {
            setIsIaTyping(true);

            let index = 0;
            for await (const msg of messages) {
                const isLastMessage = index === messages.length - 1;
                const words = msg.content.split(" ");

                let wordIndex = 0;

                setMessages((prev) => {
                    return [
                        ...prev,
                        {
                            ...msg,
                            content: "...",
                            timestamp: new Date(),
                            author: "ia",
                        },
                    ];
                });

                for await (const word of words) {
                    const isLastWord = wordIndex === words.length - 1;

                    await new Promise((resolve) => {
                        const randomWaitTime = Math.floor(Math.random() * 100);

                        setTimeout(
                            () => {
                                setMessages((prev) => {
                                    const lastMessage = prev[prev.length - 1];
                                    const lastMessageContent =
                                        lastMessage?.content || "";
                                    const newContent =
                                        lastMessageContent === "..."
                                            ? word
                                            : `${lastMessageContent} ${word}`;

                                    return [
                                        ...prev.slice(0, -1),
                                        {
                                            ...lastMessage,
                                            content: newContent,
                                            timestamp: new Date(),
                                        },
                                    ];
                                });

                                resolve();
                            },
                            index === 0 && wordIndex === 0 ? 0 : randomWaitTime
                        );
                    });

                    if (isLastWord && isLastMessage) {
                        setTimeout(() => {
                            setIsIaTyping(false);
                        }, 500);
                    }

                    wordIndex++;
                }
                index++;
            }
        },
        [setMessages]
    );

    const handleFakeApi = useCallback(
        (question) => {
            const questionTokens = question.trim().split(" ");

            if (question.toLowerCase().includes("obrigado")) {
                const gratitudeResponses = [
                    "De nada, estou aqui para ajudar!",
                    "Disponha, precisando é só chamar!",
                    "Estou aqui para o que precisar!",
                    "Estou sempre à disposição!",
                    "Estou aqui para ajudar, não hesite em me chamar!",
                ];

                handleSendIaMessages([
                    {
                        content:
                            gratitudeResponses[
                                Math.floor(
                                    Math.random() * gratitudeResponses.length
                                )
                            ],
                        author: "ia",
                        timestamp: new Date(),
                    },
                ]);
                setIsIaTyping(false);
                return true;
            }

            if (questionTokens.length === 0 || questionTokens.length === 1) {
                const giveMoreDetailsSamples = [
                    "Você poderia elaborar melhor sua pergunta?",
                    "Estou com dificuldades de encontrar algo, poderia me dar mais detalhes?",
                    "Você poderia ser mais específico?",
                    "Poderia me explicar melhor?",
                    "Você pode me dar mais detalhes sobre seu problema?",
                ];

                handleSendIaMessages([
                    {
                        content:
                            giveMoreDetailsSamples[
                                Math.floor(
                                    Math.random() *
                                        giveMoreDetailsSamples.length
                                )
                            ],
                        author: "ia",
                        timestamp: new Date(),
                    },
                ]);
                setIsIaTyping(false);
                return true;
            }

            const chamadoPorNumero = Chamados.find((chamado) =>
                questionTokens.some(
                    (token) =>
                        chamado["Número"].toLowerCase() ===
                        token.replace("#", "").toLowerCase()
                )
            );

            const rankedChamados = chamadoPorNumero
                ? [chamadoPorNumero]
                : Chamados.reduce((acc, chamado) => {
                      const searchFields = [
                          "Categoria Relatório",
                          "Subcategoria Relatório",
                          "Sintoma",
                          "Grupo de atribuição",
                          "Local",
                          "Descrição",
                          "Comentários Visiveis 1",
                          "Comentários Visiveis 2",
                      ];

                      let points = 0;
                      searchFields.forEach((field) => {
                          const hasMatches = questionTokens.some((token) =>
                              chamado[field]
                                  .toLowerCase()
                                  .includes(
                                      token.replace("#", "").toLowerCase()
                                  )
                          );

                          if (hasMatches) {
                              points++;
                          }
                      });

                      if (points > 0) {
                          acc.push({
                              chamado,
                              points,
                          });
                      }

                      return acc;
                  }, []);

            const sortedChamados = rankedChamados.sort(
                (chamadoA, chamadoB) => chamadoB.points - chamadoA.points
            );

            if (chamadoPorNumero) {
                const chamado = chamadoPorNumero;
                handleSendIaMessages([
                    {
                        content: `Aqui está o chamado que você procura:
                    #${chamado["Número"]}

                    Categoria Relatório: ${chamado["Categoria Relatório"]}
                    Subcategoria Relatório: ${chamado["Subcategoria Relatório"]}
                    Sintoma: ${chamado["Sintoma"]}
                    Grupo de atribuição: ${chamado["Grupo de atribuição"]}
                    Local: ${chamado["Local"]}
                    Descrição: ${chamado["Descrição"]}
                    Comentários Visiveis 1: ${chamado["Comentários Visiveis 1"]}
                    Comentários Visiveis 2: ${chamado["Comentários Visiveis 2"]}`,
                    },
                    {
                        content: `Este chamado foi resolvido da seguinte maneira:
                    "${chamado["Resolução"]}"`,
                    },
                    {
                        content: "Posso te ajudar com mais alguma coisa?",
                    },
                ]);
                return true;
            }

            if (sortedChamados.length > 0) {
                let listOfChamados = sortedChamados
                    .slice(0, 5)
                    .reduce(
                        (acc, { chamado }) =>
                            `${acc}\nChamado #${chamado["Número"]} - ${chamado["Descrição"]}`.trim(),
                        ""
                    );

                if (sortedChamados.length > 5) {
                    listOfChamados += `\nE mais ${
                        sortedChamados.length - 5
                    }...`;
                }

                handleSendIaMessages([
                    {
                        content: `Encontrei ${sortedChamados.length} chamados que podem te ajudar:`,
                    },
                    {
                        content: listOfChamados,
                    },
                    {
                        content: `Escolha um dos chamados acima para mais detalhes ou diga "todos" para listar os ${sortedChamados.length}.`,
                    },
                ]);
                return true;
            }

            setIsIaTyping(false);
            return true;
        },
        [handleSendIaMessages]
    );

    const processQuestion = useCallback(
        async (prompt) => {
            if (useRealApi) {
                const response = await handleOpenAiRequest(prompt);
                await handleSendIaMessages([{ content: response }]);
                setIsIaTyping(false);
                return true;
            } else {
                return handleFakeApi(prompt);
            }
        },
        [handleFakeApi, handleSendIaMessages]
    );

    const welcomeMessages = useMemo(
        () => [
            {
                content: `
            Seja bem vindo ${
                authedUser?.name || authedUser?.username
            }, eu sou Dex!
            Agente de suporte técnico de IA generativa projetado para auxiliar os times da Sofftek.
            Você pode descobrir um pouco mais sobre mim no documento abaixo, ou até mesmo assistir a nosso vídeo pitch na home ou aqui mesmo.`.trim(),
            },
            {
                content: "/documents/mercury-presentation.pdf",
                type: "pdf",
            },
            {
                content: "Em que posso lhe ajudar?",
            },
        ],
        [authedUser]
    );

    useEffect(() => {
        if (isWelcomeSent.current || !authedUser) {
            return;
        }
        isWelcomeSent.current = true;
        handleSendIaMessages(welcomeMessages);
    }, [welcomeMessages, authedUser, handleSendIaMessages]);

    useEffect(() => {
        const iaPossibleMessages = [
            "Entendi, posso te ajudar com mais alguma coisa?",
            "Acho que entendi, você poderia me dar mais detalhes?",
            "Hmm, interessante, me fale mais sobre isso.",
            "Você sabia que eu sou uma inteligência artificial?",
            "Que legal, você poderia me explicar melhor?",
        ];

        const lastMessage = messages.at(-1);

        if (lastMessage && lastMessage.author !== "ia" && !isIaTyping) {
            setIsIaTyping(true);

            const result = processQuestion(lastMessage.content);

            if (!result) {
                handleSendIaMessages([
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
            }
        }

        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [
        isIaTyping,
        messages,
        isWelcomeSent,
        welcomeMessages,
        processQuestion,
        handleSendIaMessages,
    ]);

    if (type === "widget" && location.pathname === "/chat") {
        return null;
    }

    return type === "widget" ? (
        <Widget
            messages={messages}
            onNewMessage={setMessages}
            isIaTyping={isIaTyping}
            chatHistory={chatHistory}
        />
    ) : (
        <FullPageChat
            messages={messages}
            onNewMessage={setMessages}
            isIaTyping={isIaTyping}
            chatHistory={chatHistory}
        />
    );
}

export default Chat;
