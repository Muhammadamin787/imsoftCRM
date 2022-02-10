import React from "react";
import { TEST_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import {STRING, DATE, SELECT,PHONE, MAP, NUMBER, UPLOAD, IMAGE} from "../../components/Modal/InputTypes";
import {inputDeafultHeght,} from "../../constant/deafultStyle"


const MijozlarTempalte = {
  text: "Mijozlar",
  path: TEST_PATH,
  icon: "Faoliyat",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  modal:{
    width:1000,
  },
  form: [
    {
      grid: {
        columns: "repeat(18, 1fr)",
        rows: "repeat(5, 1fr)",
      },

      inputs: [
        {
          name: "raxbar",
          type: STRING,
          required: true,
          placeholder: "Raxbar",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
        },
        {
          name: "rahbar_telifon",
          type: PHONE,
          required: true,
          placeholder: "Telifon",
          gridColumn: "6 / 10",
          gridRow: "1 / 2",
        },
        {
          name: "opirator",
          type: STRING,
          required: true,
          placeholder: "Opirator",
          gridColumn: "1 / 6",
          gridRow: "2 / 3",
        },
        {
            name: "opirator_telifon",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "6 / 10",
            gridRow: "2 / 3",
          },
          {
            name: "foto1",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "1 / 4",
            gridRow: "3 / 6",
            height: inputDeafultHeght * 3,
          },
          {
            name: "foto2",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "4 / 7",
            gridRow: "3 / 6",
            height: inputDeafultHeght * 3,
          },
          {
            name: "foto3",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "7 / 10",
            gridRow: "3 / 6",
            height: inputDeafultHeght * 3,
          },
          {
            name: "rahbar_telifon2",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "10 / 15",
            gridRow: "1 / 2",
          },
          {
            name: "opirator_telifon2",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "10 / 15",
            gridRow: "2 / 3",
          },
          {
            name: "rahbar_tugilgan_sana",
            type: DATE,
            required: true,
            placeholder: "Tug'ilgan Sana",
            gridColumn: "15 / 19",
            gridRow: "1 / 2",
          },
          {
            name: "rahbar_tugilgan_sana",
            type: DATE,
            required: true,
            placeholder: "Tug'ilgan Sana",
            gridColumn: "15 / 19",
            gridRow: "2 / 3",
          },
          {
            name: "client_addres",
            type: MAP,
            required: true,
            placeholder: "Client Addres",
            gridColumn: "10 / 19",
            gridRow: "3 / 6",
            height: inputDeafultHeght * 3,
          },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "10%",
      align: "center",
    },
    {
      title: "Faoliyat turi",
      dataIndex: "faoliyat_turi",
      key: "Faoliyat turi",
      width: "100%",
    },
  ],
  data: [
    {
      number: "1",
      faoliyat_turi: "O'yin Faoliyati",
      key: 1,
    },
    {
      number: "2",
      faoliyat_turi: "Mehnat Faoliyati",
      color: "red",
      key: 2,
    },
  ],
};
export default MijozlarTempalte;
