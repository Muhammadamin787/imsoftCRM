import React from "react";
import { XODIMLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { Xodimlar } from "../assets/icons/icons";
import { STRING,DATE, SELECT,TEXTAREA,NUMBER,PHONE,UPLOAD,MAP ,IMAGE} from "../components/Modal/ModalInputTypes";
import {inputDeafultHeght,} from "../constant/deafultStyle"
import image from "../assets/images/Ellipse 3.png"
import { FieldNumberOutlined } from "@ant-design/icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


const align = "center";
const XodimlarTemplate = {
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: <Xodimlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  modal:{
    width:1000,
  },
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
          gridColumn: "1 / 10",
          gridRow: "1 / 2",
        },
        {
          name: "Tug'ilgan sana",
          type: DATE,
          required: true,
          placeholder: "Tug'ilgan sana",
          gridColumn: "1 / 5",
          gridRow: "2 / 3",
        },
        {
          name: "Viloyat",
          type: SELECT,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 5",
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
          gridColumn: "5 / 10",
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
          gridColumn: "5 / 10",
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
          gridColumn: "1 / 10",
          gridRow: "4 / 5",
        },
        {
          name: "qo'shimcha malumot",
          type: TEXTAREA,
          required: true,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "1 / 10",
          gridRow: "5 / 7",
        },
        {
          name: "telifon",
          type: PHONE,
          required: true,
          placeholder: "Telifon",
          gridColumn: "10 / 16",
          gridRow: "1 / 2",
        },
        {
          name: "pasport",
          type: UPLOAD,
          required: true,
          placeholder: "pasport",
          gridColumn: "10 / 13",
          gridRow: "2 / 5",
          height: inputDeafultHeght * 2.5 ,
        },
        {
          name: "oilasi",
          type: UPLOAD,
          required: true,
          placeholder: "Oilasi",
          gridColumn: "13 / 16",
          gridRow: "2 / 5",
          height: inputDeafultHeght * 2.5,
        },
        {
          name: "hozirgi turgan joyi",
          type: MAP,
          required: true,
          placeholder: "hozirgi turgan joyi (map quyiladi)",
          gridColumn: "10 / 16",
          gridRow: "4 / 7",
          height: inputDeafultHeght * 3.2,
        },
        {
          name: "rasmi",
          type: UPLOAD,
          required: true,
          placeholder: "rasmi",
          gridColumn: "16 / 21",
          gridRow: "1 / 7",
          height: inputDeafultHeght * 7.7,
          // width: inputDeafultWidth * 1,
          value:image,
        },
      ],
    },
  ],
  filters: [
    {
      dataIndex: "yonalish"
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "10%",
      align,
    },
    {
      title: "F.I.Sh",
      dataIndex: "fish",
      key: "FISh",
      width: "40%",
    },
    {
      title: "Telefon",
      dataIndex: "telefon",
      key: "Telefon",
      width: "20%",
      align,
    },
    {
      title: "Viloyat",
      dataIndex: "viloyat",
      key: "viloyat",
      width: "20%",
      align,
    },
    {
      title: "Shahar",
      dataIndex: "shahar",
      key: "shahar",
      width: "20%",
      align,
    },
    {
      title: "Manzil",
      dataIndex: "manzil",
      key: "manzil",
      width: "40%",
    },
    {
      title: "Tug'ilgan sana",
      dataIndex: "tugilgan_sana",
      key: "tugilgan sana",
      width: "30%",
      align,
    },
    {
      title: "Yo'nalish",
      dataIndex: "yonalish",
      key: "yonalish",
      onFilter: (value, record) => record.yonalish.indexOf(value) === 0,
      width: "35%",
    },
    {
      title: "Rasmi",
      dataIndex: "rasmi",
      key: "rasmi",
      width: "15%",
      align,
      render: (_, record) => {
        return (
          <Zoom zoomMargin={10}>
            <picture>
              <source media="(max-width: 800px)" srcSet={record.rasmi} />
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
    },
    {
      title: "Pasport",
      dataIndex: "pasport",
      key: "pasport",
      width: "15%",
      align,
    },
    {
      title: "Oilasi",
      dataIndex: "oilasi",
      key: "oilasi",
      width: "20%",
      align,
    },
    {
      title: "Xarita",
      dataIndex: "xarita",
      key: "xarita",
      width: "15%",
      align,
    },
    {
      title: "Qo'shimcha ma'lumot",
      dataIndex: "malumot",
      key: "malumot",
      width: "35%",
      align,
    },
  ],
  data: [
    {
      number: "1",
      fish: "Hojiakbar Anorboyev",
      telefon: "90 532 27 71",
      viloyat: "Farg'ona",
      shahar: "Marg'ilon",
      manzil: "Galatoy 82 A",
      tugilgan_sana: "01/21/2005",
      yonalish: "Frontend Dasturchi",
      rasmi:
        "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      pasport: "",
      xarita: "",
      malumot: "",
      key: 1,
    },
    {
      number: "1",
      fish: "Hojiakbar Anorboyev",
      telefon: "90 532 27 71",
      viloyat: "Farg'ona",
      shahar: "Marg'ilon",
      manzil: "Galatoy 82 A",
      tugilgan_sana: "01/21/2005",
      yonalish: "BAckend Dasturchi",
      rasmi:
        "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      pasport: "",
      xarita: "",
      malumot: "",
      key: 2,
    },
  ],
  scroll: { x: 1500, y: 380 },
};

export default XodimlarTemplate;
