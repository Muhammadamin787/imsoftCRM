import React from "react";
import {YUNALISHLAR_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {STRING} from "../../components/Modal/InputTypes";
import {FieldNumberOutlined} from "@ant-design/icons";

const YunalishlarTemplate = {
    text: "Yunalishlar",
    path: YUNALISHLAR_PATH,
    icon: "Yunalishlar",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    mainUrl:"/directions",
    // allData: ["/directions/"],
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
                    placeholder: "Yo'nalishlar",
                    label: "Yo'nalish"
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
            title: "Yo'nalish nomi",
            dataIndex: "name",
            key: "name",
            width: "95%",
        },
    ],
};

export default YunalishlarTemplate;
