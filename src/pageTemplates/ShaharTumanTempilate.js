import React from "react";
import { SHAHAR_TUMAN_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING, SELECT } from "../components/Modal/ModalInputTypes";
import { City } from "../assets/icons/icons";

const ShaharTumanTemplate = {
  text: "Shahar Tuman",
  path: SHAHAR_TUMAN_PATH,
  icon: <City />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
    {
      grid: "1fr",
      inputs: [
        {
          name: "Viloyat",
          type: STRING,
          required: true,
          placeholder: "viloyat",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        },
        {
          name: "Shahar/Tuman",
          type: SELECT,
          required: true,
          placeholder: "Shahar/Tuman",
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          option: [
            { value: "Olti ariq", key: "Olti ariq"},
            { value: "Qo'qon", key: "Qo'qon"},
            { value: "Marg'ilon", key: "Marg'ilon"},
            { value: "Farg'ona", key: "Farg'ona"},
          ],
        },
      ],
    },
  ],
};

export default ShaharTumanTemplate;
