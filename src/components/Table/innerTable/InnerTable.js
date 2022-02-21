import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from "antd";
import Toolbar from '../../ToolsBar/Toolbar/Toolbar'
import { setValues, setValuesKey } from '../../../redux/tabs_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

const InnerTable = ({ innerTable }) => {
    const dispatch = useDispatch()
    const { values } = useSelector((state) => state.tabs_reducer);

    // })


    const addRow = () => {

        dispatch(setValuesKey({[innerTable?.name]:[]}))


        const oldData = [...values?.[innerTable?.name]]


        oldData.push({
            rowId: uuidv4(),
            number: '',
            name: '',
            comment: '',
            file: '',
        });
        
        dispatch(setValues({ ...values, [innerTable?.name]: oldData }));
    }



    return (
        <>
            <Button onClick={addRow}>+</Button>
            <Table bordered
                columns={innerTable?.columns}
                className="inner-table"
                dataSource={values?.[innerTable?.name] || []}
                size={"small"}
                scroll={innerTable?.scroll ? { ...innerTable?.scroll } : { y: 380 }}
                pagination={{ position: ["bottomCenter"] }}
            />
        </>
    );
};

export default InnerTable;