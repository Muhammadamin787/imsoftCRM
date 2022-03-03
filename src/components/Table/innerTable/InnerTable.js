import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from "antd";
import { setValues, setValuesKey } from '../../../redux/stored_reducer';
import { useDispatch, useSelector } from 'react-redux';
import "../GlobalTable.scss"


const InnerTable = ({ innerTable }) => {
    const dispatch = useDispatch()
    const { values } = useSelector((state) => state.tabs_reducer);
    const pathname = window.location.pathname


    const addRow = () => {
        dispatch(setValuesKey({ [innerTable?.name]: [innerTable?.CreateObj] }))
        const oldData = [...values?.[innerTable?.name]]
        oldData.push(innerTable?.CreateObj);
        dispatch(setValues({ ...values, [innerTable?.name]: oldData }));
    }

    const styles = {
        height: (pathname == "/programmers/yangi_dasturlar" ? "0px" : "10px")
    }

    return (
        <div className="innerTable">
            <div style={styles}></div>
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