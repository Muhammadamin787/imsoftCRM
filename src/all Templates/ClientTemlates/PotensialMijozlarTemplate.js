import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import {POTENSIAL_MIJOZLAR} from '../../pages/pageConstants/PageRoutes';
import {CUSTOMERS_CHILD_PAGES} from '../../pages/pageConstants/PageTypes';

const PotentsialClientPage = {
  text: "Potensial mijozlar",
  path: POTENSIAL_MIJOZLAR,
  type: CUSTOMERS_CHILD_PAGES,
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

export default PotentsialClientPage;
