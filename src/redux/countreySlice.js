import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  isInputValid: true,
};

const countreySlice = createSlice({
  name: "country",
  initialState,

  reducers: {
    saveData(state, action) {
      state.data = [action.payload];
    },
    loading(state, action) {
      state.loading = state = action.payload;
    },
    valid(state) {
      state.isInputValid = true;
    },
    inValid(state) {
      state.isInputValid = false;
    },
  },
});

export default countreySlice;
