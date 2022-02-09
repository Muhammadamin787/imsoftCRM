import React from 'react';
import {CUSTOMERS_PATH} from "../../pages/pageConstants/PageRoutes";
import {CUSTOMERS_PAGE} from "../../pages/pageConstants/PageTypes";
import PotentsialClientTemplate from '../ClientTemlates/PotentsialClientTemplate';
import RealClientTemplate from '../ClientTemlates/RealClientTemplate';
import RejactClientTemplate from '../ClientTemlates/RejactClientTemplate';


import {ProfileIcon} from "../../assets/icons/icons";

const CustomersTemplate = {
	text: "Mijozlar Ro'yxati",
	path: CUSTOMERS_PATH,
	icon: "ProfileIcon",
	type: CUSTOMERS_PAGE,
	tabs: [PotentsialClientTemplate, RealClientTemplate, RejactClientTemplate],
	columns: [
	]
};

export default CustomersTemplate;