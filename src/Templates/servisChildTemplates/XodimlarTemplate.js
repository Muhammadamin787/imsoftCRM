import React from "react";
import { XODIMLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { UploadFileOilasi, UploadFilePasport } from "../../assets/icons/icons";
import {
  STRING,
  DATE,
  SELECT,
  TEXTAREA,
  PHONE,
  UPLOAD,
  MAP,
  IMAGE,
} from "../../components/Modal/InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import { FieldNumberOutlined } from "@ant-design/icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const align = "center";
const XodimlarTemplate = {
    text: "Xodimlar",
    path: XODIMLAR_PATH,
    icon: "Xodimlar",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    modal: {
        style: {
            width: 1000,
            marginTop: "-70px"
        }
    },
    form: [
        {
            grid: {
                columns: "repeat(20, 100fr)",
                rows: "repeat(6, 1fr)",
            },
            inputs: [
                {
                    name: "full_name",
                    type: STRING,
                    required: true,
                    placeholder: "F.I.SH",
                    gridColumn: "1 / 10",
                    gridRow: "1 / 2",
                    label: "F.I.SH",
                },
                {
                    name: "tugilgan_sana",
                    type: DATE,
                    required: true,
                    placeholder: "Tug'ilgan sana",
                    gridColumn: "1 / 5",
                    gridRow: "2 / 3",
                    label: "Tug'ilgan sana",
                    height: inputDeafultHeght ,
                },
                {
                    name: "viloyat",
                    type: SELECT,
                    required: true,
                    placeholder: "viloyat",
                    gridColumn: "1 / 5",
                    label: "Viloyat",
                    gridRow: "3 / 4",
                    option: [
                        {value: "Qashqadaryo", key: "Qashqadaroy"},
                        {value: "Andijon", key: "Andijon"},
                        {value: "Farg'ona", key: "Farg'ona"},
                    ],
                },
                {
                    name: "Yo'nalishi",
                    type: SELECT,
                    required: true,
                    placeholder: "Yo'nalishi",
                    label: "Yo'nalish",
                    gridColumn: "5 / 10",
                    gridRow: "2 / 3",
                    option: [
                        {value: "Dasturchi Web (Frontend)", key: "Web (Frontend)"},
                        {value: "Dasturchi Mobil (Andiroid)", key: "Mobil (Andiroid)"},
                        {value: "Dasturchi Web (Backend)", key: "Web (Backend)"},
                    ],
                },
                {
                    name: "shahar",
                    type: SELECT,
                    required: true,
                    placeholder: "Shahar",
                    label: "Shahar",
                    gridColumn: "5 / 10",
                    gridRow: "3 / 4",
                    option: [
                        {value: "Olti ariq", key: "Olti ariq"},
                        {value: "Qo'qon", key: "Qo'qon"},
                        {value: "Marg'ilon", key: "Marg'ilon"},
                        {value: "Qarshi", key: "Qarshi"},
                    ],
                },
                {
                    name: "manzil",
                    type: STRING,
                    required: true,
                    placeholder: "Manzil",
                    gridColumn: "1 / 10",
                    gridRow: "4 / 5",
                    label: "Manzil",
                },
                {
                    name: "qushimcha_malumot",
                    type: TEXTAREA,
                    required: true,
                    placeholder: "Qo'shimcha malumot",
                    gridColumn: "1 / 10",
                    gridRow: "5 / 7",
                    label: "Qo'shimcha malumot",
                    height: inputDeafultHeght *1.4,
                },
                {
                    name: "telifon",
                    type: PHONE,
                    required: true,
                    placeholder: "Telifon",
                    gridColumn: "10 / 16",
                    gridRow: "1 / 2",
                    label: "Telifon",
                },
                {
                    name: "pasport",
                    type: UPLOAD,
                    required: true,
                    placeholder: "Yo'nalish",
                    gridColumn: "10 / 13",
                    gridRow: "2 / 4",
                    // height: inputDeafultHeght * 1.2,
                    Iconic: UploadFilePasport,
                    label: "Pasport",
                },
                {
                    name: "oilasi",
                    type: UPLOAD,
                    required: true,
                    placeholder: "Oilasi",
                    gridColumn: "13 / 16",
                    gridRow: "2 / 4",
                    // height: inputDeafultHeght * 1.2,
                    Iconic: UploadFileOilasi,
                    label: "Oilasi",
                },
                {
                    name: "hozirgi_yashash_joyi",
                    type: MAP,
                    required: true,
                    placeholder: "hozirgi turgan joyi (map quyiladi)",
                    gridColumn: "10 / 16",
                    gridRow: "4 / 7",
                    height: inputDeafultHeght * 2,
                },
                {
                    name: "rasmi",
                    type: IMAGE,
                    required: true,
                    placeholder: "rasmi",
                    gridColumn: "16 / 21",
                    gridRow: "1 / 7",
                    height: inputDeafultHeght * 6,
                },
            ],
        },
    ],

  filters: ["yonalish"],
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
      dataIndex: "full_name",
      key: "full_name",
      width: "40%",
    },
    {
      title: "Telefon",
      dataIndex: "telefon",
      key: "telifon",
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
      key: "tugilgan_sana",
      width: "30%",
      align,
    },
    {
      title: "Yo'nalish",
      dataIndex: "yunalishi",
      key: "yunalishi",
      onFilter: (value, record) => record.yunalishi.indexOf(value) === 0,
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
      dataIndex: "hozirgi_yashash_joyi",
      key: "hozirgi_yashash_joyi",
      width: "15%",
      align,
    },
    {
      title: "Qo'shimcha ma'lumot",
      dataIndex: "qushimcha_malumot",
      key: "qushimcha_malumot",
      width: "35%",
      align,
    },
  ],
  data: [
    {
      number: "1",
      key: 1,
      full_name: "Hojiakbar Anorboyev",
      telifon: "998992348569",
      viloyat: "Farg'ona",
      shahar: "Marg'ilon",
      manzil: "Galatoy 82 A",
      tugilgan_sana: "01/21/2005",
      yunalishi: "Frontend Dasturchi",
      qushimcha_malumot: "Izlanuvchan,xatolar ustida yaxshi ishlay oladi",
      hozirgi_yashash_joyi: [43.34721024644568, 69.81948986127864],
      rasmi: "rasmichasi",
      pasport: "",
      oilasi: "",
      value: "",
    },
    {
      number: "2",
      key: 2,
      full_name: "Ravshanbek Fayziyev",
      telifon: "998992349999",
      viloyat: "Farg'ona",
      shahar: "Andijon",
      manzil: "Galatoy 82 A",
      tugilgan_sana: "09/09/2000",
      yunalishi: "BAckend Dasturchi",
      hozirgi_yashash_joyi: [40.34721024644568, 71.81948986127864],
      qushimcha_malumot: "yaxshi bola",
      rasmi: "rasm",
      oilasi: "",
      pasport: "",
      value: "",
    },
  ],
  scroll: { x: 1500, y: 380 },
};

export default XodimlarTemplate;
