import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import {REAL_MIJOZLAR} from '../../pages/pageConstants/PageRoutes';
import {CLIENTS_CHILD_PAGES} from '../../pages/pageConstants/PageTypes';

const RealClientTemplate = {
  text: "Real mijozlar",
  path: REAL_MIJOZLAR,
  type: CLIENTS_CHILD_PAGES,
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

export default RealClientTemplate;
