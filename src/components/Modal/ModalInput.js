import { Button, Input, InputNumber, Radio, DatePicker, Select, Upload, Icon } from "antd";
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
  RADIO,
  SELECT,
  STRING,
  UPLOAD
} from "./ModalInputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import "moment/locale/ru";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import Avatar from "./upLoadInput"



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
}) => {
  let input = null;

  const [rasm, setRasm] = useState("")

  console.log(value);

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
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
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
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
          }}
          placeholder={placeholder}
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
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
          }}
        >
          {option &&
            option?.map((option) => (
              <Option value={option.value} key={option.key}>
                {" "}
                {option.value}
              </Option>
            ))}
        </Select>
      );
      break;
    case MAP:
      input = (
        <YMaps height={height + "px"}>
          <Map
            defaultState={{ center: [38.838334, 65.795188], zoom: 7 , controls: [ 'fullscreenControl']}}
            width={"100%"}
            height={"100%"}
            style={{
              gridColumn: gridColumn,
              gridRow: gridRow,
              height: height ? height + "px" : inputDeafultHeght + "px",
              // width: width && width ? width + "px" : inputDeafultWidth + "px",
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            
          >
            <Placemark defaultGeometry={[38.838334, 65.795188]} />
            {/* <ZoomControl options={{float:"top"}} /> */}
          </Map>
        </YMaps>
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
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
          }}
          format="DD.MM.YYYY"
          allowClear={false}
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
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
          }}
          autoSize={{ minRows: 3, maxRows: 3 }}
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
              // width: width && width ? width + "px" : inputDeafultWidth + "px",
            }}
            specialLabel={false}
            disableDropdown={true}
            countryCodeEditable={false}
            // value={values[name] ? values[name] : "+998"}
            areaCodes={{
              uz: ["+998"],
            }}
            masks={{ uz: "(..) ...-..-.." }}
            prefix="+"
            // onChange={(phone) => {
            //   const e = {
            //     target: {
            //       name: name,
            //       value: phone,
            //     },
            //   };
            //   // onChange(e);
            // }}
          />
        );
        break;

        case UPLOAD:
          input = (
              <Input style={{
                gridColumn: gridColumn,
                gridRow: gridRow,
                height: height && height > 0 ? height + "px" : inputDeafultHeght + "px",
                // width: width && width ? width + "px" : inputDeafultWidth + "px",
              }}
              onChange={(e) => setRasm(e.target.value)}

              type="file"/>
            )
            break;
         case IMAGE:
           input =(
             <img src={value} alt="yuq" />
           )   
    default:
      break;
  }

  return input;
};

export default ModalInput;
