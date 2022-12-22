import axios, { AxiosInstance } from "axios";

const $axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default $axios;
