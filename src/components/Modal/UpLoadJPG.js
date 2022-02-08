import React, { useState } from 'react';
import {
  Button,
  Input,
  InputNumber,
  Radio,
  DatePicker,
  Select,
  Upload,
  // Icon,
  message,
} from "antd";
import "./GlobalModal.scss"
import {inputDeafultHeght} from "../../constant/deafultStyle"


const UpLoadJPG = ({placeholder, value, gridColumn, gridRow, height, name, Iconic}) => {

  const [pdfFile, setPdfFile] = useState({});
  const [loadingi, setLoading] = useState({ loading: false });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader?.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Faqat JPG/PNG file kirita olasiz!");
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


  return <label
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
    {Iconic && <Iconic  />}
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
</label>;
};

export default UpLoadJPG;
