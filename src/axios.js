import axios from "axios";
// import store from "./store";

const token = localStorage.getItem("AUTHTOKEN");

if (token) axios.defaults.headers.common = { "x-access-token": token };
export default axios;
