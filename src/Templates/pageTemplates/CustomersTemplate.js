import React from 'react';
import {CUSTOMERS_PATH} from "../../pages/pageConstants/PageRoutes";
import {CUSTOMERS_PAGE} from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from '../ClientTemlates/PotensialClientTemplate';
import RealClientTemplate from '../ClientTemlates/RealClientTemplate';
import RejactClientTemplate from '../ClientTemlates/RejactClientTemplate'


import {ProfileIcon} from "../../assets/icons/icons";

const CustomersTemplate = {
	text: "Mijozlar Ro'yxati",
	path: CUSTOMERS_PATH,
	icon: "ProfileIcon",
	type: CUSTOMERS_PAGE,
	tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
	
};

export default CustomersTemplate;