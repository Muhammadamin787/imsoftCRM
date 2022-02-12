import { Input, InputNumber, Select } from "antd";
import { Option } from "antd/lib/mentions";
import {
  DATE,
  IMAGE,
  MAP,
  NUMBER,
  TEXTAREA,
  PHONE,
  SELECT,
  STRING,
  UPLOAD,
} from "./InputTypes";
const ReturnInput = ({ type }) => {
  switch (type) {
    default: {
      return <Input />;
    }
  }
};

export default ReturnInput;
