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
import "./GlobalModal.scss"
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
import {inputDeafultHeght} from "../../constant/deafultStyle"
import "moment/locale/ru";
import {YMaps,Map,Placemark} from "react-yandex-maps"


const ModalInput = ({ placeholder,name, gridRow, gridColumn,type, option,height}) => {
  let input = null;


  switch (type) {
    case STRING:
      input = (
        <Input 
          name={name}
          placeholder={placeholder}
          style={{gridColumn:gridColumn, gridRow:gridRow ,height: height ? height+"px" : inputDeafultHeght+"px" }}

        />
      );
      break;
    case NUMBER:
      input = (
        <InputNumber
          type="number"
          name={name}
          style={{gridColumn:gridColumn, gridRow:gridRow ,height: height ? height+"px" : inputDeafultHeght+"px" }}
          placeholder={placeholder}
        />
      );
      break;
    case SELECT:
      input = (
        <Select
        size="small"
        name={name}
        placeholder={placeholder + "ni tanlang"}
        style={{gridColumn:gridColumn, gridRow:gridRow ,height: height ? height+"px" : inputDeafultHeght+"px" }}
        >{
          option && option?.map(option =>
            <Option value={option.value} key={option.key}> {option.value}</Option>
          )
        }
        </Select>
      );
      break;
      case MAP:
        input = (
          
            <YMaps height={height+"px"}>
            <Map defaultState={{ center: [38.838334, 65.795188], zoom: 9 }} width={"100%"} height={"100%"} style={{border: "1px solid red"}}>
              <Placemark defaultGeometry={[38.838334, 65.795188]} />
            </Map>
            </YMaps>
        );
        break;

    default:
      break;
  }

  return input;
  
};

export default ModalInput;
