import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    search:searchSlice
  },
});

export default store;
