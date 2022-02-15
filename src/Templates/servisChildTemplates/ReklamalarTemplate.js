import React from "react";
import { REKLAMALAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";

const ReklamalarTemplate = {
  text: "Reklamalar",
  path: REKLAMALAR_PATH,
  icon: "Reklamalar",
  type: SERVIS_CHILD_PAGES,
  mainUrl:"/reklams",
	// allData:["/reklams"],
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "description",
          type: STRING,
          required: true,
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
