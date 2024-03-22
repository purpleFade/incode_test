import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Species} from '../types/Species';

interface SpeciesState {
  speciesDetails: Species[];
  loading: boolean;
  error: string | null;
}

const initialState: SpeciesState = {
  speciesDetails: [],
  loading: false,
  error: null,
};

export const speciesInit = createAsyncThunk(
  'species/fetchSpecies',
  async (speciesUrls: string[], {rejectWithValue}) => {
    try {
      const speciesData: Species[] = [];
      for (const url of speciesUrls) {
        const response = await axios.get<Species>(url);
        speciesData.push(response.data);
      }
      return speciesData;
    } catch (error) {
      return rejectWithValue('Failed to fetch species');
    }
  },
);

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(speciesInit.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(speciesInit.fulfilled, (state, action) => {
      action.payload.forEach(species => {
        state.speciesDetails.push(species);
      });
      state.loading = false;
    });
    builder.addCase(speciesInit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default speciesSlice.reducer;
