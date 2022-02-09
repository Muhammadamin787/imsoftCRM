import React from "react";
import {
  SERVIS_PAGE,
  CLINETS_PAGE,
  MAIN_PAGE,
  PROGRAMMES_PAGE,
  REPORT_PAGE,
  SERVIS_CHILD_PAGES,
  CLINETS_CHILD_PAGES,
} from "./pageConstants/PageTypes";
import FirstPage from "./mainPage/FirstPage";
import ClinetsPage from "./clinetsPage/ClinetsPage";
import ProgrammesPage from "./programmesPage/ProgrammesPage";
import ServicePage from "./servicePage/ServicePage";
import ReportPage from "./reportPage/ReportPage";
import ServicePageChild from "./servicePage/ServicePageChild/ServicePageChild";
import ClinetPageChild from "./clinetsPage/clinetPageChild/ClinetPageChild";
export const PageController = ({ page }) => {
  console.log(page);
  switch (page.type) {
    case MAIN_PAGE:
      return <FirstPage page={page} />;
    case CLINETS_PAGE:
      return <ClinetsPage page={page} />;
    case PROGRAMMES_PAGE:
      return <ProgrammesPage page={page} />;
    case SERVIS_PAGE:
      return <ServicePage page={page} />;
    case REPORT_PAGE:
      return <ReportPage page={page} />;
    case SERVIS_CHILD_PAGES:
      return <ServicePageChild page={page} />;
    case CLINETS_CHILD_PAGES:
      return <ClinetPageChild page={page} />;
    default:
      return <h1>Not found</h1>;
  }
};
