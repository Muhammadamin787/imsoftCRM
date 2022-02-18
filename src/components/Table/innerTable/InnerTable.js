import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from "antd";
import Toolbar from '../../ToolsBar/Toolbar/Toolbar'
import { setValues } from '../../../redux/tabs_reducer';
import { useDispatch, useSelector } from 'react-redux';


const InnerTable = ({ innerTable }) => {
    const dispatch = useDispatch()

    // const [objKey, setObjKey] = useState({})
    // useEffect(() => {
    //     const colT = innerTable.columns.map(col => setObjKey({col}));

    // })


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