import { configureStore } from '@reduxjs/toolkit';
import toolkit_test from "./redux/toolket_test";
import tabs_reducer from "./redux/tabs_reducer";

export const store = configureStore({
  reducer: {
    toolkit_test,
    tabs_reducer
  },
})
