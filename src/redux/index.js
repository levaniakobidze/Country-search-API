import { configureStore } from "@reduxjs/toolkit";

import countreySlice from "./countreySlice";

const store = configureStore({ reducer: countreySlice.reducer });

export const countryActions = countreySlice.actions;

export default store;
