import React from 'react';
import {XODIMLAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";

const XodimlarTemplate = {
	text: "Xodimlar",
	path: XODIMLAR_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_CHILD_PAGES,
};

export default XodimlarTemplate;