import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // ✅ Ensure correct import

const appStore = configureStore({
  reducer: {
    user: userReducer,  // ✅ Assign reducer properly
  },
});

export default appStore;
