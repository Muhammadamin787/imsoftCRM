import React from 'react';
import {SERVIS_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_PAGE} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";

const ServiceTemplate = {
	text: "Servis",
	path: SERVIS_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_PAGE,
	// submenus: [
		// Service2,
	// ]
};

export default ServiceTemplate;