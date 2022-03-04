import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { inputDeafultHeght } from "../../../constant/deafultStyle";
import { DELETE } from "../../../functions/Methods";
import { BaseUrl, Base } from "../../../BaseUrl";
import {setValues} from "../../../redux/stored_reducer"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const token = localStorage.getItem("token");

export class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: props.fileList,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
  }

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

  handleDelete = (e) => {
    const {dispatch, values} = this?.props;
    DELETE(this.props.filePath + "/delete", {
      type: this.props.name,
      filename: e.response,
    }).then((res) => {
      dispatch(setValues({ ...values, [this?.props?.name]: null }));
      toast.success("Rasm o'chirildi!");
    }).catch((err) => {
      toast.warn("Xatolik, fayl o'chmadi!")
    });


  };

  handleChange = (e) => {
    this.props.handleChangeValue({ [this?.props?.name]: `${e.file.response}` });
    this.setState({ fileList: e.fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const { filePath } = this.props;
    const uploadButton = (
      <div>
        <div>
          <PlusOutlined />
        </div>
        Upload
      </div>
    );

    const customStyles = {
      imageUploader: {
        gridColumn: this.props.gridColumn,
        gridRow: this.props.gridRow,
        height: this.props?.height
          ? this.props?.height + "px"
          : inputDeafultHeght + "px",
        width: "100% !important",
        border: "1px solid #D9D9D9",
      },
      previewModal: { marginTop: "-20px", maxHeight: "100px" },
    };

    return (
      <div
        className="file-uploader-label"
        htmlFor="file-uploder"
        style={customStyles.imageUploader}
      >
        <Upload
          action={BaseUrl + filePath}
          headers={this.state.headers}
          listType="picture-card"
          fileList={fileList}
          name={this.props.fileName}
          onPreview={this.handlePreview}
          onRemove={this.handleDelete}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          style={customStyles.previewModal}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
