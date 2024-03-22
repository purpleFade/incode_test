import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import swapiReducer from '../features/swapiSlicer';
import speciesReducer from '../features/speciesSlicer';
import homeWorldReducer from '../features/homeWorldSlicer';
import fansReducer from '../features/fansSlicer';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    species: speciesReducer,
    homeWorld: homeWorldReducer,
    fans: fansReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
