import {CLIENTS_PATH} from "../../pages/pageConstants/PageRoutes";
import {CLIENTS_PAGE} from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from '../ClientTemlates/PotensialClientTemplate';
import RealClientTemplate from '../ClientTemlates/RealClientTemplate';
import RejactClientTemplate from '../ClientTemlates/RejactClientTemplate'

import CommentsTemplate from '../ClientTemlates/ClientModalTabs/CommentsTabTemplate';
import ContactsTemplate from '../ClientTemlates/ClientModalTabs/ContactsTemplate';
import CommonTemplate from '../ClientTemlates/ClientModalTabs/CommonTemplate';

const ClientTemplate = {
    text: "Mijozlar Ro'yxati",
    path: CLIENTS_PATH,
    icon: "ProfileIcon",
    type: CLIENTS_PAGE,
    mainUrl:"/clients",
    isOpenModal: false,
    // allData: ["/clients"],
    modal: {
        style: {
            width: 1200,
            marginTop: "-70px"
        },
        tabs: [
            CommonTemplate, ContactsTemplate, CommentsTemplate
        ]
    },
    tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
    columns: [...PotensialClientTemplate.columns],
    filters: [...PotensialClientTemplate.filters],
    data: [...PotensialClientTemplate.data],
};

export default ClientTemplate;