import { IMovies } from "@/app/service/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movie: IMovies | {};
}

const initialState: MovieState = {
  movie: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<IMovies>) => {
      state.movie = action.payload;
    },
    clearMovie: (state) => {
      state.movie = {};
    },
  },
});

export const { setMovie, clearMovie } = movieSlice.actions;
export default movieSlice.reducer;
