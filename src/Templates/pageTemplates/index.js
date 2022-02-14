// Main templates imports
import ClientTemplate from "./ClientTemplate";
import ProgrammsTemplate from "./ProgrammesTemplate";
import MainTemplate from "./MainTemplate";
import ServiceTemplate from "./ServiceTemplate";
import ReportTemplate from "./ReportTemplate";

// service template imports
import FaolyatTurlariTemplate from "../servisChildTemplates/FaolyatTurlariTemplate";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";
import ReklamalarTemplate from "../servisChildTemplates/ReklamalarTemplate";
import RegionlarTemplate from "../servisChildTemplates/RegionlarTemplate";
import ViloyatlarTemplate from "../servisChildTemplates/ViloyatlarTemplate";
import ShaharTumanTemplate from "../servisChildTemplates/ShaharTumanTempilate";
import YunalishlarTemplate from "../servisChildTemplates/YunalishlarTemplate";

/* ----------------------- client child Page import ---------------------- */
import PotentsialClientPage from "../ClientTemlates/PotensialClientTemplate";
import RealClientPage from "../ClientTemlates/RealClientTemplate";
import RejactClientPage from "../ClientTemlates/RejactClientTemplate";

// Basic routes templates
export const AllPages = [
  MainTemplate,
  ClientTemplate,
  ProgrammsTemplate,
  ServiceTemplate,
  ReportTemplate,
];

// child of service pages templates
export const AllServiceChildPages = [
  FaolyatTurlariTemplate,
  XodimlarTemplate,
  RegionlarTemplate,
  ReklamalarTemplate,
  ViloyatlarTemplate,
  ShaharTumanTemplate,
  YunalishlarTemplate,
];

export const AllClientChildPages = [
  PotentsialClientPage,
  RealClientPage,
  RejactClientPage,
];
