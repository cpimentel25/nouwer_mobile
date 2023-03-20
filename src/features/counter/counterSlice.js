import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser } from './callApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  value: 0,
  user: [],
};

export const userLogin = createAsyncThunk('user/login', async (value) => {
  return await loginUser(value);
});

export const counterSlice = createSlice({
  name: 'nouwer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.finish = 'finish';
        const user = action.payload;
        AsyncStorage.setItem('@storage_profile', JSON.stringify(user.profile));
        state.user = user;
      })
  }
});

export default counterSlice.reducer;
