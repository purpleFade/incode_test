import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Planet} from '../types/Planet';

type HomeWorldState = {
  homeWorldDetails: Planet[];
  loading: boolean;
  error: string | null;
};

const initialState: HomeWorldState = {
  homeWorldDetails: [],
  loading: false,
  error: null,
};

export const homeWorldInit = createAsyncThunk(
  'homeWorld/fetchHomeWorld',
  async (url: string, {rejectWithValue}) => {
    try {
      const response = await axios.get<Planet>(url);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch home world');
    }
  },
);

const homeWorldSlicer = createSlice({
  name: 'homeWorld',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(homeWorldInit.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(homeWorldInit.fulfilled, (state, action) => {
      state.homeWorldDetails.push(action.payload);
      state.loading = false;
    });
    builder.addCase(homeWorldInit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default homeWorldSlicer.reducer;
