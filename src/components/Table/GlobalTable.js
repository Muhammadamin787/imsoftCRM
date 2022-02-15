import { Table} from "antd";
import React from "react";
import "./GlobalTable.scss";
import { useSelector, useDispatch } from "react-redux";
import FilterColumns from '../../constant/FilterColumns';
import {setTableItem} from "../../redux/tabs_reducer"


const GlobalTable = () => {
  const {currentPage, mainData, loading} = useSelector((state) => state?.tabs_reducer);

  const dispatch = useDispatch()

  let filteredColumns = [];
  if(currentPage?.filters){
    filteredColumns = FilterColumns(currentPage?.filters, currentPage?.columns, currentPage?.data);
  }else{
    filteredColumns = currentPage?.columns;
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setTableItem(selectedRows))
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
    


  return (
      <Table
          bordered
          loading={loading}
          columns={filteredColumns}
          className="main-table"
          dataSource={mainData}
          size={"small"}
          scroll={currentPage?.scroll ? { ...currentPage?.scroll } : { y: 380 }}
          pagination={{ position: ["bottomCenter"] }}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
        />
  );
};

export default GlobalTable;