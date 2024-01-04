import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: { display: true },
  reducers: {
    setDisplay: (state, { payload }) => {
      state.display = payload;
    },
  },
});

export const { setDisplay } = navbarSlice.actions;
