import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";



export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setToken:(state, { payload }) => {
      state.token = payload;
    }
  },
});

export const {
  setUser,
  setToken
} = counterSlice.actions;

export default counterSlice.reducer;
