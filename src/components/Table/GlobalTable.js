import { Table } from "antd";
import { useEffect, useState } from "react";
import "./GlobalTable.scss";
import {useSelector, useDispatch} from "react-redux";
import FilterColumns from '../../constant/FilterColumns';
import {setTableItem, setValues} from "../../redux/tabs_reducer";
import {message} from "antd";


const GlobalTable = () => {
    const {currentPage, mainData, tableItem, loading} = useSelector((state) => state?.tabs_reducer);
    const dispatch = useDispatch()

    const columns = currentPage?.columns;
    const filters = currentPage?.filters;
    let filteredColumns = filters ? FilterColumns(filters, columns, mainData) : columns;

    const rowSelection = {
        selectedRowKeys: tableItem.map(row => row.key),
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setTableItem(selectedRows))
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
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
            scroll={currentPage?.scroll ? {...currentPage?.scroll} : {y: 380}}
            pagination={{position: ["bottomCenter"]}}
            rowSelection={{
                type: "checkbox",
                ...rowSelection,
            }}
        />
    );
};

export default GlobalTable;