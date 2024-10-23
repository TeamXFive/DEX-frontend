export function getRandomChatId() {
    const firstSlice = Math.floor(Math.random() * 1000000)
        .toString()
        .slice(0, 4);
    const secondSlice = Math.floor(Math.random() * 1000000)
        .toString()
        .slice(0, 4);

    return `${firstSlice}-${secondSlice}`;
}
