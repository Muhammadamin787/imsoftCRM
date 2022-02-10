import {CLIENTS_PATH} from "../../pages/pageConstants/PageRoutes";
import {CLIENTS_PAGE} from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from '../ClientTemlates/PotensialClientTemplate';
import RealClientTemplate from '../ClientTemlates/RealClientTemplate';
import RejactClientTemplate from '../ClientTemlates/RejactClientTemplate'

import {ProfileIcon} from "../../assets/icons/icons";
import CommentsTemplate from '../ClientTemlates/ClientModalTabs/CommentsTabTemplate';
import ContactsTemplate from '../ClientTemlates/ClientModalTabs/ContactsTemplate';
import CommonTemplate from '../ClientTemlates/ClientModalTabs/CommonTemplate';

const ClientTemplate = {
	text: "Mijozlar Ro'yxati",
	path: CLIENTS_PATH,
	icon: "ProfileIcon",
	type: CLIENTS_PAGE,
	modal:{
		width:1200,
	  },
	modalTabs:[CommonTemplate, ContactsTemplate, CommentsTemplate],
	tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
	columns: [
	]
};

export default ClientTemplate;