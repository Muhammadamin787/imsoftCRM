import { configureStore } from '@reduxjs/toolkit';
import tabs_reducer from "./redux/tabs_reducer";
import {useLocalStorage} from "./localS"

export const store = configureStore({
  reducer: {
    tabs_reducer
  },
})

// const s =  useLocalStorage('name', tabs_reducer);

// return <input value={name} onChange={e => setName(e.target.value)} />;



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
