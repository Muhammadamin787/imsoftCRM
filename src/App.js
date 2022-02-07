import React from "react";
import "antd/dist/antd.css";
import "./universal.scss";
import MainPage from "./pages/main/MainPage";
import Increment from "./Increment";

import {useSelector} from "react-redux"


// let persistor = persistStore(store);


function App() {
    const data = useSelector(state => state)
    
    console.log(data);
    return (
        <>
        <MainPage/>
        <Increment />
        </>
    );
}

export default App;


