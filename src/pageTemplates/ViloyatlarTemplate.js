import React from 'react';
import {VILOYATLAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../components/functions/icons";
import { STRING } from '../components/Modal/ModalInputTypes';


const ViloyatlarTemplate = {
	text: "Viloyatlar",
	path: VILOYATLAR_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_CHILD_PAGES,
	forms: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  label: "Viloyatlar",
			  name: "Viloyatlar",
			  type: STRING,
			  required: true,
			},
		  ],
		},
	  ]
};

export default ViloyatlarTemplate;