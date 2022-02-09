// Main templates imports
import CustomersTemplate from "./CustomersTemplate";
import ProgrammsTemplate from "./ProgrammesTemplate";
import MainTemplate from "./MainTemplate";
import ServiceTemplate from "./ServiceTemplate";
import ReportTemplate from "../servisChildTemplates/ReportTemplate";

// service template imports
import FaolyatTurlariTemplate from "../servisChildTemplates/FaolyatTurlariTemplate";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";
import ReklamalarTemplate from "../servisChildTemplates/ReklamalarTemplate";
import RegionlarTemplate from "../servisChildTemplates/RegionlarTemplate";
import ViloyatlarTemplate from "../servisChildTemplates/ViloyatlarTemplate";
import ShaharTumanTemplate from "../servisChildTemplates/ShaharTumanTempilate";
import YunalishlarTemplate from "../servisChildTemplates/YunalishlarTemplate";

/* ----------------------- customers child Page import ---------------------- */
import PotentsialClientPage from "../ClientTemlates/PotensialClientTemplate";
import RealClientPage from "../ClientTemlates/RealClientTemplate";
import RejactClientPage from "../ClientTemlates/RejactClientTemplate";

// Basic routes templates
export const AllPages = [
  MainTemplate,
  CustomersTemplate,
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

export const AllCustomerChildPages = [
  PotentsialClientPage,
  RealClientPage,
  RejactClientPage,
];
