import React from "react";
import { XODIMLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { Xodimlar } from "../components/functions/icons";
import { STRING } from "../components/Modal/ModalInputTypes";



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
};

export default XodimlarTemplate;
