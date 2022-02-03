import React from "react";
import { XODIMLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { Xodimlar } from "../assets/icons/icons";
import { STRING,DATE, SELECT,TEXTAREA,NUMBER,PHONE,UPLOAD } from "../components/Modal/ModalInputTypes";
import {inputDeafultHeght,inputDeafultWidth} from "../constant/deafultStyle"


const XodimlarTemplate = {
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: <Xodimlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "repeat(20, 1fr)",
        rows:"repeat(6, 1fr)",
      },
      inputs: [
        {
          name: "full name",
          type: STRING,
          required: true,
          placeholder: "F.I.SH",
          gridColumn: "1 / 9",
          gridRow: "1 / 2",
        },
        {
          name: "Tug'ilgan sana",
          type: DATE,
          required: true,
          placeholder: "Tug'ilgan sana",
          gridColumn: "1 / 4",
          gridRow: "2 / 3",
        },
        {
          name: "Viloyat",
          type: SELECT,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 4",
          gridRow: "3 / 4",
          option: [
            { value: "Qashqadaryo", key: "Qashqadaroy"},
            { value: "Andijon", key: "Andijon"},
            { value: "Farg'ona", key: "Farg'ona"},
          ],
        },
        {
          name: "Yo'nalishi",
          type: SELECT,
          required: true,
          placeholder: "Yo'nalishi",
          gridColumn: "4 / 9",
          gridRow: "2 / 3",
          option: [
            { value: "Dasturchi Web (Frontend)", key: "Web (Frontend)"},
            { value: "Dasturchi Mobil (Andiroid)", key: "Mobil (Andiroid)"},
            { value: "Dasturchi Web (Backend)", key: "Web (Backend)"},
          ],
        },
        {
          name: "Shahar",
          type: SELECT,
          required: true,
          placeholder: "Shahar",
          gridColumn: "4 / 9",
          gridRow: "3 / 4",
          option: [
            { value: "Olti ariq", key: "Olti ariq"},
            { value: "Qo'qon", key: "Qo'qon"},
            { value: "Marg'ilon", key: "Marg'ilon"},
            { value: "Qarshi", key: "Qarshi"},
          ],
        },
        {
          name: "manzil",
          type: STRING,
          required: true,
          placeholder: "Manzil",
          gridColumn: "1 / 9",
          gridRow: "4 / 5",
        },
        {
          name: "qo'shimcha malumot",
          type: TEXTAREA,
          required: true,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "1 / 9",
          gridRow: "5 / 7",
        },
        {
          name: "telifon",
          type: PHONE,
          required: true,
          placeholder: "Telifon",
          gridColumn: "9 / 17",
          gridRow: "1 / 2",
        },
        {
          name: "pasport",
          type: UPLOAD,
          required: true,
          placeholder: "pasport",
          gridColumn: "9 / 13",
          gridRow: "2 / 5",
          height: inputDeafultHeght * 2.5,
        },
        {
          name: "oilasi",
          type: UPLOAD,
          required: true,
          placeholder: "Oilasi",
          gridColumn: "13 / 17",
          gridRow: "2 / 5",
          height: inputDeafultHeght * 2.5,
        },
        {
          name: "hozirgi turgan joyi",
          type: STRING,
          required: true,
          placeholder: "hozirgi turgan joyi (map quyiladi)",
          gridColumn: "9 / 17",
          gridRow: "4 / 7",
          height: inputDeafultHeght * 3.2,
        },
        {
          name: "rasmi",
          type: STRING,
          required: true,
          placeholder: "rasmi",
          gridColumn: "17 / 22",
          gridRow: "1 / 7",
          height: inputDeafultHeght * 7.7,
          width: inputDeafultWidth * 5
        },
      ],
    },
  ],
};

export default XodimlarTemplate;
