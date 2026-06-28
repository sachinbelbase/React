import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authStore";

const store = configureStore({
  reducer: {
         auth: authSlice.reducer
  }
});

export default store;