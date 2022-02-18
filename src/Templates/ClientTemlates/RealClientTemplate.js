import React from "react";
import { REAL_MIJOZLAR } from "../../pages/pageConstants/PageRoutes";
import { CLIENTS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from "./PotensialClientTemplate";
import "react-medium-image-zoom/dist/styles.css";
import { ClientTemplateApi } from "../../constant/apiLine/apiLine";
const RealClientTemplate = {
  ...PotensialClientTemplate,
  text: "Real mijozlar",
  path: REAL_MIJOZLAR,
  key: "2",
  type: CLIENTS_CHILD_PAGES,
  isOpenModal: false,

  mainUrl: ClientTemplateApi,

  // filters: [...PotensialClientTemplate.filters],

  // columns: [...PotensialClientTemplate.columns],

  // scroll: { x: 2200, y: 1500 },
};

export default RealClientTemplate;
//
