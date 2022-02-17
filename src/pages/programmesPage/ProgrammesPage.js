import { useState } from "react";
import "./programmesPage.scss";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import { Layout } from "antd";
import InnerTable from "../../components/Table/innerTable/InnerTable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage, addNewTab } from "../../redux/tabs_reducer";
import ProgrammesPageChild from "./programmesPageChild/ProgrammesPageChild";

const ProgrammesPage = ({ page }) => {
  const dispatch = useDispatch();

  // dispatch(setCurrentPage(page));
  return (
    <div className="">
      <Layout>
        <ProgrammesPageChild activeKey={page.key} />
      </Layout>
    </div>
  );
};

export default ProgrammesPage;
