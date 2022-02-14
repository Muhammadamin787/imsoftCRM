import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import {STRING} from "../../components/Modal/InputTypes";

const FaolyatTurlaiTemplate = {
  text: "Faolyat turlari",
  path: FAOLYAT_TURLARI_PATH,
  icon: "Faoliyat",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  allData:["/activity-types/"],
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "name",
          type: STRING,
          required: true,
          placeholder: "Faolyat turi nomi",
          label: "Faolyat turi"
        },
        {
          name: "category_id",
          type: STRING,
          required: true,
          placeholder: "Category",
          label: "category",

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
      number: "21",
      faoliyat_turi: "O'yin Faoliyati11",
      key: 1,
    },
    {
      number: "22",
      faoliyat_turi: "Mehnat Faoliyati",
      color: "red",
      key: 2,
    },
    {
      number: "23",
      faoliyat_turi: "O'qish Faoliyati",
      key: 3,
    },
    {
      number: "24",
      faoliyat_turi: "O'yin Faoliyati",
      key: 4,
    },
    {
      number: "25",
      faoliyat_turi: "O'yin Faoliyati",
      key: 5,
    },
    {
      number: "26",
      faoliyat_turi: "O'yin Faoliyati",
      key: 6,
    },
    {
      number: "27",
      faoliyat_turi: "O'yin Faoliyati",
      key: 7,
    },
    {
      number: "28",
      faoliyat_turi: "O'yin Faoliyati",
      key: 8,
    },
    {
      number: "29",
      faoliyat_turi: "O'yin Faoliyati",
      key: 9,
    },
    {
      number: "20",
      faoliyat_turi: "O'yin Faoliyati",
      key: 10,
    },
    {
      number: "21",
      faoliyat_turi: "O'yin Faoliyati",
      key: 11,
    },
    {
      number: "22",
      faoliyat_turi: "O'yin Faoliyati",
      key: 12,
    },
    {
      number: "23",
      faoliyat_turi: "O'yin Faoliyati",
      key: 13,
    },
    {
      number: "24",
      faoliyat_turi: "O'yin Faoliyati",
      key: 14,
    },
    {
      number: "25",
      faoliyat_turi: "O'yin Faoliyati",
      key: 15,
    },
    {
      number: "26",
      faoliyat_turi: "O'yin Faoliyati",
      key: 16,
    },
  ],
};
export default FaolyatTurlaiTemplate;
