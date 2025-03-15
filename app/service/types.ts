export type IApiResponse<T> = {
  success?: boolean;
  message: string;
  data: T;
  genres?: string[];
  isAvailable?: boolean;
  error?: string;
};

export interface IServiceParams {
  [key: string]: any;
}

export interface IAddMovieParams {
  title: string;
  poster: File;
  cover: File;
  casts: string[];
  genres: string[];
  time: string;
  description: string;
  director: string;
  producer: string;
  distributor: string;
}

export interface IGetMoviesParams {
  page?: number;
  limit?: number;
  title?: string;
  genre?: string;
}

export interface IMovies {
  _id: string;
  title: string;
  posterUrl: string;
  coverUrl: string;
  casts: string[];
  genres: string[];
  time: string;
  description: string;
  director: string;
  producer: string;
  isShowing: boolean;
  distributor: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ISeat {
  seatNumber: string;
  price: number;
  status: string;
}

export interface IDeleteMovieParams {
  movieId: string;
}

export interface IEditMovieParams {
  movieId: string;
  title?: string;
  poster?: File;
  cover?: File;
  casts?: string[];
  genres?: string[];
  time?: string;
  description?: string;
  director?: string;
  producer?: string;
  distributor?: string;
}

export interface IAddCinemaParams {
  name: string;
  isOpen: boolean;
}

export interface ICinema {
  _id: string;
  name: string;
  isOpen: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  backgroundCode: number;
}

export interface IEditCinemaParams {
  cinemaId: string;
  name: string;
  isOpen: boolean;
}

export interface IDeleteCinemaParams {
  cinemaId: string;
}

export interface ICinemaSearchParams {
  isOpen?: boolean;
}

export interface INowShowing {
  _id: string;
  movieId: string;
  cinema: string;
  time: string;
  leftSeats: ISeat[];
  centerSeats: ISeat[];
  rightSeats: ISeat[];
  titleMovie: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAddNowShowingParams {
  movieId: string;
  cinema: string;
  time: string;
  leftSeats: ISeat[];
  centerSeats: ISeat[];
  rightSeats: ISeat[];
  titleMovie: string;
}

export interface ICheckAvailableNowShowingParams {
  cinema: string;
  time: string;
  titleMovie: string;
}

export interface INowShowingDetailsParams {
  data: {
    _id: string;
    movieId: string;
    cinema: string;
    time: string;
    leftSeats: ISeat[];
    centerSeats: ISeat[];
    rightSeats: ISeat[];
    titleMovie: string;
  };
  otherSchedule: INowShowing[];
}
