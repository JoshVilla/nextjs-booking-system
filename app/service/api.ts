import { post } from "./service";
import {
  IAddMovieParams,
  IApiResponse,
  IMovies,
  IDeleteMovieParams,
  IEditMovieParams,
} from "./types";

export const addMovie = async (
  params: any
): Promise<IApiResponse<IAddMovieParams>> => {
  return await post<IAddMovieParams>("/api/movie/addMovie", params, true);
};

export const getMovies = async (
  params: any
): Promise<IApiResponse<IMovies[]>> => {
  return await post<IMovies[]>("/api/movie", params);
};

export const deleteMovie = async (
  params: any
): Promise<IApiResponse<IDeleteMovieParams>> => {
  return await post<IDeleteMovieParams>("/api/movie/deleteMovie", params);
};

export const editMovie = async (
  params: any
): Promise<IApiResponse<IEditMovieParams>> => {
  return await post<IEditMovieParams>("/api/movie/editMovie", params, true);
};
