import React from "react";
import { XODIMLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from "../components/Modal/ModalInputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {Xodimlar} from '../assets/icons/icons';

/* ------------------------------------ / ----------------------------------- */

const align = "center";
const XodimlarTemplate = {
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: <Xodimlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          label: "Xodimlar",
          name: "Xodimlar",
          type: STRING,
          required: true,
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
