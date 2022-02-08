import {
  Button,
  Input,
  InputNumber,
  Radio,
  DatePicker,
  Select,
  Upload,
  Icon,
  message,
} from "antd";
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
  UPLOAD,
} from "./ModalInputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import "moment/locale/ru";
import moment from "moment";
import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  Placemark,
} from "react-yandex-maps";
import Avatar from "./upLoadInput";
import MapModal from "./MapModal";

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
  Icon,
}) => {
  let input = null;

  const [values, setValues] = useState(value);

  const handleChangeValue = (e) => {
    setValues(e.target.value);
  };

  const dateFormat = "YYYY/MM/DD";

  // pdf doc img, jpg png yuklash kodlari
  const [pdfFile, setPdfFile] = useState({});
  const [loadingi, setLoading] = useState({ loading: false });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader?.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "image/jpeg" ||
      file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    setPdfFile(file);
    return isJpgOrPng;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        setLoading({
          imageUrl,
          loading: false,
        })
      );
    }
    setPdfFile(info.file);
  };

  const { loading, imageUrl } = loadingi;

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
            // width: width && width ? width + "px" : inputDeafultWidth + "px",
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
          defaultValue={moment("2020/01/01", dateFormat)}
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
        <label
          className="file-uploader-label"
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
            width: "100% !important",
            textAlign: "center"
          }}
          htmlFor="file-uploder"
        >
          <Upload
            id="file-uploder"
            name={name}
            placeholder={placeholder}
            alt="file"
            beforeUpload={beforeUpload}
            onClick={handleChange}
            type="file"
            maxCount={1}
            showUploadList={false}
            // value={values}
          >
            {Icon && <Icon />}
            {pdfFile?.name ? (
              pdfFile?.name
            ) : (
              <div
                style={{
                  height: height,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pdfFile.name ? (
                  pdfFile.name
                ) : (
                  <span
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    {placeholder + " yuklash"}
                  </span>
                )}
              </div>
            )}
          </Upload>
        </label>
      );
      break;
    
    
    
    
      // case IMAGE:
    //   input = (
    // <Input
    //   alt="yuq"
    //   type="file"
    //   required
    //   onChange={(e) => handlePdfFileChange(e)}
    //   style={{
    //     gridColumn: gridColumn,
    //     gridRow: gridRow,
    //     height: height ? height + "px" : inputDeafultHeght + "px",
    //     // width: width && width ? width + "px" : inputDeafultWidth + "px",
    //     backgroundColor: "red",
    //   }}
    // />
    // <Avatar
    //   style={{
    //     gridColumn: gridColumn,
    //     gridRow: gridRow + "!important",
    //     // height: height ? height + "px" : inputDeafultHeght + "px",
    //     // width: width && width ? width + "px" : inputDeafultWidth + "px",
    //     backgroundColor: "red",
    //   }}
    // />
    // );
    // break;
    default:
      break;
  }

  return input;
};

export default ModalInput;
