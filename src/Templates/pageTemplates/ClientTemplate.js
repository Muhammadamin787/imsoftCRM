import PotensialClientTemplate from '../ClientTemlates/PotensialClientTemplate';
import RealClientTemplate from '../ClientTemlates/RealClientTemplate';
import RejactClientTemplate from '../ClientTemlates/RejactClientTemplate'

import CommentsTemplate from '../ClientTemlates/ClientModalTabs/CommentsTabTemplate';
import ContactsTemplate from '../ClientTemlates/ClientModalTabs/ContactsTemplate';
import CommonTemplate from '../ClientTemlates/ClientModalTabs/CommonTemplate';
const ClientTemplate = {
    ...PotensialClientTemplate,
    text: "Mijozlar",
    modal: {
        style: {
            width: 1200,
            marginTop: "-70px"
        },
        tabs: [
            CommonTemplate,
             ContactsTemplate, CommentsTemplate
        ]
    },
    tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
    text: "Mijozlar Ro'yxati",
};

export default ClientTemplate;