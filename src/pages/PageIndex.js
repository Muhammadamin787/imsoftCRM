import React from 'react';
import {COMMON_PAGE} from "./pageConstants/PageTypes";
import CommonPage from "./commonPage/CommonPage";

export const PageIndex = ({currentPage}) => {
	switch (currentPage.type) {
		case COMMON_PAGE:
			return <CommonPage page={currentPage}/>;
		default:
			return <h1>Not found</h1>;
	}
}
