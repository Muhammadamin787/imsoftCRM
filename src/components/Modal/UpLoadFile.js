import { Upload } from "antd";
import React from "react";
import "./GlobalModal.scss";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import { DeleteIcon, findIcon } from "../../assets/icons/icons";
import { BaseUrl, Base } from "../../BaseUrl";
import { DELETE } from "../../functions/Methods";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux"
import { setValues } from '../../redux/stored_reducer'


function beforeUpload(file) {
  const isJpgOrPng =
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "image/jpeg" ||
    file.type === "image/png";

  if (!isJpgOrPng) {
    toast.error("Bunday fayl turi qabul qilinmaydi!");
  }
  return isJpgOrPng;
}
const token = localStorage.getItem("token");

class UploadFile extends React.Component {
  state = {
    loading: false,
    imageUrl: "",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done" && info.file?.response) {
      toast.success("File saqlandi");
      this.props.onChange({
        // [this.props.name]: `${Base}${info?.file?.response}`
        [this.props.name]: `${info?.file?.response}`,
      });
      this.setState({
        imageUrl: `${Base}${info?.file?.response}`,
        loading: false,
      });
    }
  };

  handleDelete = (info) => {
    const { dispatch, values } = this.props;

    DELETE(this.props.filePath + "/delete", {
      type: this.props?.name,
      filename: this.state?.imageUrl,
    })
      .then((res) => {
        toast.success("Fayl o'chirildi!");
        dispatch(setValues({ ...values, [this?.props?.name]: null }));
        setTimeout(() => {
          this.setState({
            imageUrl: "",
            loading: false,
          });
        }, 0);
      })
      .catch((err) => {
        toast.warn("Xatolik, fayl o'chmadi!");
        setTimeout(() => {
          this.setState({
            imageUrl: "",
            loading: false,
          });
        }, 0);
      });
  };


  render() {
    const { loading, imageUrl } = this?.state;
    const { gridColumn, gridRow, height, label, name, placeholder, filePath } =
      this?.props;

    const showFileStatus = () => {
      if (loading) {
        return <LoadingOutlined />;
      } else if (imageUrl === "") {
        // bu birinchi modal ochilgandagi holat
        return findIcon(this?.props?.Iconic);
      } else if (imageUrl) {
        // bu file saqlangandagi holat
        return (
          <button
            type="button"
            className="delete-file-btn"
            onClick={this.handleDelete}
          >
            <DeleteIcon />
          </button>
        );
      }
    };

    const customStyles = {
      fileIconStyle: { position: "relative", top: "-7px", left: "-2px" },
      labelStyle: {
        gridColumn,
        gridRow,
        height: height ? height + "px" : inputDeafultHeght + "px",
        width: "100% !important",
        textAlign: "center",
        cursor: "pointer",
      },
    };

    return (
      <label
        className="file-uploader-label"
        htmlFor={"file-uploder" + name}
        style={customStyles.labelStyle}
      >
        <p>{label}</p>
        <Upload
          action={BaseUrl + filePath}
          onChange={this.handleChange}
          headers={this.state.headers}
          beforeUpload={beforeUpload}
          placeholder={placeholder}
          showUploadList={false}
          id={"file-uploder" + name}
          name={name}
          maxCount={1}
          alt="file"
          type="file"
        >
          {" "}
        </Upload>
        <span style={customStyles.fileIconStyle}>{showFileStatus()}</span>
      </label>
    );
  }
}

export default UploadFile;
