import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

interface AppState {
  user: IUser;
  appMode: string | null;
}

const initialState: AppState = {
  user: {},
  appMode: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAppMode: (state, action: PayloadAction<string>) => {
      state.appMode = action.payload;
    },
  },
});

export const {setUser, setAppMode} = appSlice.actions;
export default appSlice.reducer;
