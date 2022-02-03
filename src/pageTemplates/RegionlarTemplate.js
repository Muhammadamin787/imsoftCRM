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
          name: "Viloyat",
          type: STRING,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        },
        {
          name: "Shahar/Tuman",
          type: SELECT,
          required: true,
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          option: [
            { value: "Olti ariq", key: "Olti ariq"},
            { value: "Qo'qon", key: "Qo'qon"},
            { value: "Marg'ilon", key: "Marg'ilon"},
            { value: "Farg'ona", key: "Farg'ona"},
          ],
        },
        {
          label: "Viloyat4",
          name: "viloyat4",
          type: MAP,
          required: true,
          placeholder: "viloyat4",
          height: inputDeafultHeght*4,
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
