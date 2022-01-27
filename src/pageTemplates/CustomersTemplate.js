import React from 'react';
import {CUSTOMERS_PATH} from "../pages/pageConstants/PageRoutes";
import {CUSTOMERS_PAGE} from "../pages/pageConstants/PageTypes";
import {ProfileIcon} from "../components/functions/icons";

const CustomersTemplate = {
	text: "Mijozlar Ro'yxati",
	path: CUSTOMERS_PATH,
	icon: <ProfileIcon/>,
	type: CUSTOMERS_PAGE,
	// submenus: [
	// 	// Service2,
	// ]
};

export default CustomersTemplate;