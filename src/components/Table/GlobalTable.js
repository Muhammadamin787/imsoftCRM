import { Table } from "antd";
import { useEffect, useState } from "react";
import "./GlobalTable.scss";
import { useSelector, useDispatch } from "react-redux";
import FilterColumns from "../../constant/FilterColumns";
import { setTableItem } from "../../redux/tabs_reducer";

const GlobalTable = () => {
  const [newColumns, setNewColumns] = useState([]);
  const {
    currentPage,
    tableItem,
    mainData,
    loading,
    filteredMainData,
    serachInputValue,
  } = useSelector((state) => state?.tabs_reducer);
  const dispatch = useDispatch();
  const { filters, columns } = currentPage;

  const rowSelection = {
    selectedRowKeys: tableItem.map((row) => row.key),
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setTableItem(selectedRows));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  function filterAdd() {
    let filteredColumns = [];
    if (filters) {
      filteredColumns = FilterColumns(filters, columns, mainData);
    } else {
      filteredColumns = columns;
    }
    setNewColumns(filteredColumns);
  }

  useEffect(() => {
    filterAdd();
  }, [currentPage, mainData]);

  return (
    <Table
      bordered
      loading={loading}
      columns={newColumns}
      className="main-table"
      dataSource={serachInputValue ? filteredMainData : mainData}
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
