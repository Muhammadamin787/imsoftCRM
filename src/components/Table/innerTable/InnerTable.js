import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from "antd";
import Toolbar from '../../ToolsBar/Toolbar/Toolbar'
import { setValues, setValuesKey } from '../../../redux/stored_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { findIcon } from "../../../assets/icons/icons"
import { PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import "../GlobalTable.scss"

const InnerTable = ({ innerTable }) => {
    const dispatch = useDispatch()
    const { values } = useSelector((state) => state.tabs_reducer);


    const addRow = () => {
        dispatch(setValuesKey({ [innerTable?.name]: [innerTable?.CreateObj] }));
        const oldData = [...values?.[innerTable?.name]];
        oldData.push(innerTable?.CreateObj);
        dispatch(setValues({ ...values, [innerTable?.name]: oldData }));
    }

// console.log(values?.[innerTable?.name]);

    return (
        <div className="innerTable">
            <Button className="tab-add__input" onClick={addRow}><span>+</span></Button>
            <div className="innerTable-row">

                <Table
                    bordered
                    columns={innerTable?.columns}
                    className="inner-table"
                    dataSource={values?.[innerTable?.name] || []}
                    size={"small"}
                    scroll={innerTable?.scroll ? { ...innerTable?.scroll } : { y: 380 }}
                // pagination={{ position: ["bottomCenter"] }}  
                />
            </div>
        </div>
    );
};

export default InnerTable;