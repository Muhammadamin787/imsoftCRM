import React from "react";
import { XODIMLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { Xodimlar } from "../assets/icons/icons";
import { STRING,DATE, SELECT,TEXTAREA,NUMBER,PHONE,UPLOAD } from "../components/Modal/ModalInputTypes";



const XodimlarTemplate = {
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: <Xodimlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        rows:"1fr 1fr 1fr 1fr 1fr 1fr",
      },
      inputs: [
        {
          name: "full name",
          type: STRING,
          required: true,
          placeholder: "F.I.SH",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
        },
        {
          name: "Tug'ilgan sana",
          type: DATE,
          required: true,
          placeholder: "Tug'ilgan sana",
          gridColumn: "1 / 3",
          gridRow: "2 / 3",
        },
        {
          name: "Viloyat",
          type: SELECT,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 3",
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
          gridColumn: "3 / 6",
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
          gridColumn: "3 / 6",
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
          gridColumn: "1 / 6",
          gridRow: "4 / 5",
        },
        {
          name: "qo'shimcha malumot",
          type: TEXTAREA,
          required: true,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "1 / 6",
          gridRow: "5 / 7",
        },
        {
          name: "telifon",
          type: PHONE,
          required: true,
          placeholder: "Telifon",
          gridColumn: "6 / 9",
          gridRow: "1 / 2",
        },
        // {
        //   name: "pasport",
        //   type: UPLOAD,
        //   required: true,
        //   placeholder: "Telifon",
        //   gridColumn: "6 / 7",
        //   gridRow: "2 / 3",
        // },
      ],
    },
  ],
};

export default XodimlarTemplate;
