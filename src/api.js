import axios from "axios";

let API_KEY = "konp54pwem1n35thhka2nrn620q6xdu";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;