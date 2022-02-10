import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import { POTENSIAL_MIJOZLAR } from "../../pages/pageConstants/PageRoutes";
import { CUSTOMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PotensialClientTemplate = {
  text: "Potensial mijozlar",
  key: "0",
  path: POTENSIAL_MIJOZLAR,
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
    "location",
    "vaqt",
    "faoliyat",
    "manzil",
    "xudud",
    "shahar_and_tuman",
    "viloyat",
    "yunalishi",
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "15%",
      align: "center",
    },

    {
      title: "Kim orqali",
      dataIndex: "kim_orqali",
      key: "Kim orqali",
      width: "60%",
      align: "center",
    },

    {
      title: "F.I.O",
      dataIndex: "fio",
      key: "F.I.O",
      width: "80%",
      align: "center",
    },

    {
      title: "Korxona nomi",
      dataIndex: "korxona_nomi",
      key: "Korxona nomi",
      width: "40%",
      align: "center",
    },

    {
      title: "Telefon",
      dataIndex: "phone",
      key: "Telefon",
      width: "50%",
      align: "center",
    },

    {
      title: "Izox",
      dataIndex: "izoh",
      key: "Izoh",
      width: "20%",
      align: "center",
    },

    {
      title: "Rasm",
      dataIndex: "rasm",
      key: "Rasm",
      width: "40%",
      render: (_, record) => {
        return (
          <Zoom zoomMargin={10}>
            <picture>
              {/* <source media="(max-width: 800px)" srcSet={record.rasmi} /> */}
              <img
                alt="img"
                src={record.rasmi}
                width="30"
                height="30"
                style={{ objectFit: "contain" }}
              />
            </picture>
          </Zoom>
        );
      },
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "Location",
      width: "40%",
      align: "center",
      onFilter: (value, record) => record.location.indexOf(value) === 0,
    },
    {
      title: "Yo’nalishi",
      dataIndex: "yunalishi",
      key: "Yonalish",
      width: "40%",
      onFilter: (value, record) => record.yunalishi.indexOf(value) === 0,
      align: "center",
    },
    {
      title: "Viloyat",
      dataIndex: "viloyat",
      key: "Viloyat",
      width: 100,
      align: "center",
      onFilter: (value, record) => record.viloyat.indexOf(value) === 0,
    },
    {
      title: "Shahar/Tuman",
      dataIndex: "shahar_and_tuman",
      key: "shaharAndTuman",
      width: "50%",
      align: "center",
      onFilter: (value, record) => record.shahar_and_tuman.indexOf(value) === 0,
    },
    {
      title: "Xudud",
      dataIndex: "xudud",
      key: "Xudud",
      width: "40%",
      align: "center",
      onFilter: (value, record) => record.xudud.indexOf(value) === 0,
    },
    {
      title: "Manzil",
      dataIndex: "manzil",
      key: "Manzil",
      width: "50%",
      align: "center",
      onFilter: (value, record) => record.manzil.indexOf(value) === 0,
    },
    {
      title: "Faoliyat",
      dataIndex: "faoliyat",
      key: "Faoliyat",
      width: "40%",
      align: "center",
      onFilter: (value, record) => record.faoliyat.indexOf(value) === 0,
    },
    {
      title: "Qo’shilgan Vaqti",
      dataIndex: "vaqt",
      key: "Vaqt",
      width: "60%",
      align: "center",
      onFilter: (value, record) => record.vaqt.indexOf(value) === 0,
    },
  ],
  data: [
    {
      number: 0,
      kim_orqali: "@username",
      fio: "Abdusalomov Abdusalombek",
      korxona_nomi: "ABS MChJ",
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
      fio: "Hojiakbar Anorboyev",
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

export default PotensialClientTemplate;
