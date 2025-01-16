import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlices";
import compeletedSlice from "./compeletedSlice";
import responsiveSlice from "./responsiveSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    compeleted: compeletedSlice,
    responsive: responsiveSlice,
  },
});

export default store;
