import { Table} from "antd";
import {useEffect} from "react";
import "./GlobalTable.scss";
import { useSelector, useDispatch } from "react-redux";
import FilterColumns from '../../constant/FilterColumns';
import {setTableItem} from "../../redux/tabs_reducer";
import { message } from "antd";


const GlobalTable = () => {
  const {currentPage, mainData, loading} = useSelector((state) => state?.tabs_reducer);

  // console.log(mainData);

  const dispatch = useDispatch()

  let filteredColumns = [];
  if(currentPage?.filters){
    filteredColumns = FilterColumns(currentPage?.filters, currentPage?.columns, mainData);
  }else{
    filteredColumns = currentPage?.columns;
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setTableItem(selectedRows))
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };
    // const filteredData = mainData.filter();
  return (
      <Table
          bordered
          loading={loading}
          columns={filteredColumns}
          className="main-table"
          dataSource={[]}
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