import { useEffect } from "react";
import "antd/dist/antd.css";
import "./universal.scss";
import MainPage from "./pages/main/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { uploadAllData } from "./redux/tabs_reducer";


function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("allData"));
    console.log(data);
    dispatch(uploadAllData(allData));
  }, []);

  window.onbeforeunload = function () {
    const string = JSON.stringify(data);
    localStorage.setItem("allData", string);
  };
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
