import React from 'react';
import {SHAHAR_TUMAN_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";
import { STRING, SELECT } from '../components/Modal/ModalInputTypes';


const ShaharTumanTemplate = {
	text: "Shahar Tuman",
	path: SHAHAR_TUMAN_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_CHILD_PAGES,
	forms: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  label: "Viloyat",
			  name: "viloyat",
			  type: STRING,
			  required: true,
			},
			{
				label: "Shahar/Tuman",
				name: "Shahar/Tuman",
				type: SELECT,
				required: true,
			  },
		  ],
		},
	  ]
};

export default ShaharTumanTemplate;