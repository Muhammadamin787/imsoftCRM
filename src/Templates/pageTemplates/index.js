// Main templates imports
import ClientTemplate from "./ClientTemplate";
import ProgrammsTemplate from "./ProgrammesTemplate";
import MainTemplate from "./MainTemplate";
import ServiceTemplate from "./ServiceTemplate";
import ReportTemplate from "./ReportTemplate";
import FaolyatTurlaiTemplate from "../servisChildTemplates/FaolyatTurlariTemplate";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";
import YunalishlarTemplate from "../servisChildTemplates/YunalishlarTemplate";
import ViloyatlarTemplate from "../servisChildTemplates/ViloyatlarTemplate";
import ReklamalarTemplate from "../servisChildTemplates/ReklamalarTemplate";
import RegionlarTemplate from "../servisChildTemplates/RegionlarTemplate";
import ShaharTumanTemplate from "../servisChildTemplates/ShaharTumanTempilate";


// Basic routes templates
export const AllPages = [
  MainTemplate,
  ClientTemplate,
  ProgrammsTemplate,
  ServiceTemplate,
  // ReportTemplate,
];

// child of service pages templates

export const AllServiceChildPages =[
  FaolyatTurlaiTemplate,
  XodimlarTemplate,
  YunalishlarTemplate,
  ViloyatlarTemplate,
  ReklamalarTemplate, 
  RegionlarTemplate,
  ShaharTumanTemplate
]
