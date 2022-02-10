import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import {INKOR_MIJOZLAR} from '../../pages/pageConstants/PageRoutes';
import {CUSTOMERS_CHILD_PAGES} from '../../pages/pageConstants/PageTypes';
import PotensialClientTemplate from './PotensialClientTemplate';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const RejactClientTemplate = {
  text: "Inkor qilgan mijozlar",
  path: INKOR_MIJOZLAR,
  key: "3",
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
  filters: [
    ...PotensialClientTemplate.filters
  ],
  columns: [
    ...PotensialClientTemplate.columns
  ],
  data: [
    {
      number: 0,
      kim_orqali: "@username",
      fio: "Hojiakbar Anorboyev",
      korxona_nomi: "CBD MChJ",
      phone: "+998 99 999-99-99",
      izoh: "Oson",
      rasmi: "https://images.unsplash.com/photo-1532532890956-d1af80180c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      location: "sasd",
      yunalishi: "Dasturchi",
      viloyat: "Farg'ona",
      shahar_and_tuman: "Marg'ilon Marg'ilon",
      xudud: "O'zbekiston",
      manzil: "Majnuntol To'yxonasi",
      faoliyat: "Frontend Dasturchisi",
      vaqt: "09/02/2022"
    },
    {
      number: 1,
      kim_orqali: "@hojiakbar",
      fio: "sdgdgs afsdgsdhdfh",
      korxona_nomi: "Sokin diyor",
      phone: "+998 90 532-27-71",
      izoh: "Qiyin",
      rasmi: "https://images.unsplash.com/photo-1463316127144-58d3a7571c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      location: "bbb",
      yunalishi: "Dizayner",
      viloyat: "Toshkent",
      shahar_and_tuman: "Toshkent",
      xudud: "O'zbekiston",
      manzil: "jzncl",
      faoliyat: "Dizayner",
      vaqt: "09/03/2022"
    },
  ],
  scroll: { x: 2200, y: 1500 },
};

export default RejactClientTemplate;
