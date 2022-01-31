import React from 'react';
import {REGIONLAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";
import { STRING, SELECT } from '../components/Modal/ModalInputTypes';


const RegionlarTemplate = {
	text: "Regionlar",
	path: REGIONLAR_PATH,
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
				name: "shahar/tuman",
				type: SELECT,
				required: true,
			  },
			//   {
			// 	label: "Shahar/Tuman",
			// 	name: "shahar/tuman",
			// 	type: SELECTION,
			// 	required: true,
			//   },

		  ],
		},
	  ]
};

export default RegionlarTemplate;