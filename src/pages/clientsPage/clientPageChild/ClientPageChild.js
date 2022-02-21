import {useEffect, useState} from 'react';
import "../clientsPage.scss";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import GlobalTable from "../../../components/Table/GlobalTable";
import ClientTemplate from "../../../Templates/pageTemplates/ClientTemplate";
import { setCurrentPage, addNewTab } from "../../../redux/tabs_reducer";

const { TabPane } = Tabs;

const ClientPageChild = ({ activeKey }) => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState(0);
  const { tableItem } = useSelector((s) => s.tabs_reducer);

  const handleTab = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(addNewTab(page));
  };

  useEffect(() => {
    const dad = document.getElementById('my__layout');
    setHeight(parseInt(dad.getBoundingClientRect().height));
  }, []);

  return (
    <>
      <Toolbar tableItem={tableItem} />
      <div className="my__layout_child" style={{height: height-70+"px"}}>
        <Tabs defaultActiveKey={activeKey} style={{padding: "0 20px"}}>
          {ClientTemplate?.tabs?.map((item) => (
            <TabPane
              key={item.key}
              tab={
                <Link to={item.path} onClick={() => handleTab(item)}>
                  {item.text}
                </Link>
              }
            />
          ))}
        </Tabs>
        <GlobalTable />
      </div>
    </>
  );
};
export default ClientPageChild;
