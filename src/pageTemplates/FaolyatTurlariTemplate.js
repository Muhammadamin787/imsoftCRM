import React from "react";
import { FAOLYAT_TURLARI_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { ServiceIcon } from "../components/functions/icons";
import { STRING } from '../components/Modal/ModalInputTypes';


const FaolyatTurlaiTemplate = {
  text: "Faolyat turlari",
  path: FAOLYAT_TURLARI_PATH,
  icon: <ServiceIcon />,
  type: SERVIS_CHILD_PAGES,
  forms: [
    {
      grid: "1fr",
      inputs: [
        {
          label: "Faolyat turlari",
          name: "Faolyat turlari",
          type: STRING,
          required: true,
        },
      ],
    },
  ]
};

export default FaolyatTurlaiTemplate;
