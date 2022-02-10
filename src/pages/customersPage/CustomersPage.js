import { useState, useEffect } from "react";
import "./customersPage.scss";
import GlobalModal from "../../components/Modal/GlobalModal";
import { PageController } from "../../pages/PageController";
/* ------------------------------ module import ----------------------------- */
import { Layout, Tabs } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import CustomersTemplate from "../../Templates/pageTemplates/CustomersTemplate";
import {useSelector, useDispatch} from 'react-redux';
import GlobalTable from "../../components/Table/GlobalTable";
import {setCurrentPage, addNewTab} from '../../redux/tabs_reducer';

const { TabPane } = Tabs;

const CustomersPage = ({ page, activeKey }) => {
  const currentPage = useSelector(s => s.tabs_reducer.currentPage);
  const dispatch = useDispatch();
  const handleTab = (page) =>{
    dispatch(setCurrentPage(page));
    dispatch(addNewTab(page));
  }

  return (
    <div className="">
      <Toolbar currentPage="Mijozlar Ro'yhati" />
      <Tabs
        defaultActiveKey={activeKey}
        className="customers__tabs"
      >  
        {CustomersTemplate?.tabs?.map((item) => (
          <TabPane tab={
            <Link to={item.path} onClick={() => handleTab(item)}>{item.text}</Link>
          } key={item.key}>

          </TabPane>
        ))}
      </Tabs>
      <GlobalTable />
    </div>
  );
};

export default CustomersPage;
