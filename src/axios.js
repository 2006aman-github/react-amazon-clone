import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-769a8/us-central1/api", //the api url (cloud func)
});

export default instance;
