import { Input, InputNumber, DatePicker, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
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
import moment from "moment";
import MapModal from "./MapModal";
import UpLoadFile from "./UpLoadFile";
import UpLoadJPG from "./UpLoadJPG";
import { addValuesData } from "../../redux/tabs_reducer";
import { useDispatch } from "react-redux";

const { TextArea } = Input;

const ModalInput = ({
  placeholder,
  name,
  gridRow,
  gridColumn,
  type,
  option,
  height,
  width,
  value,
  Iconic,
}) => {
  let input = null;

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    // e.preventDefault();
    console.log(e);
    // dispatch(addValuesData({}))
  };

  switch (type) {
    case STRING:
      input = (
        <Input
          name={name}
          placeholder={placeholder}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          // value={value}
          onChange={(e) => {
            const target = {
              name: e.target.name,
              value: e.target.value,
            };
            handleChangeValue(target);
          }}
        />
      );
      break;

    case NUMBER:
      input = (
        <InputNumber
          type="number"
          name={name}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          placeholder={placeholder}
          showSearch
          // value={value}
          onChange={(data) => {
            const e = {
              name: data,
            };

            console.log(e);
            handleChangeValue(e);
          }}
        />
      );
      break;

    case SELECT:
      input = (
        <Select
          size="small"
          name={name}
          placeholder={placeholder}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          // value={value}
          onChange={(data) => {
            const e = {
              name: data,
            };

            handleChangeValue(e);
          }}
        >
          {option &&
            option?.map((option) => (
              <Option value={option?.value} key={option?.key}>
                {option.value}
              </Option>
            ))}
        </Select>
      );
      break;

    case MAP:
      input = (
        <MapModal
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          name={name}
          // value={value}
          handleChangeValue={handleChangeValue}
        />
      );
      break;
    case DATE:
      input = (
        <DatePicker
          placeholder={placeholder}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          format="DD.MM.YYYY"
          allowClear={false}
          // defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
          // value={value}
          onChange={(_, dateString) => {
            const e = {
              name: dateString,
            };
            handleChangeValue(e);
          }}

          // showTime
          // value={
          //   values[name]
          //     ? moment(values[name])
          //     : secondDate
          //     ? moment().set("hour", 23).set("minute", 59)
          //     : moment().set("hour", 0).set("minute", 1)
          // }
          // locale={locale}
          // onChange={(v) => {
          //   const e = {
          //     target: {
          //       name: name,
          //       value: moment(v).format("YYYY-MM-DD HH:mm:ss"),
          //     },
          //   };

          //   onChange(e);
          // }}
        />
      );
      break;

    case TEXTAREA:
      input = (
        <TextArea
          placeholder={placeholder}
          autoSize={{ minRows: 3, maxRows: 3 }}
          // value={value}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          onChange={(data) => {
            const e = {
              name: data,
            };
            handleChangeValue(e);
          }}
        />
      );
      break;

    case PHONE:
      input = (
        <PhoneInput
          country={"uz"}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          specialLabel={false}
          disableDropdown={true}
          countryCodeEditable={false}
          areaCodes={{
            uz: ["+998"],
          }}
          masks={{ uz: "(..) ...-..-.." }}
          prefix="+"
          // value={valuess[name] ? values[name] : "+998"}
          onChange={(data) => {
            const e = {
              name: data,
            };
            handleChangeValue(e);
          }}
        />
      );
      break;

    case UPLOAD:
      input = (
        <UpLoadFile
          id="file-uploder"
          name={name}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          Iconic={Iconic}
          // value={value}
          onChange={(data) => {
            const e = {
              name: data,
            };
            handleChangeValue(e);
          }}
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
          // value={value}
          onChange={(data) => {
            const e = {
              name: data,
            };
            handleChangeValue(e);
          }}
        />
      );
      break;

    default:
      break;
  }

  return input;
};

export default ModalInput;
