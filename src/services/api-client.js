import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://phi-mart-ruby.vercel.app/api/v1",
});

export default apiClient;