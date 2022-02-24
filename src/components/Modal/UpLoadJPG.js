import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react'
import "./GlobalModal.scss"
import {inputDeafultHeght} from "../../constant/deafultStyle"
import {findIcon} from '../../assets/icons/icons';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png";

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    return isJpgOrPng;
}

class UpLoadJPG extends React.Component {
    state = {
        loading: false,
        imageUrl: "",
    };

    handleChange = (info, e) => {
        // if (info.file.status === 'uploading') {
        //   this.setState({ loading: true });
        //   return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj, imageUrl =>
        //         this.setState({
        //             imageUrl,
        //             // loading: false,
        //         }),
        //     );
        // }

    };

    render() {
        const {loading, imageUrl} = this.state;
        const {gridColumn, gridRow, height} = this?.props;

        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        );

        const customStyles = {
            // fileIconStyle: {position: "relative", top: "-7px", left: "-2px"},
            labelStyle: {
                gridColumn,
                gridRow,
                height: height ? height + "px" : inputDeafultHeght + "px",
                width: "100% !important",
                textAlign: "center",
            },
        }
        
        return (
            <label className="file-uploader-label"
            htmlFor="file-uploder"
            //    style={{
                    //    border: "1px solid #D9D9D9",
                //        gridColumn: this.props.gridColumn,
                //        gridRow: this.props.gridRow,
                //        height: this.props.height ? this.props.height + "px" : inputDeafultHeght + "px",
                //        width: "100% !important",
                //        // textAlign: "center",
                //        // backgroundColor:"red",
                //    }}
                style={customStyles.labelStyle}
            >
                <p>{this.props?.label}</p>
                <Upload id="file-uploder"
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        alt="file"
                    // beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                        type="file"
                        maxCount={1}
                    // showUploadList={false}
                >{"  "}
                </Upload>
                {this.props.Iconic && findIcon(this.props.Iconic)}
            </label>
        );
    }
}


export default UpLoadJPG;




