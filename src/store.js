// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';


// const reducers = combineReducers({
  //     tabs_reducer: tabs_reducer,
  //   });
  
//   const persistConfig = {
  //       key: 'root',
  //       storage,
  //       whitelist:["tabs_reducer"]
  // };
  
  // const persistedReducer = persistReducer(persistConfig, reducers);
  
// const store = configureStore({
  //     reducer: persistedReducer,
  //   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

// export default store;












// const store = configureStore({
  //   reducer: {
    //     tabs_reducer
    //   },
// })

// export default store;

import tabs_reducer from "./redux/tabs_reducer";


import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import nimadurReducer from "./redux/nimadurReducer"

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
  // whiteList: ["nimadurReducer"],
  // blacklist:["nimadurReducer"]
};

const reducers = combineReducers({
  count: nimadurReducer,
  tabs_reducer: tabs_reducer
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});


// console.log(store);

