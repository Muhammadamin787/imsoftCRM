import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { inputDeafultHeght } from "../../../constant/deafultStyle";
import { DELETE } from "../../../functions/Methods";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleRemove = (e) => {
    DELETE("/workers/image/delete", {
      type: "developer_photo",
      filename: e.response,
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <div>
          <PlusOutlined />
        </div>
        Upload
      </div>
    );
    return (
      <div
        className="file-uploader-label"
        htmlFor="file-uploder"
        style={{
          gridColumn: this.props.gridColumn,
          gridRow: this.props.gridRow,
          height: this.props.height
            ? this.props.height + "px"
            : inputDeafultHeght + "px",
          width: "100% !important",
          border: "1px solid #D9D9D9",
        }}
      >
        <Upload
          action="https://aqlli-uy.uz/api/workers/image"
          listType="picture-card"
          fileList={fileList}
          name={"developer_photo"}
          onPreview={this.handlePreview}
          onRemove={this.handleRemove}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          style={{ marginTop: "-20px", maxHeight: "100px" }}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
