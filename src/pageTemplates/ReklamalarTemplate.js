import React from 'react';
import {REKLAMALAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";
import { STRING } from '../components/Modal/ModalInputTypes';

const ReklamalarTemplate = {
	text: "Reklamalar",
	path: REKLAMALAR_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_CHILD_PAGES,
	forms: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  label: "Reklamalar nomi",
			  name: "reklamalar",
			  type: STRING,
			  required: true,
			},
		  ],
		},
	  ]
};

export default ReklamalarTemplate;