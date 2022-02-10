import React from "react";
import {
  SERVIS_PAGE,
  CLIENTS_PAGE,
  MAIN_PAGE,
  PROGRAMMES_PAGE,
  REPORT_PAGE,
  SERVIS_CHILD_PAGES,
  CLIENTS_CHILD_PAGES,
} from "./pageConstants/PageTypes";
import FirstPage from "./mainPage/FirstPage";
import ClientsPage from "./clientsPage/ClientsPage";
import ProgrammesPage from "./programmesPage/ProgrammesPage";
import ServicePage from "./servicePage/ServicePage";
import ReportPage from "./reportPage/ReportPage";
import ServicePageChild from "./servicePage/ServicePageChild/ServicePageChild";
import ClientPageChild from "./clientsPage/clientPageChild/ClientPageChild";
export const PageController = ({ page }) => {
  // console.log(page);
  switch (page.type) {
    case MAIN_PAGE:
      return <FirstPage page={page} />;
    case CLIENTS_PAGE:
      return <ClientsPage page={page} />;
    case PROGRAMMES_PAGE:
      return <ProgrammesPage page={page} />;
    case SERVIS_PAGE:
      return <ServicePage page={page} />;
    case REPORT_PAGE:
      return <ReportPage page={page} />;
    case SERVIS_CHILD_PAGES:
      return <ServicePageChild page={page} />;
    case CLIENTS_CHILD_PAGES:
      return <ClientPageChild page={page} />;
    default:
      return <h1>Not found</h1>;
  }
};
