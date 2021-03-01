import axios from "axios";

import {
  SERVER_URL, SERVER_ENDPOINT,
} from "../app/config";

const api = axios.create({
  baseURL: `${SERVER_URL}/${SERVER_ENDPOINT}`,
});

export const insertMovie = (payload) => api.post("/poll", payload);
export const getAllMovies = () => api.get("/polls");
export const updateMovieById = (id, payload) => api.put(`/poll/${id}`, payload);
export const deleteMovieById = (id) => api.delete(`/poll/${id}`);
export const getMovieById = (id) => api.get(`/poll/${id}`);

const apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
};

export default apis;
