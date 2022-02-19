import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from "antd";
import Toolbar from '../../ToolsBar/Toolbar/Toolbar'
import { setValues } from '../../../redux/tabs_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

const InnerTable = ({ innerTable }) => {
    const dispatch = useDispatch()
    const { values } = useSelector((state) => state.tabs_reducer);
    // const [objKey, setObjKey] = useState({})
    // useEffect(() => {
    //     const colT = innerTable.columns.map(col => setObjKey({col}));

    // })

    // console.log(innerTable);
    
    const addRow = () => {
        let oldData = [...values?.dev_docs] || [];
        console.log("ishla");
        oldData.push({
            rowId: uuidv4(),
            number: '',
            name: '',
            comment: '',
            file: '',
            
        });
        
        dispatch(setValues({ ...values, dev_docs: oldData }));        
    }

    // useEffect(() =>{
    //     addRow()
    // }, [innerTable])

    return (
        <>
            <Button onClick={addRow}>+</Button>
            <Table bordered
                columns={innerTable?.columns}
                className="inner-table"
                dataSource={values?.dev_docs || []}
                size={"small"}
                scroll={innerTable?.scroll ? { ...innerTable?.scroll } : { y: 380 }}
                pagination={{ position: ["bottomCenter"] }}
            />
        </>
    );
};

export default InnerTable;