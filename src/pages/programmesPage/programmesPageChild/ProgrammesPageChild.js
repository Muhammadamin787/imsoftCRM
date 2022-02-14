import React from "react";
import ProgrammsTemplate from "../../../Templates/pageTemplates/ProgrammesTemplate";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";
import { useDispatch } from "react-redux";
import GlobalTable from "../../../components/Table/GlobalTable";
import { setCurrentPage, addNewTab } from "../../../redux/tabs_reducer";

const { TabPane } = Tabs;

const ProgrammesPageChild = ({ activeKey }) => {
  const dispatch = useDispatch();

  const handleTab = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(addNewTab(page));
  };
  return (
    <div>
      <Toolbar currentPage="Mijozlar Ro'yhati" />
      <Tabs defaultActiveKey={activeKey}>
        {ProgrammsTemplate?.tabs?.map((item) => (
          <TabPane
            tab={
              <Link to={item.path} onClick={() => handleTab(item)}>
                {item.text}
              </Link>
            }
            key={item.key}
          ></TabPane>
        ))}
      </Tabs>
      <GlobalTable />
    </div>
  );
};

export default ProgrammesPageChild;
