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
                <Option value={""}>
                  option
                </Option>
        </Select>
      );
      break;
    // case PHONE:
    //   input = (
    //     <PhoneInput
    //       country={"uz"}
    //       specialLabel={false}
    //       disableDropdown={true}
    //       countryCodeEditable={false}
    //       value={"+998"}
    //       areaCodes={{
    //         uz: ["+998"],
    //       }}
    //       masks={{ uz: "(..) ...-..-.." }}
    //       prefix="+"
    //     />
    //   );
      break;
    // case IMAGE:
    //   input = <ImageUpload onImage={"upload img function"}></ImageUpload>;
    //   break;
    case RADIO:
      input = (
          <Radio.Group name="turi" >
              <Radio value={""}>nomi</Radio>
          </Radio.Group>
      );
      break;
    case DATE:
      input = (
        <DatePicker
          showTime
          value={"date"}
          format="DD.MM.YYYY HH:mm"
          allowClear={false}
          locale={""}
        />
      );
      break;
    // case MAP:
    //   input = <MapContainer></MapContainer>;
    //   break;

    default:
      break;
  }
};

export default ModalInput;
