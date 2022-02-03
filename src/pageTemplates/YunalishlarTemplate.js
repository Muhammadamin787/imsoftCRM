import React from "react";
import { YUNALISHLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING } from "../components/Modal/ModalInputTypes";
import { Yunalishlar } from "../assets/icons/icons";

const YunalishlarTemplate = {
  text: "Yunalishlar",
  path: YUNALISHLAR_PATH,
  icon: <Yunalishlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "Yo'nalishlar",
          type: STRING,
          required: true,
          placeholder: "Yo'nalishlar",
        },
      ],
    },
  ],
};

export default YunalishlarTemplate;
