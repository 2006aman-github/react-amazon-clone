import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-769a8.cloudfunctions.net/api", //the api url (cloud func)
  // http://localhost:5001/clone-769a8/us-central1/api
});

export default instance;
