import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

interface AppState {
  user: IUser;
}

const initialState: AppState = {
  user: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = appSlice.actions;
export default appSlice.reducer;
