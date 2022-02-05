import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
          <PersistGate loading={"... loading"} persistor={persistor}>
            <Router>
              <App />
            </Router>
          </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
