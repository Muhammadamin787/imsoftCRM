import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { Option } from "antd/lib/mentions";
import React,{ useState} from "react";
// import PhoneInput from "react-phone-input-2";

// import ImageUpload from "./ImageUpload";
import {
  DATE,
  IMAGE,
  MAP,
  NUMBER,
  PHONE,
  RADIO,
  SELECT,
  STRING,
} from "./ModalInputTypes";

import "moment/locale/ru";



const ModalInput = ({ type,label,name }) => {
  let input = null;
  

  switch (type) {
    case STRING:
      input = (
        <Input
          name={name}
          value={""}
        />
      );
      break;
    case NUMBER:
      input = (
        <InputNumber
          type="number"
        />
      );
      break;
    case SELECT:
      input = (
        <Select
          value={""}
          placeholder={label + "ни танланг"}
          size="small"
        >
                <Option value={"hi"}>
                  option
                </Option>
        </Select>
      );
      break;

    default:
      break;
  }

  return input;
  
};

export default ModalInput;
