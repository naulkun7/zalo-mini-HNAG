import axios from "axios";

const LOGIN_API = import.meta.env.VITE_LOGIN_API_URL;
const TOKEN = import.meta.env.ZMP_TOKEN;

export let https = axios.create({
  baseURL: LOGIN_API,
  header: {
    Token: TOKEN,
  },
});
