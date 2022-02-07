import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import {inputDeafultHeght,} from '../../constant/deafultStyle';
;

const Avatar = ({gridColumn, gridRow, height}) => {
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
  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>{pdfFile ? pdfFile : "upload"}</div>
  //   </div>
  // );
  return (
      <Upload
        name="avatar"
        // listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        maxCount={1}
        >
        {pdfFile?.name ? pdfFile.name : "yuklanmagan" }
      </Upload>
  );
};

export default Avatar;
