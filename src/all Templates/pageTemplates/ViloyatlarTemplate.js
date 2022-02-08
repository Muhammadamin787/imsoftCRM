import React from "react";
import { VILOYATLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";

const ViloyatlarTemplate = {
  text: "Viloyatlar",
  path: VILOYATLAR_PATH,
  icon: "Group",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "Viloyatlar",
          type: STRING,
          required: true,
          placeholder:"Viloyatlar",
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
      title: "Viloyat Nomi",
      dataIndex: "viloyat",
      key: "Viloyat",
      width: "95%",
    },
  ],
  data: [
    {
      number: "1",
      viloyat: "Farg'ona",
      key: 1,
    },
  ],
};

export default ViloyatlarTemplate;
