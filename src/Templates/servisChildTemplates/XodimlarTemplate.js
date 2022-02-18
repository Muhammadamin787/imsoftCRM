import React from "react";
import {XODIMLAR_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {
    FileBlueIcon,
} from "../../assets/icons/icons";
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
import {inputDeafultHeght} from "../../constant/deafultStyle";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ViloyatlarTemplate from "./ViloyatlarTemplate";
import ShaharTumanTemplate from "./ShaharTumanTempilate";
import YunalishlarTemplate from "./YunalishlarTemplate";
import BigLength from "../../components/BigLength/BigLength";

const align = "center";
const XodimlarTemplate = {
    text: "Xodimlar",
    path: XODIMLAR_PATH,
    icon: "Xodimlar",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    mainUrl: "/workers",
    allData: {
        states: "/states/all",
        cities: "/cities/all",
    },
    modal: {
        style: {
            width: 1000,
            marginTop: "-80px",
        },
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
                    height: inputDeafultHeght,
                },
                {
                    name: "Yo'nalishi",
                    type: SELECT,
                    required: true,
                    placeholder: "Yo'nalishi",
                    label: "Yo'nalish",
                    gridColumn: "5 / 10",
                    gridRow: "2 / 3",
                    template: YunalishlarTemplate,
                    options: "cities",
                },
                {
                    label: "Viloyat",
                    name: "viloyat",
                    type: SELECT,
                    required: true,
                    placeholder: "viloyat",
                    gridColumn: "1 / 5",
                    gridRow: "3 / 4",
                    options: "states",
                    template: ViloyatlarTemplate
                },
                {
                    name: "shahar",
                    type: SELECT,
                    required: true,
                    placeholder: "Shahar",
                    label: "Shahar",
                    template: ShaharTumanTemplate,
                    gridColumn: "5 / 10",
                    gridRow: "3 / 4",
                },
                {
                    name: "manzil",
                    type: STRING,
                    required: true,
                    placeholder: "Manzil",
                    gridColumn: "1 / 10",
                    gridRow: "4 / 5",
                    label: "Manzil",
                    // height: "40px"
                },
                {
                    name: "qushimcha_malumot",
                    type: TEXTAREA,
                    required: true,
                    placeholder: "Qo'shimcha malumot",
                    gridColumn: "1 / 10",
                    gridRow: "5 / 7",
                    label: "Qo'shimcha malumot",
                    height: inputDeafultHeght * 1.4,
                },
                {
                    name: "telefon",
                    type: PHONE,
                    required: true,
                    placeholder: "Telefon",
                    gridColumn: "10 / 16",
                    gridRow: "1 / 2",
                    label: "Telefon",
                },
                {
                    name: "passport",
                    type: UPLOAD,
                    required: true,
                    placeholder: "Yo'nalish",
                    gridColumn: "10 / 13",
                    gridRow: "2 / 4",
                    // height: inputDeafultHeght * 1.2,
                    Iconic: "UploadFilePasport",
                    label: "Passport",
                },
                {
                    name: "oilasi",
                    type: UPLOAD,
                    required: true,
                    placeholder: "Oilasi",
                    gridColumn: "13 / 16",
                    gridRow: "2 / 4",
                    // height: inputDeafultHeght * 1.2,
                    Iconic: "UploadFileOilasi",
                    label: "Oilasi",
                },
                {
                    name: "hozirgi_yashash_joyi",
                    type: MAP,
                    required: true,
                    placeholder: "hozirgi turgan joyi (map quyiladi)",
                    gridColumn: "10 / 16",
                    gridRow: "4 / 7",
                    // height: inputDeafultHeght,
                    label: " "
                },
                {
                    label: " ",
                    name: "rasmi",
                    type: IMAGE,
                    required: true,
                    // placeholder: "rasmi",
                    gridColumn: "16 / 21",
                    gridRow: "1 / 7",
                },
            ],
        },
    ],

    

  filters: ["type_id"],
  columns: [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
      width: "10%",
      align,
      render: (text, data, index) => ++index,
    },
    {
      title: "F.I.Sh",
      dataIndex: "name",
      key: "name",
      width: "40%",
    },
    {
      title: "Telefon",
      dataIndex: "phone_number",
      key: "phone_number",
      width: "20%",
      align,
    },
    {
      title: "Viloyat",
      dataIndex: "state_id",
      key: "state_id",
      width: "20%",
      align,
    },
    {
      title: "Shahar",
      dataIndex: "region_id",
      key: "region_id",
      width: "20%",
      align,
    },
    {
      title: "Manzil",
      dataIndex: "address",
      key: "address",
      width: "40%",
    },
    {
      title: "Tug'ilgan sana",
      dataIndex: "born_date",
      key: "born_date",
      width: "26%",
      align,
    },
    {
      title: "Yo'nalish",
      dataIndex: "type_id",
      key: "type_id",
      onFilter: (value, record) => record.type_id.indexOf(value) === 0,
      width: "35%",
    },
    {
      title: "Rasmi",
      dataIndex: "developer_photo",
      key: "developer_photo",
      width: "10%",
      align,
      render: (_, record) => {
        return (
          <Zoom zoomMargin={10}>
            <picture>
              {/* <source media="(max-width: 800px)" srcSet={record.rasmi} /> */}
              <img
                alt="img"
                src={record.developer_photo}
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
      title: "Passport",
      dataIndex: "passport",
      key: "passport",
      width: "20%",
      align,
      render: (_, record) => {
        return (
          <Zoom zoomMargin={10}>
            <picture>
              {/* <source media="(max-width: 800px)" srcSet={record.rasmi} /> */}
              <img
                alt="img"
                src={record.passport}
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
      title: "Oilasi",
      dataIndex: "family",
      key: "family",
      width: "10%",
      align,
      render: (text) => <FileBlueIcon />,
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
      dataIndex: "about",
      key: "about",
      width: "45%",
      align,
      render: (text) => <BigLength text={text} />,
    },
  ],
  scroll: { x: 2000, y: 500 },
};

export default XodimlarTemplate;
