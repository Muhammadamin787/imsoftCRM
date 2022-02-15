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
  allData:["/cities"],
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "name",
          type: SELECT,
          required: true,
          placeholder:"Viloyat",
          option: [
            { value: "qui", key: "qui"},
            { value: "Farg'ona", key: "Qo'qon"},
            { value: "Andijon", key: "Marg'ilon"},
          ],

        },
        {
          name: "state_id",
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
