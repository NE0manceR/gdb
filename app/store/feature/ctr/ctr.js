"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 100,
};

export const ctrSlice = createSlice({
  name: "ctr",
  initialState,
  reducers: {
    plus: (state) => {
      state.number += 1;
    },
    minus: (state) => {
      state.number -= 1;
    },

    costum: function (state, action) {
        console.log(action);
        return { ...state, number: state.number + action.payload }
    },
  },
});

export const { plus, minus, costum } = ctrSlice.actions;

export default ctrSlice.reducer;
