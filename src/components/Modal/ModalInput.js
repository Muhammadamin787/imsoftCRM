import {
  Button,
  Input,
  InputNumber,
  Radio,
  DatePicker,
  Select,
  Upload,
  Icon,
  message
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
import { YMaps, Map, ZoomControl ,  FullscreenControl, SearchControl, GeolocationControl, Placemark } from "react-yandex-maps";
import Avatar from "./upLoadInput";
import MapModal from "./MapModal"

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
  icon
}) => {
  let input = null;

  // pdf doc img, jpg png yuklash kodlari

  // const [pdfFile, setPdfFile] = useState({});
  // const [pdfFileError, setPdfFileError] = useState("");
  // const [pdfFileName, setFileName] = useState("");

  // // onchange event
  // const fileType = [
  //   "application/pdf",
  //   "application/msword",
  //   "image/jpeg",
  //   "image/png",
  //   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // ];
  // const handlePdfFileChange = (e) => {
  //   let selectedFile = e.target.value;
  //   console.log(selectedFile);

  //   if (selectedFile) {
  //     if (selectedFile && fileType.includes(selectedFile.type)) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);
  //       reader.onloadend = (e) => {
  //         setPdfFile({selectedFile});
  //         setFileName(selectedFile.name);
  //       };
  //     } else {
  //       setPdfFile(null);
  //       setPdfFileError("file type mos kelmadi");
  //     }
  //   }
  // };
// console.log(pdfFile);
// console.log(pdfFileName);

  // pdf doc img, jpg png yuklash kodlari tugadi
  // pdf file 2 (Avatar) kodlari

  const [pdfFile, setPdfFile] = useState({});
  const [loadingi, setLoading] = useState({ loading: false });
  // const [pdfFileName, setFileName] = useState("");

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader?.result));
    reader.readAsDataURL(img)
  }

  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === 'image/jpeg' ||
      file.type === 'image/png';

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    setPdfFile(file);
    return isJpgOrPng;
  }

  const handleChange = (info) => {
    console.log(info);
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

  console.log(pdfFile);

  const { loading, imageUrl } = loadingi;



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
              <Option value={option?.value} key={option?.key}>
                {" "}
                {option.value}
              </Option>
            ))}
        </Select>
      );
      break;
    case MAP:
      input = (
        <MapModal gridColumn={gridColumn} gridRow={gridRow} height={height} />
        
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
        <label
          className="file-uploader-label"
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          htmlFor="file-uploder"
        >
          <Upload
            id="file-uploder"
            name={name}
            placeholder={placeholder}
            alt="file"
            beforeUpload={ beforeUpload}
            onClick={handleChange}
            type="file"
            maxCount={1}
            showUploadList={false}
          >
            {pdfFile?.name ? pdfFile?.name : <div  style={{ height:height, border:"1px solid black" , display:"flex", justifyContent: "center", alignItems:"center"}}>
              {/* <span className="file-uploader__icon">{icon && icon}</span> */}
              {pdfFile.name ? pdfFile.name : <span style={{border: "1px solid red", height: "100%"}}>{placeholder + " yuklash"}</span>}
              </div>}
          </Upload>
        </label>
      );
      // input = (
      //   <Avatar
      //     gridColumn={gridColumn} gridRow={gridRow} height={height}
      //      />
      // )
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
