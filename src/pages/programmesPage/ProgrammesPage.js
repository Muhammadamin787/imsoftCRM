import { useState } from "react";
import "./programmesPage.scss";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import { Layout } from "antd";
import InnerTable from "../../components/Table/innerTable/InnerTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  addNewTab,
  setValues,
} from "../../redux/stored_reducer";
import ProgrammesPageChild from "./programmesPageChild/ProgrammesPageChild";

const ProgrammesPage = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Layout>
        <ProgrammesPageChild activeKey={page.key} />
      </Layout>
    </div>
  );
};

export default ProgrammesPage;
