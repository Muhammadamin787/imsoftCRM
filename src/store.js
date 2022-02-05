import { configureStore } from '@reduxjs/toolkit';
import tabs_reducer from "./redux/tabs_reducer";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    tabs_reducer: tabs_reducer,
  });
  
  const persistConfig = {
      key: 'root',
      storage,
      whitelist:["tabs"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;












// const store = configureStore({
//   reducer: {
//     tabs_reducer
//   },
// })