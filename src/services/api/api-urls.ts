import axios from "axios";

export const API_SERVICE = axios.create({
  baseURL: process.env.GLOBAL_API,
  timeout: 7000,
}) 