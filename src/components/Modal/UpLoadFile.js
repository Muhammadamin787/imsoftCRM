import { Upload, message } from "antd";
import React from "react";
import "./GlobalModal.scss";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import { findIcon } from "../../assets/icons/icons";


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
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
  return isJpgOrPng;
}

class UploadFile extends React.Component {
  state = {
    loading: false,
    imageUrl: ""
  };

  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl
          // loading: false,
        })
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;

    // const uploadButton = (
    //   <div>
    //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //     <div style={{ marginTop: 8 }}>Upload</div>
    //   </div>
    // );

    return (
    
        <label
          className="file-uploader-label"
          htmlFor="file-uploder"
          style={{
            gridColumn: this.props.gridColumn,
            gridRow: this.props.gridRow,
            height: this.props.height
              ? this.props.height + "px"
              : inputDeafultHeght + "px",
            width: "100% !important",
            textAlign: "center",
            border: "1px solid #D9D9D9",
          }}
        > <p>{this.props.label}</p>
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

          >{" "}
          </Upload>
          {this.props.Iconic && findIcon(this.props.Iconic)}
        </label>
    );
  }
}

export default UploadFile;
