// import { createStore } from 'redux'
import reducer from './redux/root_reducer'
import { createStore } from '@reduxjs/toolkit'


export const store = createStore(reducer)


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
