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

const { TextArea } = Input;

const ModalInput = ({
  placeholder,
  name,
  gridRow,
  gridColumn,
  type,
  option,
  height,
  value,
  Iconic,
}) => {
  let input = null;

  const [values, setValues] = useState(value);

  const handleChangeValue = (e) => {
    setValues(e.target.value);
  };

  switch (type) {
    case STRING:
      input = (
        <Input
          name={name}
          placeholder={placeholder}
          value={values}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          onChange={(e) => handleChangeValue(e)}
        />
      );
      break;
    case NUMBER:
      input = (
        <InputNumber
          type="number"
          name={name}
          value={values}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          placeholder={placeholder}
          onChange={(e) => handleChangeValue(e)}
          showSearch
        />
      );
      break;

    case SELECT:
      input = (
        <Select
          size="small"
          name={name}
          placeholder={placeholder}
          value={values}
          // onChange={e => handleChangeValue(e)}
          onChange={(value) => {
            const v = {
              target: {
                name: name,
                value: value,
              },
            };
            handleChangeValue(v);
          }}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
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
          value={values}
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
          defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
          onChange={(e) => handleChangeValue(e)}
          value={values}

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
          value={values}
          onChange={(e) => handleChangeValue(e)}
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
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
          value={values}
          // onChange={e => handleChangeValue(e)}
          // value={valuess[name] ? values[name] : "+998"}
          onChange={(phone) => {
            const e = {
              target: {
                value: phone,
              },
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
          value={values}
          Iconic={Iconic}
        />
      );
      break;

    case IMAGE:
      input = (
        <UpLoadJPG
          id="imge-uploder"
          name={name}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          value={values}
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
