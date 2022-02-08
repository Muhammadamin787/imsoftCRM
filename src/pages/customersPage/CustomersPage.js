import { useState } from "react";
import "./customersPage.scss";
import GlobalModal from "../../components/Modal/GlobalModal";
import clientPageRoute from "../../all Templates/ClientTemlates/index";
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
import {Link, Route} from 'react-router-dom';
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
          {clientPageRoute.map((item, i) => (
            <TabPane tab={
						<Link to={item.path}>{item.text}</Link>
						} key="1">
            </TabPane>
          ))}
        </Tabs>
		{/* {clientPageRoute.map((item, i) => (
			<Route
				path={sub.path}
				element={<PageController page={sub} key={sub?.path} />}
		  />
		))} */}
      </Layout>
    </div>
  );
};

export default CustomersPage;
