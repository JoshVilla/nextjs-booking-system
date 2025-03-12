import { post } from "./service";
import { IAddMovieParams, IApiResponse, IMovies } from "./types";

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
