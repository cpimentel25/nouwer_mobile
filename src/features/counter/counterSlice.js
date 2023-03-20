import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchRoster, loginUser } from './callApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  value: 0,
  user: [],
  roster: [],
  currentRoster: [],
};

export const userLogin = createAsyncThunk('user/login', async (value) => {
  return await loginUser(value);
});

export const fetchRoster = createAsyncThunk('roster/fetch', async (value) => {
  return await FetchRoster(value);
})

export const counterSlice = createSlice({
  name: 'nouwer',
  initialState,
  reducers: {
    setCurrentRoster: (state, action) => {
      state.currentRoster = action.payload;
    }
  },
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
        state.user = user.profile;
      })
      .addCase(fetchRoster.fulfilled, (state, action) => {
        state.roster = action.payload;
      })
  }
});

export const { setCurrentRoster } = counterSlice.actions;

export default counterSlice.reducer;
