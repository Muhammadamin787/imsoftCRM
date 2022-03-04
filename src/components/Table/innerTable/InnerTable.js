import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "antd";
import { setValues, setValuesKey } from '../../../redux/stored_reducer';
import { useDispatch, useSelector } from 'react-redux';
import "../GlobalTable.scss"


const InnerTable = ({ innerTable }) => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.tabs_reducer);

  const addRow = () => {
    dispatch(setValuesKey({ [innerTable?.name]: [innerTable?.CreateObj] }));
    const oldData = [...values?.[innerTable?.name]];
    oldData.push(innerTable?.CreateObj);

    dispatch(setValues({ ...values, [innerTable?.name]: oldData }));
  

  return (
    <div className="innerTable">
      <button
        style={{ margin: "10px 0" }}
        className="tab-add__input"
        onClick={addRow}
        type="button"
      >
        <span>+</span>
      </button>
      <div className="innerTable-row">
        <Table
          bordered
          columns={innerTable?.columns ? innerTable?.columns : []}
          className="inner-table"
          dataSource={values?.[innerTable?.name]}
          size={"small"}
          scroll={innerTable?.scroll ? { ...innerTable?.scroll } : { y: 380 }}
          // pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default InnerTable;
