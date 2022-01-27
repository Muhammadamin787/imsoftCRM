import React from 'react';
import {MAIN_PAGE} from "../pages/pageConstants/PageTypes";
import {MAIN_PATH} from "../pages/pageConstants/PageRoutes";
import {MainIcon} from "../components/functions/icons";

const MainTemplate = {
	text: "Asosiy Oyna",
	path: MAIN_PATH,
	icon: <MainIcon/>,
	type: MAIN_PAGE,
};

export default MainTemplate;