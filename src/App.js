import "antd/dist/antd.css";
import "./universal.scss";
import { useSelector } from "react-redux";
import MainPage from "./pages/main/MainPage";
import Login from "./pages/login/Login";
import { Route, Routes, Navigate } from "react-router-dom";


function App() {

    const { auth } = useSelector(state => state.tabs_reducer)
    // const auth = true

    if (auth) {
        return <MainPage />
    } else {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }

}

export default App;
