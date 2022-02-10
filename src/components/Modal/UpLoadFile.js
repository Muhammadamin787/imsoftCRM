import React, { useState } from 'react';
import {
  Upload,
  message,
} from "antd";
import "./GlobalModal.scss"
import {inputDeafultHeght} from "../../constant/deafultStyle"


const UpLoadFile = ({placeholder, value, gridColumn, gridRow, height, name, Iconic}) => {

  const [imgFile, setImgFile] = useState({});
  const [wait, setLoading] = useState({ loading: false });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader?.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "image/jpeg" ||
      file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("File turi mos kelmadi. Siz faqat pdf, msword, doc, png, jpeg!");
    }
    setImgFile(file);
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
    setImgFile(info.file);
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
    {imgFile?.name ? (
      imgFile?.name
    ) : (
      <div
        style={{
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imgFile.name ? (
          imgFile.name
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

export default UpLoadFile;
