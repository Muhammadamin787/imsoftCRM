import React from "react";
import {SERVIS_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_PAGE} from "../../pages/pageConstants/PageTypes";

import FaoliyatTurlariTemplate from "../servisChildTemplates/FaolyatTurlariTemplate";
import YunalishlarTemplate from "../servisChildTemplates/YunalishlarTemplate";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";
import HududTemplate from "../servisChildTemplates/HududTemplate";
import ReklamalarTemplate from "../servisChildTemplates/ReklamalarTemplate";
import ViloyatlarTemplate from "../servisChildTemplates/ViloyatlarTemplate"
import ShaharTumanTemplate from "../servisChildTemplates/ShaharTumanTempilate"


const ServiceTemplate = {
  text: "Servis",
  path: SERVIS_PATH,
  icon: "ServiceIcon",
  type: SERVIS_PAGE,
  sections: 
  [
    FaoliyatTurlariTemplate,
    XodimlarTemplate,
    YunalishlarTemplate,
    ViloyatlarTemplate,
    ShaharTumanTemplate,
    HududTemplate,
    ReklamalarTemplate,
  ],
};

export default ServiceTemplate;
