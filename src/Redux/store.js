import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
