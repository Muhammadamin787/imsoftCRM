import React from 'react';
import {NEWS_PATH} from "../pages/pageConstants/PageRoutes";
import {COMMON_PAGE} from "../pages/pageConstants/PageTypes";
import {GlobusIcon} from "../components/functions/icons";

const ServiceTemplate = {
	text: "Янгиликлар",
	path: NEWS_PATH,
	icon: <GlobusIcon/>,
	type: COMMON_PAGE,
	submenus: [
		// Service2,
	],
};

export default ServiceTemplate;