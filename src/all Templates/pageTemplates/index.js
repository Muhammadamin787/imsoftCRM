// Main templates imports
import CustomersTemplate from "./CustomersTemplate";
import ProgrammsTemplate from "./ProgrammesTemplate";
import MainTemplate from "./MainTemplate";
import ServiceTemplate from "./ServiceTemplate";
import ReportTemplate from "./ReportTemplate";

// service template imports
import FaolyatTurlariTemplate from "./FaolyatTurlariTemplate";
import XodimlarTemplate from "./XodimlarTemplate";
import ReklamalarTemplate from "./ReklamalarTemplate";
import RegionlarTemplate from "./RegionlarTemplate";
import ViloyatlarTemplate from "./ViloyatlarTemplate";
import ShaharTumanTemplate from "./ShaharTumanTempilate";
import YunalishlarTemplate from "./YunalishlarTemplate";

/* ----------------------- customers child Page import ---------------------- */
import PotentsialClientPage from "../ClientTemlates/PotentsialClientTemplate";
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
