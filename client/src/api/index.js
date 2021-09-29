import axios from "axios";

import {
  SERVER_URL, SERVER_ENDPOINT,
} from "../app/config";

const api = axios.create({
  baseURL: `${SERVER_URL}/${SERVER_ENDPOINT}`,
});

api.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers["x-auth-token"] = localStorage.getItem("token");
    return config;
  },
  (error) => Promise.reject(error),
);

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

// WHY?
export default apis;
