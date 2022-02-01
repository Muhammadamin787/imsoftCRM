import React from "react";
import {
  FAOLYAT_TURLARI_PATH,
  SERVIS_PATH,
} from "../pages/pageConstants/PageRoutes";
import {
  SERVIS_PAGE,
  SERVIS_CHILD_PAGES,
} from "../pages/pageConstants/PageTypes";
import {
  ServiceIcon,
  Group,
  City,
  Faoliyat,
  Yunalishlar,
  Xodimlar,
  Regionlar,
  Reklamalar,
} from "../components/functions/icons";

import { AllServiceChildPages } from "../pageTemplates";
import FaoliyatTurlariTemplate from "./FaolyatTurlariTemplate";
import YunalishlarTemplate from "./YunalishlarTemplate";
import XodimlarTemplate from "./XodimlarTemplate";
import RegionlarTemplate from "./RegionlarTemplate";
import ReklamalarTemplate from "./ReklamalarTemplate";
import ViloyatlarTemplate from "./ViloyatlarTemplate"
import ShaharTumanTemplate from "./ShaharTumanTempilate"



const ServiceTemplate = {
  text: "Servis",
  path: SERVIS_PATH,
  icon: <ServiceIcon />,
  type: SERVIS_PAGE,
  sections: 
  [
    FaoliyatTurlariTemplate,
    YunalishlarTemplate,
    XodimlarTemplate,
    RegionlarTemplate,
    ReklamalarTemplate,
    ViloyatlarTemplate,
    ShaharTumanTemplate
    // {
    //   text: "Viloyatlar",
    //   icon: <City />,
    //   type: "",
    //   path: "/servis/viloyatlar",
    // },
    // {
    //   text: "Faoliyat turlari",
    //   icon: <Faoliyat />,
    //   type: SERVIS_CHILD_PAGES,
    //   path: FAOLYAT_TURLARI_PATH,
    // },

    // {
    //   text: "Yo'nalishlar",
    //   icon: <Yunalishlar />,
    //   type: "",
    //   path: "/servis/yunalishlar",
    // },

    // {
    //   text: "Shahar va tuman",
    //   icon: <Group />,
    //   type: "",
    //   path: "/servis/shahar_tuman",
    // },

    // {
    //   text: "Xodimlar",
    //   icon: <Xodimlar />,
    //   type: "",
    //   path: "/servis/xodimlar",
    // },
    // {
    //   text: "Reklamalar",
    //   icon: <Reklamalar />,
    //   type: "",
    //   path: "/servis/reklamalar",
    // },
    // {
    //   text: "Regionlar",
    //   icon: <Regionlar />,
    //   type: "",
    //   path: "/servis/regionlar",
    // },
  ],
};

export default ServiceTemplate;
