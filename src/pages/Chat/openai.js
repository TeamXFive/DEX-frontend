export const handleOpenAiRequest = async (prompt) => {
    if (prompt == "" || prompt == null) return;
    let mensagem = prompt;
    prompt = "";

    const resposta = await fetch("https://dex-backend-ten.vercel.app/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: mensagem }),
    });
    const textoDaResposta = await resposta.text();
    return textoDaResposta;
};
