import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import {BrowserRouter as Router} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={ruRu}>
           <Provider store={store} >
                <Router>
                    <App/>
                </Router>
            </Provider> 
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
