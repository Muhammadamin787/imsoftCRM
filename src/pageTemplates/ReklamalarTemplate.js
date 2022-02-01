import React from 'react';
import {REKLAMALAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import { STRING } from '../components/Modal/ModalInputTypes';
import {Reklamalar} from "../components/functions/icons";

const ReklamalarTemplate = {
	text: "Reklamalar",
	path: REKLAMALAR_PATH,
	icon: <Reklamalar/>,
	type: SERVIS_CHILD_PAGES,
	isOpenModal: false,
	form: [
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