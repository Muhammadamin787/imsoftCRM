import React from "react";
import { XODIMLAR_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { FileBlueIcon } from "../../assets/icons/icons";
import {
  STRING,
  DATE,
  SELECT,
  TEXTAREA,
  PHONE,
  UPLOAD,
  MAP,
  PICTURE_WALL,
} from "../../components/Modal/InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import ViloyatlarTemplate from "./ViloyatlarTemplate";
import ShaharTumanTemplate from "./ShaharTumanTempilate";
import YunalishlarTemplate from "./YunalishlarTemplate";
import BigLength from "../../components/BigLength/BigLength";
import ImgZoom from "../../components/image zoom/ImgZoom";
import Zoom from "react-medium-image-zoom";
import GetLocation from "../../components/Location/Location";
import {Base, BaseUrl} from "../../BaseUrl";

const align = "center";
const XodimlarTemplate = {
  text: "Xodimlar",
  path: XODIMLAR_PATH,
  icon: "Xodimlar",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  tableItem: [],
  mainUrl: "/workers",
  allData: {
    states: "/states/all",
    cities: "/cities/all",
    directions: "/directions/all",
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
          name: "name",
          type: STRING,
          required: true,
          placeholder: "F.I.SH",
          gridColumn: "1 / 10",
          gridRow: "1 / 2",
          label: "F.I.SH",
          autoFocus: true,
        },
        {
          name: "born_date",
          type: DATE,
          required: true,
          placeholder: "Tug'ilgan sana",
          gridColumn: "1 / 5",
          gridRow: "2 / 3",
          label: "Tug'ilgan sana",
          height: inputDeafultHeght,
        },
        {
          label: "Yo'nalish",
          name: "type_id",
          type: SELECT,
          required: true,
          placeholder: "Yo'nalishi",
          gridColumn: "5 / 10",
          gridRow: "2 / 3",
          template: YunalishlarTemplate,
          options: "directions",
        },
        {
          label: "Viloyat",
          name: "state_id",
          type: SELECT,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 5",
          gridRow: "3 / 4",
          options: "states",
          template: ViloyatlarTemplate,
        },
        {
          label: "Shahar",
          name: "region_id",
          type: SELECT,
          required: true,
          placeholder: "Shahar",
          template: ShaharTumanTemplate,
          gridColumn: "5 / 10",
          options: "cities",
          gridRow: "3 / 4",
        },
        {
          label: "Manzil",
          name: "address",
          type: STRING,
          required: true,
          placeholder: "Manzil",
          gridColumn: "1 / 10",
          gridRow: "4 / 5",
          // height: "40px"
        },
        {
          label: "Qo'shimcha malumot",
          name: "about",
          type: TEXTAREA,
          required: true,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "1 / 10",
          gridRow: "5 / 7",
          height: inputDeafultHeght * 1.4,
        },
        {
          label: "Telefon",
          name: "phone_number",
          type: PHONE,
          required: true,
          placeholder: "Telefon",
          gridColumn: "10 / 16",
          gridRow: "1 / 2",
        },
        {
          type: UPLOAD,
          name: "passport",
          filePath: "/workers/image",
          required: true,
          gridColumn: "10 / 13",
          gridRow: "2 / 4",
          Iconic: "UploadFilePasport",
          label: "Passport",
        },
        {
          type: UPLOAD,
          name: "family",
          filePath: "/workers/image",
          required: true,
          gridColumn: "13 / 16",
          gridRow: "2 / 4",
          label: "Oilasi",
          Iconic: "UploadFileOilasi",
        },
        {
          type: MAP,
          required: true,
          placeholder: "hozirgi turgan joyi (map quyiladi)",
          gridColumn: "10 / 16",
          gridRow: "4 / 7",
          // height: inputDeafultHeght,
          label: " ",
        },
        {
          label: " ",
          name: "developer_photo",
          type: PICTURE_WALL,
          filePath: "/workers/image",
          required: true,
          gridColumn: "16 / 21",
          gridRow: "1 / 7",
          fileName: "developer_photo",
        },
      ],
    },
  ],
  filters: ["type_name", "region_name", "state_name"],
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
      dataIndex: "state_name",
      key: "state_name",
      width: "20%",
      align,
    },
    {
      title: "Shahar",
      dataIndex: "region_name",
      key: "region_name",
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
      dataIndex: "type_name",
      key: "type_name",
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
      dataIndex: "loc",
      key: "loc",
      width: "15%",
      align,
      render: (_, record, i) => <GetLocation record={record} />,
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
