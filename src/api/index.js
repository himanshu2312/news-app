import axios from "axios";

const API=axios.create({ baseURL: "https://news-app-2312.onrender.com"});

export const fetchNews=(newsData)=>API.post("/news",newsData);
