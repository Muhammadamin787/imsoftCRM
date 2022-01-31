import React from "react";
import {
  FAOLYAT_TURLARI_PATH,
  SERVIS_PATH,
} from "../pages/pageConstants/PageRoutes";
import {
  SERVIS_PAGE,
  SERVIS_CHILD_PAGES,
} from "../pages/pageConstants/PageTypes";
import {
  ServiceIcon,
  Group,
  City,
  Faoliyat,
  Yunalishlar,
  Xodimlar,
  Regionlar,
  Reklamalar,
} from "../components/functions/icons";

const ServiceTemplate = {
  text: "Servis",
  path: SERVIS_PATH,
  icon: <ServiceIcon />,
  type: SERVIS_PAGE,
  sections: [
    {
      title: "Viloyatlar",
      icon: <City />,
      type: "",
      path: "/servis/viloyatlar",
    },
    {
      title: "Faoliyat turlari",
      icon: <Faoliyat />,
      type: SERVIS_CHILD_PAGES,
      path: FAOLYAT_TURLARI_PATH,
    },

    {
      title: "Yo'nalishlar",
      icon: <Yunalishlar />,
      type: "",
      path: "/servis/yunalishlar",
    },

    {
      title: "Shahar va tuman",
      icon: <Group />,
      type: "",
      path: "/servis/shahar_tuman",
    },

    {
      title: "Xodimlar",
      icon: <Xodimlar />,
      type: "",
      path: "/servis/xodimlar",
    },
    {
      title: "Reklamalar",
      icon: <Reklamalar />,
      type: "",
      path: "/servis/reklamalar",
    },
    {
      title: "Regionlar",
      icon: <Regionlar />,
      type: "",
      path: "/servis/regionlar",
    },
  ],
};

export default ServiceTemplate;
