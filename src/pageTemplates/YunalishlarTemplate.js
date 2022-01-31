import React from 'react';
import {ServiceIcon} from "../components/functions/icons";
import { YUNALISHLAR_PATH } from '../pages/pageConstants/PageRoutes';
import { SERVIS_CHILD_PAGES } from '../pages/pageConstants/PageTypes';
import { STRING } from '../components/Modal/ModalInputTypes';


const YunalishlarTemplate = {
	text: "Yunalishlar",
	path: YUNALISHLAR_PATH,
	icon: <ServiceIcon/>,
	type: SERVIS_CHILD_PAGES,
	forms: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  label: "Yunalishlar",
			  name: "Yunalishlar",
			  type: STRING,
			  required: true,
			},
		  ],
		},
	  ]
};

export default YunalishlarTemplate;