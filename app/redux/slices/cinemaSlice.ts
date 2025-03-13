import { ICinema, ICinemaSearchParams } from "@/app/service/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCinemas } from "@/app/service/api";

interface CinemaState {
  cinemas: ICinema[];
}

const initialState: CinemaState = {
  cinemas: [],
};
export const fetchApiCinemas = createAsyncThunk(
  "cinema/fetchApiCinemas", // 🔹 Meaningful action type
  async (params: { isOpen?: boolean }, { rejectWithValue }) => {
    try {
      const response = await getCinemas(params);
      return response.data; // ✅ Assuming response.data contains the cinema list
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch cinemas");
    }
  }
);
const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setCinemas: (state, action: PayloadAction<ICinema[]>) => {
      state.cinemas = action.payload;
    },
    clearCinemas: (state) => {
      state.cinemas = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiCinemas.fulfilled, (state, action) => {
      state.cinemas = action.payload;
    });
  },
});

export const { setCinemas } = cinemaSlice.actions;
export default cinemaSlice.reducer;
