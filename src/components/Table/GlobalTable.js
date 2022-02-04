import { Table, Tag, Space } from "antd";
import React, { useState, useEffect } from "react";
import "./GlobalTable.scss";
import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import FilterColumns from '../../constant/FilterColumns';
const GlobalTable = () => {
  const { currentPage } = useSelector((s) => s.tabs_reducer);
  
  let filteredColumns = [];
  if(currentPage.filters){
    filteredColumns = FilterColumns(currentPage.filters, currentPage.columns, currentPage.data);
  }else{
    filteredColumns = currentPage.columns;
  }
  return (
    <Table
      bordered
      columns={filteredColumns}
      className="main-table"
      dataSource={currentPage?.data}
      size={"small"}
      scroll={currentPage.scroll ? { ...currentPage.scroll } : { y: 380 }}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
};

export default GlobalTable;