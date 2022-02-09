import { useState } from "react";
import "./customersPage.scss";
import GlobalModal from "../../components/Modal/GlobalModal";
import { PageController } from "../PageController";
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import ClientTabTemplate from "../../Templates/pageTemplates/ClientTemplate";

const { TabPane } = Tabs;

const ClinetsPage = ({ page }) => {
  const [activeTab, setActiveKey] = useState(0);

  function callback(key) {
    // console.log(key);
  }

  console.log(ClientTabTemplate);
  console.log(page.modalTabs.map(el => el));

  return (
    <div className="">
      <Toolbar currentPage={page} />
      {/* {page.map(item => {
        console.log(item);
        // <Tabs  >{item.modalTabs.tetx}</Tabs>
      })} */}
      <Tabs
        defaultActiveKey={activeTab}
        onChange={callback}
        className="customers__tabs"
      ></Tabs>
      {ClientTabTemplate?.tabs?.map((item) => (
        <Link to={item.path}>{item.text}</Link>
      ))}
    </div>
  );
};

export default ClinetsPage;
