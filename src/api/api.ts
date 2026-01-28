import axios from "axios";

const api_url = import.meta.env.VITE_BASE_URL_API;

export const createApiInstance = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
