import React from "react";
import { STRING } from "../../components/Modal/ModalInputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
// import { Yunalishlar } from "../assets/icons/icons";

const RejactClientPage = {
  text: "Inkor qilgan mijozlar",
  path: "inkor-mijozlar",
  isOpenModal: false,
  //   form: [
  //     {
  //       grid: "1fr",
  //       inputs: [
  //         {
  //           name: "Yunalishlar",
  //           type: STRING,
  //           required: true,
  //           name: "Yo'nalishlar",
  //           type: STRING,
  //           required: true,
  //           placeholder: "Yo'nalishlar",
  //           value: "",
  //         },
  //       ],
  //     },
  //   ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Yo'nalish nomi",
      dataIndex: "yonalish",
      key: "Yo'nalish nomi",
      width: "95%",
    },
  ],
  data: [
    {
      number: "1",
      yonalish: "Dasturchi",
      key: 1,
    },
  ],
};

export default RejactClientPage;
