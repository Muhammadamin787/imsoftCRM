import React from "react";
import { REKLAMALAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from "../components/Modal/ModalInputTypes";
import { Reklamalar } from "../assets/icons/icons";
import { FieldNumberOutlined } from "@ant-design/icons";
const ReklamalarTemplate = {
  text: "Reklamalar",
  path: REKLAMALAR_PATH,
  icon: <Reklamalar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "reklamalar",
          type: STRING,
          required: true,
          value: "",
          placeholder:"Reklamalar",
        },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Reklama Nomi",
      dataIndex: "reklama_nomi",
      key: "Reklama",
      width: "95%",
    },
  ],
  data: [
    {
      number: "1",
      reklama_nomi: "Instagram mitti.me",
      key: 1,
    },
  ],
};

export default ReklamalarTemplate;
