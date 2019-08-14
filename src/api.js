import axios from "axios";

let API_KEY = "";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;
