import React from 'react';
import {SERVIS_PAGE, CUSTOMERS_PAGE, MAIN_PAGE, PROGRAMMES_PAGE, REPORT_PAGE,} from "./pageConstants/PageTypes";
import FirstPage from "./mainPage/FirstPage";
import CustomersPage from "./customersPage/CustomersPage";
import ProgrammesPage from "./programmesPage/ProgrammesPage";
import ServicePage from "./servicePage/ServicePage";
import ReportPage from "./reportPage/ReportPage";

export const PageIndex = ({currentPage}) => {
	switch (currentPage.type) {
		case MAIN_PAGE:
			return <FirstPage page={currentPage}/>;
		case CUSTOMERS_PAGE:
			return <CustomersPage page={currentPage}/>;
		case PROGRAMMES_PAGE:
			return <ProgrammesPage page={currentPage}/>;
		case SERVIS_PAGE:
			return <ServicePage page={currentPage}/>;
		case REPORT_PAGE:
			return <ReportPage page={currentPage}/>;
		default:
			return <h1>Not found</h1>;
	}
}
