import React from "react";
import "antd/dist/antd.css";
import "./universal.scss";
import MainPage from "./pages/main/MainPage";

function App() {
    return (
        <MainPage/>
        // <Routes>
        //     <Route path="/" element={<MainPage/>}/>
        // </Routes>
    );
}

export default App;
