import { configureStore } from '@reduxjs/toolkit';
import tabs_reducer from "./redux/tabs_reducer";

export const store = configureStore({
  reducer: {
    tabs_reducer
  },
})
