import { Input, InputNumber, DatePicker, Select, Upload } from "antd";
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
import UpLoadFile from "./UpLoadFile";
import { useDispatch } from "react-redux";
import AvatarUpload from "./AvatarUpload";

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
    console.log({[e.name]: e.value});
    const setInputData = {
      [e.name]: e.value,
    };
  };
  switch (type) {
    case STRING:
      input = (
        <Input
          className="modal_input"
          name={name}
          placeholder={placeholder}
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
          className="modal_input"
          name={name}
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

    case SELECT:
      input = (
        <Select
          className="modal_input"
          name={name}
          onChange={(e) => {
            const target = {
              name: e.target.name,
              value: e.target.value,
            };
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
          name={name}
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

    case DATE:
      input = (
        <DatePicker
          format="DD.MM.YYYY"
          className="modal_input"
          name={name}
          onChange={(e) => {
            const target = {
              name: e.target.name,
              value: e.target.value,
            };

            console.log(e);
            // handleChangeValue(target);
          }}
        />
      );
      break;

    case TEXTAREA:
      input = (
        <TextArea
          autoSize={{ minRows: 3, maxRows: 3 }}
          name={name}
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

    case PHONE:
      input = (
        <PhoneInput
          country={"uz"}
          specialLabel={false}
          disableDropdown={true}
          countryCodeEditable={false}
          areaCodes={{
            uz: ["+998"],
          }}
          masks={{ uz: "(..) ...-..-.." }}
          prefix="+"
          className="phone_input"
          name={name}
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

    case UPLOAD:
      input = (
        <label>
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
          <AvatarUpload
            id="file-uploder"
            name={name}
            placeholder={placeholder}
            gridColumn={gridColumn}
            gridRow={gridRow}
            height={height}
            Iconic={Iconic}
          />
        </label>
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
        />
      );
      break;

    default:
      break;
  }

  return input;
};

export default ModalInput;
