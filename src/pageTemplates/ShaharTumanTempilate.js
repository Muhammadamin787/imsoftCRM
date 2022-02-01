import React from "react";
import { SHAHAR_TUMAN_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING, SELECT } from "../components/Modal/ModalInputTypes";
import { City } from "../components/functions/icons";

const ShaharTumanTemplate = {
  text: "Shahar Tuman",
  path: SHAHAR_TUMAN_PATH,
  icon: <City />,
  type: SERVIS_CHILD_PAGES,
  forms: [
    {
      grid: "1fr",
      inputs: [
        {
          label: "Viloyat",
          name: "viloyat",
          type: STRING,
          required: true,
        },
        {
          label: "Shahar/Tuman",
          name: "Shahar/Tuman",
          type: SELECT,
          required: true,
        },
      ],
    },
  ],
};

export default ShaharTumanTemplate;
