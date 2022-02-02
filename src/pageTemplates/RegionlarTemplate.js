import React from "react";
import { REGIONLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import {
  STRING,
  SELECT,
  MAP,
  NUMBER,
} from "../components/Modal/ModalInputTypes";
import { Regionlar } from "../assets/icons/icons";
import { inputDeafultHeght } from "../constant/deafultStyle";

const RegionlarTemplate = {
  text: "Regionlar",
  path: REGIONLAR_PATH,
  icon: <Regionlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "1fr 1fr",
        // rows:"1fr"
      },
      inputs: [
        {
          label: "Viloyat1",
          name: "viloyat1",
          type: STRING,
          required: true,
          placeholder: "viloyat1",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        },
        {
          label: "Viloyat2",
          name: "viloyat2",
          type: NUMBER,
          required: true,
          placeholder: "viloyat2",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
        },
        {
          label: "Viloyat3",
          name: "viloyat3",
          type: SELECT,
          option: [
            { value: "custom value 1", key: "custom value 1" },
            { value: "custom value 2", key: "custom value 2" },
            { value: "custom value 3", key: "custom value 3" },
            { value: "custom value 4", key: "custom value 5" },
          ],
          required: true,
          placeholder: "viloyat3",
          gridColumn: "1 / 2",
          gridRow: "3 / 4",
        },
        {
          label: "Viloyat4",
          name: "viloyat4",
          type: NUMBER,
          required: true,
          placeholder: "viloyat4",
          gridColumn: "2 / 3",
          gridRow: "1 / 4",
          height: inputDeafultHeght * 4,
        },
      ],
    },
  ],
};

export default RegionlarTemplate;

// {
//   label: "Shahar/Tuman",
//   name: "shahar/tuman",
//   type: SELECT,
//   placeholder: "shahar",
//   required: true,
//   options:[
//     {value:"custom value 1", key: "custom value 1",},
//     {value:"custom value 2", key: "custom value 2",},
//     {value:"custom value 3", key: "custom value 3",},
//     {value:"custom value 4", key: "custom value 5",},

//   ]
// },
