import React from 'react';
import { Table, Form,Button } from "antd";
import Toolbar from '../../ToolsBar/Toolbar/Toolbar'


const InnerTable = ({ innerTable }) => {

    const colT = innerTable.columns.map(col => col.dataIndex);

    console.log(colT);

    return (
        <>
                <Button onClick={() => console.log(innerTable)}>+</Button>
                <Table bordered
                    columns={innerTable.columns}
                    className="inner-table"
                    dataSource={innerTable?.data}
                    size={"small"}
                    scroll={innerTable?.scroll ? { ...innerTable?.scroll } : { y: 380 }}
                    pagination={{ position: ["bottomCenter"] }}
                />
        </>
    );
};

export default InnerTable;