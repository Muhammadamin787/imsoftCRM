import { Input, InputNumber, DatePicker, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
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
import { useDispatch } from "react-redux";
import UploadFile from "./UpLoadFile";
import { addValuesData } from "../../redux/tabs_reducer";

const { TextArea } = Input;

const ModalInput = ({
  placeholder,
  name,
  gridRow,
  gridColumn,
  label,
  type,
  option,
  height,
  width,
  Iconic,
}) => {
  let input = null;

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    dispatch(addValuesData(e));
  };

  switch (type) {
    case STRING:
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
        >
          {label && label}
          <Input
            name={name}
            placeholder={placeholder}
            // value={value}
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
          // value={value}
          onChange={(e) => {
            console.log(e);
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
        >
          {label && label}
          <Select
            addonBefore={label}
            size="small"
            name={name}
            placeholder={placeholder}
            required
            // style={{
            //     gridColumn: gridColumn,
            //     gridRow: gridRow,
            //     height: height ? height + "px" : inputDeafultHeght + "px",
            // }}
            // value={value}
            onChange={(e) => {
              const target = {
                [name]: e,
              };
              console.log(target);
              handleChangeValue(target);
            }}
          >
            {option &&
              option?.map((option, i) => (
                <Option value={option.value} key={i}>
                  {option.value}
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
          required
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
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && label}
          <DatePicker
            placeholder={placeholder}
            // style={{
            //     gridColumn: gridColumn,
            //     gridRow: gridRow,
            //     height: height ? height + "px" : inputDeafultHeght + "px",
            // }}
            format="DD.MM.YYYY"
            allowClear={false}
            // defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
            // value={value}
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
            // height: "100%",
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && label}
          <TextArea
            placeholder={placeholder}
            required
            autoSize={{ minRows: 3, maxRows: 3 }}
            // value={value}
            // style={{
            //     gridColumn: gridColumn,
            //     gridRow: gridRow,
            //     height: height ? height + "px" : inputDeafultHeght + "px",
            // }}
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
            // border: "1px solid red",
            // height:"65px !important"
          }}
        >
          {label && label}
          <PhoneInput
            country={"uz"}
            style={{ height: "65px !important" }}
            // style={{
            //     gridColumn: gridColumn,
            //     gridRow: gridRow,
            //     height: height ? height + "px" : inputDeafultHeght + "px",
            // }}
            specialLabel={false}
            disableDropdown={true}
            countryCodeEditable={false}
            required
            areaCodes={{
              uz: ["+998"],
            }}
            masks={{ uz: "(..) ...-..-.." }}
            prefix="+"
            // value={valuess[name] ? values[name] : "+998"}
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
          required
        />
      );
      break;

    case IMAGE:
      input = (
        // <label
        // style={{
        //     gridColumn: gridColumn,
        //     gridRow: gridRow,
        //     height: height ? height + "px !important" : inputDeafultHeght + "px",
        //     // border: "1px solid red",
        // }}
        // className="image-input"
        // >
        <UpLoadJPG
          id="file-uploder"
          name={name}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          Iconic={Iconic}
          required
          label={label}
        />
        // </label>
      );
      break;

    default:
      break;
  }

  return input;
};

export default ModalInput;
