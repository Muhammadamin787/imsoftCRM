import React from "react";
import { VILOYATLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";

const ViloyatlarTemplate = {
  accessKey: 7,
  text: "Viloyatlar",
  path: VILOYATLAR_PATH,
  icon: "Group",
  type: SERVIS_CHILD_PAGES,
  mainUrl: "/states",
  // allData:["/states/"],
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "name",
          type: STRING,
          required: true,
          options:"states",
          placeholder: "Viloyatlar",
          label: "Viloyat"
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
    },
    {
      title: "Viloyat Nomi",
      dataIndex: "name",
      key: "name",
      width: "95%",
    },
  ],
};

export default ViloyatlarTemplate;
