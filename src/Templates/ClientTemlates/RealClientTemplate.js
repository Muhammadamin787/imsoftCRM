import React from "react";
import {REAL_MIJOZLAR} from '../../pages/pageConstants/PageRoutes';
import {CLIENTS_CHILD_PAGES} from '../../pages/pageConstants/PageTypes';
import PotensialClientTemplate from './PotensialClientTemplate';
import "react-medium-image-zoom/dist/styles.css";

const RealClientTemplate = {
  text: "Real mijozlar",
  path: REAL_MIJOZLAR,
  key: "1",
  type: CLIENTS_CHILD_PAGES,
  isOpenModal: false,
  
  mainUrl: "/clients/status/2",
  //   form: [
  //     {
  //       grid: "1fr",
  //       inputs: [
  //         {
  //           name: "Yunalishlar",
  //           type: STRING,
  //           required: true,
  //           name: "Yo'nalishlar",
  //           type: STRING,
  //           required: true,
  //           placeholder: "Yo'nalishlar",
  //           value: "",
  //         },
  //       ],
  //     },
  //   ],
  
  filters: [
    ...PotensialClientTemplate.filters
  ],
  
  columns: [
    ...PotensialClientTemplate.columns
  ],
  scroll: { x: 2200, y: 1500 },
};

export default RealClientTemplate;
// 