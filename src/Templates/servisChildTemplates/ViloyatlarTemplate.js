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
  mainUrl:"/states",
  // allData:["/states/"],
  isOpenModal: true,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "name",
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
  data: [
    {
      id: "1",
      name: "Farg'ona",
    },
  ],
};

export default ViloyatlarTemplate;
