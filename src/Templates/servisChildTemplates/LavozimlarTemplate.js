import React from "react";
import {LAVOZIM_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {STRING} from "../../components/Modal/InputTypes";

const  LavozimlarTemplate = {
    text: "Lavozimlar",
    path: LAVOZIM_PATH,
    icon: "Xodimlar",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    mainUrl:"/directions",
    modal: {
        style: {
            // width: 500,
            // marginTop: "-70px"
        }
    },
    form: [
        {
            grid: "1fr",
            inputs: [
                {
                    name: "name",
                    type: STRING,
                    placeholder: "Lavozimlar",
                    label: "Lavozimlar",
                    required: true,
                },
            ],
        },
    ],
    columns: [
        {
            title: "№",
            dataIndex: "number",
            key: "number",
            width: "5%",
            align: "center",
            render: (text, data, index) => ++index
        },
        {
            title: "Lavozim nomi",
            dataIndex: "name",
            key: "name",
            width: "95%",
        },
    ],
};

export default LavozimlarTemplate;
