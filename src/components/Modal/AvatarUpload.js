import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react'
import "./GlobalModal.scss"
import {inputDeafultHeght} from "../../constant/deafultStyle"


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
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
    message.error('You can only upload JPG/PNG file!');
  }
  return isJpgOrPng;
}

class AvatarUpload extends React.Component {
  state = {
    loading: false,
    imageUrl: "",
    
  };

  handleChange = info => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          // loading: false,
        }),
      );
    }

    console.log(info.file.status);
  };

  render() {
    const { loading, imageUrl } = this.state;

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    
    return (
      <label
  className="file-uploader-label"
  style={{
    gridColumn: this.props.gridColumn,
    gridRow: this.props.gridRow,
    height: this.props.height ? this.props.height + "px" : inputDeafultHeght + "px",
    width: "100% !important",
    textAlign: "center"
  }}
  htmlFor="file-uploder"
>
  <Upload
    id="file-uploder"
    name={this.props.name}
    placeholder={this.props.placeholder}
    alt="file"
    beforeUpload={beforeUpload}
    onClick={this.props.handleChange}
    type="file"
    maxCount={1}
    showUploadList={false}
    // value={values}
  >
    {this.props.Iconic && <this.props.Iconic  />}
    {/* {imgFile?.name ? (
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
            {this.props.placeholder + " yuklash"}
          </span>
        )}
      </div>
    )} */}
  </Upload>
</label>
      // <Upload
      //   name="avatar"
      //   listType="picture-card"
      //   className="avatar-uploader"
      //   showUploadList={false}
      //   action="https://192.168.30.67/malina/filialphoto"
      //   beforeUpload={beforeUpload}
      //   onChange={this.handleChange}
      //   // accept=".txt"
      // >
      //   {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      // </Upload>
    );
  }
}


export default AvatarUpload;