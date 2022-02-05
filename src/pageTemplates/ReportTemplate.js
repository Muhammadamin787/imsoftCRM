import React from 'react';
import {REPORT_PATH} from "../pages/pageConstants/PageRoutes";
import {REPORT_PAGE} from "../pages/pageConstants/PageTypes";
import { STRING } from "../components/Modal/ModalInputTypes";
import {VectorIcon} from "../assets/icons/icons";

const ReportTemplate = {
	text: "Xisobot",
	path: REPORT_PATH,
	icon: <VectorIcon/>,
	type: REPORT_PAGE,
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


};

export default ReportTemplate;