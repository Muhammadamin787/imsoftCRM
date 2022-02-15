import React from "react";
import { SHAHAR_TUMAN_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { STRING, SELECT, NUMBER } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from '@ant-design/icons';

const ShaharTumanTemplate = {
  text: "Shahar Tuman",
  path: SHAHAR_TUMAN_PATH,
  icon: "City",
  type: SERVIS_CHILD_PAGES,
  allData:["/cities", "/states"],
  // allData: {
  //   cities: "/cities",
  //   states: "/states",
  // },
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "state_id",
          type: SELECT,
          required: true,
          placeholder: "Viloyat",
          path: "/states",
          option: [
            { value: "qui", key: "qui" },
            { value: "Farg'ona", key: "Qo'qon" },
            { value: "Andijon", key: "Marg'ilon" },
          ],

        },
        {
          name: "name",
          type: STRING,
          required: true,
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",

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
      title: "Shahar nomi",
      dataIndex: "name",
      key: "Shahar",
      width: "47%",
    },
    {
      title: "Viloyat nomi",
      dataIndex: "name",
      key: "/states/",
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
