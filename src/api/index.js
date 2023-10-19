import axios from "axios";

// API for remote backend server
const API = axios.create({ baseURL: "https://news-app-2312.onrender.com" });

// API for local backend server
// const API = axios.create({ baseURL: "http://localhost:4000" });

export const fetchNews = (newsData) => API.post("/news", newsData);
