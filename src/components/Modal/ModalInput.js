import { Input, InputNumber, DatePicker, Select, message } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "./GlobalModal.scss";
import {
  DATE,
  IMAGE,
  MAP,
  NUMBER,
  TEXTAREA,
  PHONE,
  SELECT,
  STRING,
  UPLOAD,
} from "./InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import "moment/locale/ru";
import MapModal from "./MapModal";
import UpLoadJPG from "./UpLoadJPG";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "./UpLoadFile";
import { setValues, setInnerModel, toggleModal, toggleInnerModal, setAllData } from "../../redux/tabs_reducer"
import axios from "../../functions/axios"
import { findIcon } from "../../assets/icons/icons";


const { TextArea } = Input;

const ModalInput = ({
  placeholder,
  name,
  gridRow,
  gridColumn,
  label,
  type,
  height,
  Iconic,
  options,
  template,
  dontPost
}) => {
  let input = null;
  const dispatch = useDispatch();
  const { currentPage, values, allData } = useSelector((state) => state.tabs_reducer);

  const handleChangeValue = (e) => {

    dispatch(setValues({ ...values, ...e }));
  };

  const handleSelectAdd = (template) => {
    dispatch(setInnerModel(template))
    dispatch(toggleInnerModal(true))
    // console.log(template);
  }


  switch (type) {
    case STRING:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && label}
          <Input
            name={name}
            value={values && values[name]}
            placeholder={placeholder}
            required={true}
            onChange={(e) => {
              const target = {
                [name]: e.target.value,
              };
              handleChangeValue(target);
            }}
          />
        </label>
      );
      break;

    case NUMBER:
      input = (
        <InputNumber
          addonBefore={label}
          type="number"
          name={name}
          required
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            display: "flex",
            flexDirection: "column",
          }}
          placeholder={placeholder}
          showSearch
          onChange={(e) => {
            const target = {
              [name]: e,
            };

            handleChangeValue(target);
          }}
        />
      );
      break;

    case SELECT:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
          className="select-label"
        >
          {label && label}
          <div className="option-add" onClick={() => handleSelectAdd(template)}>{findIcon("Plus")}</div>
          <Select
            size="small"
            name={name}
            placeholder={placeholder}
            required
            onChange={(e) => {
              const target = {
                [name]: e,
              };
              console.log(e);
              let currentData = currentPage?.allData;

              for (const url in currentData) {
                let res = axios(`${currentData[url]}/${e}`)

                res.then(res => {
                  console.log(res.data.data);
                  dispatch(setAllData({ [url] : res.data.data }))

                  // dispatch(setAllData({ name:url, data:res.data.data }))

                  // {
                  //   name:url,
                  //   [url]:res.data.data
                  // }

                  // allData:{
                  //   cities:[
                  //     {id:"123", name:"viloyatga tegishli shaxat"}
                  //   ]
                  // }

                });
              }


              handleChangeValue(target);

            }}
          >
            {allData && allData[options]?.map((option, i) => (
              <Option value={option.id} key={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>
        </label>
      );
      break;

    case MAP:
      input = (
        <MapModal
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          name={name}
          handleChangeValue={handleChangeValue}
        />
      );
      break;

    case DATE:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && label}
          <DatePicker
            placeholder={placeholder}
            format="DD.MM.YYYY"
            allowClear={false}
            // defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
            required
            onChange={(_, dateString) => {
              const target = {
                [name]: dateString,
              };
              handleChangeValue(target);
            }}
          />
        </label>
      );
      break;

    case TEXTAREA:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && label}
          <TextArea
            placeholder={placeholder}
            required
            autoSize={{ minRows: 3, maxRows: 3 }}
            onChange={(data) => {
              const target = {
                [name]: data.target.value,
              };

              handleChangeValue(target);
            }}
          />
        </label>
      );
      break;

    case PHONE:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
        >
          {label && label}
          <PhoneInput
            country={"uz"}
            style={{ height: "65px !important" }}
            specialLabel={false}
            disableDropdown={true}
            countryCodeEditable={false}
            required
            areaCodes={{
              uz: ["+998"],
            }}
            masks={{ uz: "(..) ...-..-.." }}
            prefix="+"
            onChange={(data) => {
              const target = {
                [name]: data,
              };
              handleChangeValue(target);
            }}
          />
        </label>
      );
      break;

    case UPLOAD:
      input = (
        <UploadFile
          id="file-uploder"
          name={name}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          Iconic={Iconic}
          label={label}
        />
      );
      break;

    case IMAGE:
      input = (
        <UpLoadJPG
          id="file-uploder"
          name={name}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          Iconic={Iconic}
          label={label}
        />
      );
      break;

    default:
      break;
  }

  return input;
};

export default ModalInput;
