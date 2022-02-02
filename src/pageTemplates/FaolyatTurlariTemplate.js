import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from '../components/Modal/ModalInputTypes';
import { Faoliyat } from "../assets/icons/icons";



const FaolyatTurlaiTemplate = {
  text: "Faolyat turlari",
  path: FAOLYAT_TURLARI_PATH,
  icon: <Faoliyat />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "2fr 1fr",
      inputs: [
        {
          label: "Faolyat turlari",
          name: "Faolyat turlari",
          type: STRING,
          required: true,
          value:"",
          placeholder:"Faolyat turlari"
        },
        {
          label: "Faolyat turlari",
          name: "Faolyat turlari",
          type: STRING,
          required: true,
          value:"",
          placeholder:"Faolyat turlari"

        },
      ],
    },
  ],
};

export default FaolyatTurlaiTemplate;
