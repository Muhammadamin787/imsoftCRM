import React from 'react';
import {REPORT_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import { STRING } from "../components/Modal/ModalInputTypes";
import {VectorIcon} from "../assets/icons/icons";

const ReportTemplate = {
	text: "Xisobot",
	path: REPORT_PATH,
	icon: <VectorIcon/>,
	type: SERVIS_CHILD_PAGES,
	isOpenModal: true,
	form: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  label: "Xisobotlar",
			  name: "Xisobotlar",
			  type: STRING,
			  required: true,
			},
		  ],
		},
	  ],

	// sections: [],
	// submenus: [
	// 	// Service2,
	// ]
};

export default ReportTemplate;