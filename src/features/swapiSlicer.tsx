import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {Character} from '../types/Character';

type SwapiState = {
  totalItems: number;
  next: string | null;
  previous: string | null;
  results: Character[];
  loading: boolean;
  error: string | null;
  currentPage: number;
};

const initialState: SwapiState = {
  totalItems: 0,
  next: null,
  previous: null,
  results: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export const swapiInit = createAsyncThunk(
  'swapi/swapiInit',
  async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
);

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    nextPage: state => {
      if (state.next) {
        state.currentPage += 1;
        swapiInit(state.next);
      }
    },
    previousPage: state => {
      if (state.previous) {
        state.currentPage -= 1;
        swapiInit(state.previous);
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(swapiInit.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(swapiInit.fulfilled, (state, action) => {
      state.loading = false;
      state.totalItems = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
    });
    builder.addCase(swapiInit.rejected, state => {
      state.loading = false;
      state.error = 'Error fetching data';
    });
  },
});

export const {nextPage, previousPage, setCurrentPage} = swapiSlice.actions;

export default swapiSlice.reducer;
