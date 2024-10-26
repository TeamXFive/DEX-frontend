const API_URL = "https://dex-backend-ten.vercel.app/api";
const API_URL_LOCAL = "http://localhost:3000/api";

export const getApiEndpoint = () => {
    if (location.hostname === "localhost") {
        return API_URL_LOCAL;
    } else {
        return API_URL;
    }
};
