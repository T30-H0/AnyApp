import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

interface AppState {
  user: IUser;
  isLightMode: boolean;
}

const initialState: AppState = {
  user: {},
  isLightMode: true,
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
  },
});

export const {setUser, setAppMode} = appSlice.actions;
export default appSlice.reducer;
