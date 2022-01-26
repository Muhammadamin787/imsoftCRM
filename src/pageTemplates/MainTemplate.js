import React from 'react';
import {COMMON_PAGE} from "../pages/pageConstants/PageTypes";
import {MAIN_PATH} from "../pages/pageConstants/PageRoutes";
import {MainIcon} from "../components/functions/icons";

const MainTemplate = {
    text: "Бош меню",
    path: MAIN_PATH,
    icon: <MainIcon/>,
    type: COMMON_PAGE,
};

export default MainTemplate;