import React from 'react';
import {SERVIS_PAGE, CUSTOMERS_PAGE, } from "./pageConstants/PageTypes";
import ServisPage from "./ServisPage/ServisPage";

export const PageIndex = ({currentPage}) => {
	switch (currentPage.type) {
		case SERVIS_PAGE:
			return <ServisPage page={currentPage}/>;
		case CUSTOMERS_PAGE:
			return <ServisPage page={currentPage}/>;	
		default:
			return <h1>Not found</h1>;
	}
}
