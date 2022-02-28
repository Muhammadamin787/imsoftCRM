import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import { STRING } from "../../components/Modal/InputTypes";

const FaolyatTurlaiTemplate = {
  text: "Faolyat turlari",
  path: FAOLYAT_TURLARI_PATH,
  icon: "Faoliyat",
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  mainUrl: "/activity-types",
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
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
      render: (text, data, index) => ++index,
    },
    {
      title: "Faoliyat turi",
      dataIndex: "name",
      key: "Faoliyat turi",
      width: "100%",
    },
  ],
};
export default FaolyatTurlaiTemplate;
