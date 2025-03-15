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
  ICinemaSearchParams,
  INowShowing,
  IAddNowShowingParams,
  ICheckAvailableNowShowingParams,
  INowShowingDetailsParams,
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

export const getCinemas = async (
  params: ICinemaSearchParams
): Promise<IApiResponse<ICinema[]>> => {
  return await post<ICinema[]>("/api/cinema", params);
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

export const getNowShowing = async (
  params: any
): Promise<IApiResponse<INowShowing[]>> => {
  return await post<INowShowing[]>("/api/nowShowing", params);
};

export const addNowShowing = async (
  params: any
): Promise<IApiResponse<IAddNowShowingParams>> => {
  return await post<IAddNowShowingParams>(
    "/api/nowShowing/addNowShowing",
    params
  );
};

export const checkAvailableNowShowing = async (
  params: any
): Promise<IApiResponse<ICheckAvailableNowShowingParams>> => {
  return await post<ICheckAvailableNowShowingParams>(
    "/api/check/availableNowShowing",
    params
  );
};

export const getNowShowingDetails = async (
  params: any
): Promise<IApiResponse<INowShowingDetailsParams>> => {
  return await post<INowShowingDetailsParams>(
    "/api/nowShowing/nowShowingDetails",
    params
  );
};

export const getHomeData = async (params: any): Promise<IApiResponse<any>> => {
  return await post<any>("/api/main", params);
};
