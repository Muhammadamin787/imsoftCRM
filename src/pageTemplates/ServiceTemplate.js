import React from "react";
import {SERVIS_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_PAGE} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../assets/icons/icons";

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
  icon: "ServiceIcon",
  type: SERVIS_PAGE,
  sections: 
  [
    FaoliyatTurlariTemplate,
    YunalishlarTemplate,
    XodimlarTemplate,
    RegionlarTemplate,
    ReklamalarTemplate,
    ViloyatlarTemplate,
    ShaharTumanTemplate,
  ],
};

export default ServiceTemplate;
