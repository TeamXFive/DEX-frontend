import { getApiEndpoint } from "../../../config";

export const handleOpenAiRequest = async (prompt) => {
    if (prompt == "" || prompt == null) return;
    let mensagem = prompt;
    prompt = "";

    // Envia requisição com a mensagem para a API do ChatBot
    // const resposta = await fetch("http://localhost:3000/api/chat", {
    const resposta = await fetch(`${getApiEndpoint()}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: mensagem }),
    });
    const textoDaResposta = await resposta.text();
    return textoDaResposta;
};
