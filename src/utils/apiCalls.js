import axios from "axios";

const apiCall = axios.create({
  // baseURL: "https://todo-app-mern-vbj2.onrender.com/",
  baseURL: "http://localhost:4000/",
  headers: { "Content-Type": "application/json" },
});


export default apiCall