import React from "react";
import { YUNALISHLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";

const YunalishlarTemplate = {
  text: "Yunalishlar",
  path: YUNALISHLAR_PATH,
  icon:  "Yunalishlar" ,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  allData:["/directions"],
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "Yunalishlar",
          type: STRING,
          placeholder: "Yo'nalishlar",
        },
      ],
    },
  ],
  modal: {
    style: {
      width: 500,
      marginTop: "-70px"
    }
  },
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

export default YunalishlarTemplate;
