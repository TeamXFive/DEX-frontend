export const handleOpenAiRequest = async (prompt) => {
    if (prompt == "" || prompt == null) return;
    let mensagem = prompt;
    prompt = "";

    // Envia requisição com a mensagem para a API do ChatBot
    const resposta = await fetch("http://127.0.0.1:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: mensagem }),
    });
    const textoDaResposta = await resposta.text();
    return textoDaResposta;
};