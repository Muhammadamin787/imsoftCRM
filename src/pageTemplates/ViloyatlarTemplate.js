import React from 'react';
import {VILOYATLAR_PATH} from "../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../pages/pageConstants/PageTypes";
import {ServiceIcon} from "../assets/icons/icons";
import { STRING } from '../components/Modal/ModalInputTypes';
import {
	Group
  } from "../assets/icons/icons";
  

const ViloyatlarTemplate = {
	text: "Viloyatlar",
	path: VILOYATLAR_PATH,
	icon: <Group/>,
	type: SERVIS_CHILD_PAGES,
	isOpenModal: false,
	form: [
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