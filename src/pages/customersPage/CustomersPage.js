import { useState } from "react";
import "./customersPage.scss";
import GlobalModal from "../../components/Modal/GlobalModal";
<<<<<<< HEAD
=======
import { AllCustomerChildPages } from "../../Templates/pageTemplates/index";
>>>>>>> a4325fc79dcbfde6b96ad1a2d0dedf26086c9f6c
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import CustomersTemplate from "../../all Templates/pageTemplates/CustomersTemplate";
const { TabPane } = Tabs;

const CustomersPage = ({ page }) => {
  const [activeTab, setActiveKey] = useState(0);

  function callback(key) {
    // console.log(key);
  }

  console.log(CustomersTemplate);

  return (
    <div className="">
      <Toolbar currentPage={page} />
      <Tabs
        defaultActiveKey={activeTab}
        onChange={callback}
        className="customers__tabs"
      ></Tabs>
      <Routes>
        {CustomersTemplate.map((item) => (
          <Route path={} />
        ))}
      </Routes>
    </div>
  );
};

export default CustomersPage;
