import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from '../components/Modal/ModalInputTypes';
import { Faoliyat } from "../components/functions/icons";



const FaolyatTurlaiTemplate = {
  text: "Faolyat turlari",
  path: FAOLYAT_TURLARI_PATH,
  icon: <Faoliyat />,
  type: SERVIS_CHILD_PAGES,
  forms: [
    {
      grid: "1fr",
      isOpen: false,
      inputs: [
        {
          label: "Faolyat turlari",
          name: "Faolyat turlari",
          type: STRING,
          required: true,
        },
      ],
    },
  ],
  isOpenModal: true,
};

export default FaolyatTurlaiTemplate;
