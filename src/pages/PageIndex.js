import React from 'react';
import {SERVIS_PAGE, CUSTOMERS_PAGE, MAIN_PAGE, PROGRAMMES_PAGE, REPORT_PAGE,} from "./pageConstants/PageTypes";
import FirstPage from "./mainPage/FirstPage";
import CustomersPage from "./customersPage/CustomersPage";
import ProgrammesPage from "./programmesPage/ProgrammesPage";
import ServicePage from "./servicePage/ServicePage";
import ReportPage from "./reportPage/ReportPage";

export const PageIndex = ({page}) => {
	switch (page.type) {
		case MAIN_PAGE:
			return <FirstPage page={page}/>;
		case CUSTOMERS_PAGE:
			return <CustomersPage page={page}/>;
		case PROGRAMMES_PAGE:
			return <ProgrammesPage page={page}/>;
		case SERVIS_PAGE:
			return <ServicePage page={page}/>;
		case REPORT_PAGE:
			return <ReportPage page={page}/>;
		default:
			return <h1>Not found</h1>;
	}
}
