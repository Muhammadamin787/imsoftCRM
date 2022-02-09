import { useState } from "react";
import "./customersPage.scss";
import { AllCustomerChildPages } from "../../Templates/pageTemplates/index";
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { PageController } from "../PageController";

const { TabPane } = Tabs;
const CustomersPage = () => {
  const [activeTab, setActiveKey] = useState(0);

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="customers-page">
      <Layout className="layout">
        <Tabs
          defaultActiveKey={activeTab}
          onChange={callback}
          className="customers__tabs"
        >
          {AllCustomerChildPages.map((item, i) => (
            <TabPane
              tab={<Link to={item.path}>{item.text}</Link>}
              key={i}
            >
              {console.log(item.type)}
            </TabPane>
          ))}

          <Routes>
            {AllCustomerChildPages.map((item, i) => (
              <>
                <Route path={item.path} element={<PageController page={item}/>} key={i}/>
              </>
            ))}
          </Routes>
        </Tabs>
      </Layout>
    </div>
  );
};

export default CustomersPage;
