import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const countreySlice = createSlice({
  name: "country",
  initialState,

  reducers: {
    saveData(state, action) {
      state.data = [action.payload];
    },
  },
});

export default countreySlice;
