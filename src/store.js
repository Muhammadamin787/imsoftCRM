import { configureStore } from '@reduxjs/toolkit';
import tabs_reducer from "./redux/tabs_reducer";

export const store = configureStore({
  reducer: {
    tabs_reducer
  },
})



// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// // import tabs_reducer from '../features/counter/counterSlice';

// const reducers = combineReducers({
//   tabs_reducer: tabs_reducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

// export default store;
