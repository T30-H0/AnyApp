import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser} from '../types';

interface AppState {
  user: IUser;
  isLightMode: boolean;
  language: string;
}

const initialState: AppState = {
  user: {},
  isLightMode: true,
  language: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAppMode: (state, action: PayloadAction<boolean>) => {
      state.isLightMode = action.payload;
    },
    setLanguge: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    logout: () => initialState,
  },
});

export const {setUser, setAppMode, setLanguge, logout} = appSlice.actions;
export default appSlice.reducer;
