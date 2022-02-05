import React from "react";
import { REGIONLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { SELECT, STRING } from "../components/Modal/ModalInputTypes";
import { AimOutlined, FieldNumberOutlined } from "@ant-design/icons";
import {Regionlar} from '../assets/icons/icons'
const RegionlarTemplate = {
  text: "Regionlar",
  path: REGIONLAR_PATH,
  icon: <Regionlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          label: "Viloyat",
          name: "viloyat",
          type: STRING,
          required: true,
        },
        {
          label: "Shahar/Tuman",
          name: "shahar/tuman",
          type: SELECT,
          required: true,
        },
        {
          label: "Shahar/Tuman",
          name: "shahar/tuman",
          type: SELECT,
          required: true,
          options: [
            { value: "custom value 1", key: "custom value 1" },
            { value: "custom value 2", key: "custom value 2" },
            { value: "custom value 3", key: "custom value 3" },
            { value: "custom value 4", key: "custom value 5" },
          ],
        },
        //   {
        // 	label: "Shahar/Tuman",
        // 	name: "shahar/tuman",
        // 	type: SELECTION,
        // 	required: true,
        //   },
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
      lokatsiya: "dfvsf",
      key: 1,
    },
  ],
};

export default RegionlarTemplate;
