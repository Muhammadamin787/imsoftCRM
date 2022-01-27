// import { createStore } from 'redux'
import reducer from './src/redux/root_reducer'
import { createStore } from '@reduxjs/toolkit'


export const store = createStore(reducer)


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
