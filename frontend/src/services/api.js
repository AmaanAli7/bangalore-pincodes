import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const searchPincodes = async (query) => {
  const response = await API.get(`/pincodes/search?q=${query}`);
  return response.data;
};

export const getAllPincodes = async () => {
  const response = await API.get("/pincodes");
  return response.data;
};