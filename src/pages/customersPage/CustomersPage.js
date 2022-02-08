import { useState } from "react";
import "./customersPage.scss";
import GlobalModal from "../../components/Modal/GlobalModal";
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
const { TabPane } = Tabs;

const CustomersPage = () => {
  const [activeTab, setActiveKey] = useState(0);

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="customers-page">
      <Layout className="layout">
        <Tabs defaultActiveKey={activeTab} onChange={callback} className="customers__tabs">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Layout>
    </div>
  );
};

export default CustomersPage;
