import { Upload,  message } from 'antd';
import React from 'react';
import Icon from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/msword' || file.type === 'application/pdf';
  if (!isJpgOrPng) {
    message.error('You can only upload jpg, png , doc or pdf file!');
  }
  return isJpgOrPng;
}
 class Avatar extends React.Component {
     constructor(props) {
         super(props);
         console.log(props.style);
         this.style = props.style
        //  console.log(this.style);
     }
  state = {
    loading: false,
    loadFile:"",
  };

  

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }

    this.state.loadFile = info.file

    // console.log(info.file.name);
    // console.log(this.state.loadFile.name);
};

  render() {
    const uploadButton = (
      <div>
        <Icon type="smile"  type={this.state.loading ? 'loading' : 'plus'}  />
        <div className="ant-upload-text">Upload</div>
        {this.state.loadFile !== "" ? <span >{this.state.loadFile.name}</span> : "not file"}
      </div>
    );
    const { imageUrl } = this.state;
    
    return (
      <Upload
      style={this.props.style}
        name="avatar"
        listType="picture-card"
        // className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

export default Avatar;