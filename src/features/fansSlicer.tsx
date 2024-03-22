import {createSlice} from '@reduxjs/toolkit';
import {Character} from '../types/Character';

type initialStateType = {
  fans: Character[];
};

const initialState: initialStateType = {
  fans: [],
};

const fansSlicer = createSlice({
  name: 'fans',
  initialState,
  reducers: {
    setFans: (state, action) => {
      state.fans.push(action.payload);
    },
    removeFan: (state, action) => {
      state.fans = state.fans.filter(fan => fan.name !== action.payload.name);
    },
    resetFan: state => {
      state.fans = [];
    }
  },
});

export default fansSlicer.reducer;
export const {setFans, removeFan, resetFan} = fansSlicer.actions;
