import { post } from "./service";
import {
  IAddMovieParams,
  IApiResponse,
  IMovies,
  IDeleteMovieParams,
  IEditMovieParams,
  ICinema,
  IAddCinemaParams,
  IEditCinemaParams,
  IDeleteCinemaParams,
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

export const getCinemas = async (): Promise<IApiResponse<ICinema[]>> => {
  return await post<ICinema[]>("/api/cinema");
};

export const addCinema = async (
  params: any
): Promise<IApiResponse<IAddCinemaParams>> => {
  return await post<IAddCinemaParams>("/api/cinema/addCinema", params);
};

export const editCinema = async (
  params: any
): Promise<IApiResponse<IEditCinemaParams>> => {
  return await post<IEditCinemaParams>("/api/cinema/editCinema", params);
};

export const deleteCinema = async (
  params: any
): Promise<IApiResponse<IDeleteCinemaParams>> => {
  return await post<IDeleteCinemaParams>("/api/cinema/deleteCinema", params);
};
