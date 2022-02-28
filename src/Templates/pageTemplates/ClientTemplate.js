import {
  CLIENTS_PATH,
  POTENSIAL_MIJOZLAR,
} from "../../pages/pageConstants/PageRoutes";
import {
  CLIENTS_PAGE,
  CLIENTS_CHILD_PAGES,
} from "../../pages/pageConstants/PageTypes";
import PotensialClientTemplate from "../ClientTemlates/PotensialClientTemplate";
import RealClientTemplate from "../ClientTemlates/RealClientTemplate";
import RejactClientTemplate from "../ClientTemlates/RejactClientTemplate";

import CommentsTemplate from "../ClientTemlates/ClientModalTabs/CommentsTabTemplate";
import ContactsTemplate from "../ClientTemlates/ClientModalTabs/ContactsTemplate";
import CommonTemplate from "../ClientTemlates/ClientModalTabs/CommonTemplate";
const ClientTemplate = {
  ...PotensialClientTemplate,
  allData: {
    workers: "/workers/all",
},
  modal: {
    style: {
      width: 1200,
      marginTop: "-70px",
    },
    tabs: [CommonTemplate, ContactsTemplate, CommentsTemplate],
  },
  tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],
  text: "Mijozlar Ro'yxati",
  // path: POTENSIAL_MIJOZLAR,
  // icon: "ProfileIcon",
  // type: CLIENTS_CHILD_PAGES,
  // mainUrl: PotensialClientTemplate.mainUrl,
  // isOpenModal: false,
  // // allData: ["/clients"],
  // modal: {
  //     style: {
  //         width: 1200,
  //         marginTop: "-70px"
  //     },
  //     tabs: [
  //         CommonTemplate, ContactsTemplate, CommentsTemplate
  //     ]
  // },
  // tabs: [PotensialClientTemplate, RealClientTemplate, RejactClientTemplate],

  // columns: [...PotensialClientTemplate.columns],

  // filters: [...PotensialClientTemplate.filters],

  // data: [...PotensialClientTemplate.data],

  // scroll: {...PotensialClientTemplate.scroll}
};

export default ClientTemplate;
