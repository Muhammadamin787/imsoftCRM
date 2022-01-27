import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/root_reducer'

export const store = configureStore({
  reducer: rootReducer,
})