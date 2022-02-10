import React from "react";
import { REGIONLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { MAP, SELECT, STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import {inputDeafultHeght,} from "../../constant/deafultStyle"

const RegionlarTemplate = {
  text: "Regionlar",
  path: REGIONLAR_PATH,
  icon: "Regionlar",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "1fr 1fr",
        rows: "1fr 1fr",
      },
      inputs: [
        {
          name: "viloyat",
          type: STRING,
          required: true,
          placeholder:"Viloyat",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        },
        {
          name: "shahar/tuman",
          type: SELECT,
          required: true,
          placeholder:"Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          options: [
            { value: "custom value 1", key: "custom value 1" },
            { value: "custom value 2", key: "custom value 2" },
            { value: "custom value 3", key: "custom value 3" },
            { value: "custom value 4", key: "custom value 5" },
          ],
        },
        {
          name: "Map bulishi  kk",
          type: MAP,
          required: true,
          placeholder:"map bulishi kk",
          gridColumn: "2 / 3",
          gridRow: "1 / 3",
          height: inputDeafultHeght * 2.5,
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
      dataIndex: "shahar_nomi",
      key: "Shahar nomi",
      width: "40%",
    },
    {
      title: "Viloyat nomi",
      dataIndex: "viloyat_nomi",
      key: "Viloyat nomi",
      width: "40%",
    },
    {
      title: "Lokatsiya",
      dataIndex: "lokatsiya",
      key: "Lokatsiya",
      width: "15%",
      align: "center",
    },
  ],
  data: [
    {
      number: "1",
      shahar_nomi: "Marg'ilon",
      viloyat_nomi: "Farg'ona",
      lokatsiya:"ertyui",
      key: 1,
    },
  ],
};

export default RegionlarTemplate;
