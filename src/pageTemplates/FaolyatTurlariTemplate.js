import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from '../components/Modal/ModalInputTypes';
import { Faoliyat } from "../assets/icons/icons";



const FaolyatTurlaiTemplate = {
  text: "Faolyat turilari",
  path: FAOLYAT_TURLARI_PATH,
  icon: <Faoliyat />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "Faolyat turlari",
          type: STRING,
          required: true,
          placeholder:"Faolyat turi nomi"
        },
      ],
    },
  ],
};

export default FaolyatTurlaiTemplate;
