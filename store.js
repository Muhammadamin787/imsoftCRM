import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './src/redux/root_reducer'

export const store = configureStore({
  reducer: rootReducer,
})