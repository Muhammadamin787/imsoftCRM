import { Table, Tag, Space ,Radio, Divider} from "antd";
import React, { useState, useEffect } from "react";
import "./GlobalTable.scss";
import { useSelector, useDispatch } from "react-redux";
import FilterColumns from '../../constant/FilterColumns';
import {setTableItem, editTableItem} from "../../redux/tabs_reducer"


const GlobalTable = () => {
  const { currentPage } = useSelector((state) => state?.tabs_reducer);

  const dispatch = useDispatch()

  
  let filteredColumns = [];
  if(currentPage?.filters){
    filteredColumns = FilterColumns(currentPage?.filters, currentPage?.columns, currentPage?.data);
  }else{
    filteredColumns = currentPage?.columns;
  }


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setTableItem(selectedRows[0]))
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
    


  return (
    <>



        <Table
          bordered
          columns={filteredColumns}
          className="main-table"
          dataSource={currentPage?.data}
          size={"small"}
          scroll={currentPage?.scroll ? { ...currentPage?.scroll } : { y: 380 }}
          pagination={{ position: ["bottomCenter"] }}
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
        />
      </>
  );
};

export default GlobalTable;