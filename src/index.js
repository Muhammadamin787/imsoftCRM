import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";

// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
        <Router>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
          {/* </PersistGate> */}
        </Router>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

