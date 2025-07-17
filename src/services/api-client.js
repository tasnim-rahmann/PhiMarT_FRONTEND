import axios from "axios";

export default axios.create({
    baseURL: "https://phi-mart-ruby.vercel.app/api/v1",
});