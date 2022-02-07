import React from "react";
import { SHAHAR_TUMAN_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING, SELECT } from "../components/Modal/ModalInputTypes";
import { FieldNumberOutlined } from '@ant-design/icons';
import { City } from "../assets/icons/icons";

const ShaharTumanTemplate = {
  text: "Shahar Tuman",
  path: SHAHAR_TUMAN_PATH,
  icon: <City />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "viloyat",
          type: STRING,
          required: true,
          value: "",
          placeholder:"Viloyat",
        },
        {
          name: "Shahar/Tuman",
          type: SELECT,
          required: true,
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          value: "",
          option: [
            { value: "Olti ariq", key: "Olti ariq"},
            { value: "Qo'qon", key: "Qo'qon"},
            { value: "Marg'ilon", key: "Marg'ilon"},
            { value: "Farg'ona", key: "Farg'ona"},
          ],

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
      title: "Shahar nomi",
      dataIndex: "shahar",
      key: "Shahar",
      width: "47%",
    },
    {
      title: "Viloyat nomi",
      dataIndex: "viloyat",
      key: "Viloyat",
      width: "47%",
    },
  ],
  data: [
    {
      number: "1",
      shahar: "Marg'ilon",
      viloyat: "Farg'ona",
      key: 1,
    },
  ],
};

export default ShaharTumanTemplate;
