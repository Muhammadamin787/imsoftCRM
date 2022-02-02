import React from "react";
import { REGIONLAR_PATH } from "../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../pages/pageConstants/PageTypes";
import { STRING, SELECT } from "../components/Modal/ModalInputTypes";
import { Regionlar } from "../components/functions/icons";

const RegionlarTemplate = {
  text: "Regionlar",
  path: REGIONLAR_PATH,
  icon: <Regionlar />,
  type: SERVIS_CHILD_PAGES,
  isOpenModal: false,
  form: [
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
          name: "shahar/tuman",
          type: SELECT,
          required: true,
        },
        {
          label: "Shahar/Tuman",
          name: "shahar/tuman",
          type: SELECT,
          required: true,
          options:[
            {value:"custom value 1", key: "custom value 1",},
            {value:"custom value 2", key: "custom value 2",},
            {value:"custom value 3", key: "custom value 3",},
            {value:"custom value 4", key: "custom value 5",},

          ]
        },
        //   {
        // 	label: "Shahar/Tuman",
        // 	name: "shahar/tuman",
        // 	type: SELECTION,
        // 	required: true,
        //   },
      ],
    },
  ],
};

export default RegionlarTemplate;
