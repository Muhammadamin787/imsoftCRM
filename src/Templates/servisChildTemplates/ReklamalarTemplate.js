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
          label: "Reklamalar"
        },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      key: "id",
      width: "5%",
      align: "center",
      render: (text, data, i) => ++i
    },
    {
      title: "Reklama Nomi",
      dataIndex: "description",
      key: "description",
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
