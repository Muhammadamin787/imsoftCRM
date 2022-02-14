import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import {CLIENTS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {POTENSIAL_MIJOZLAR} from "../../pages/pageConstants/PageRoutes";

export const NewProgrammsTemplate = {
    text: "Yangi dasturlar",
    key: "0",
    path: "/newProgramms",
    allData: ["/projects"],
    type: CLIENTS_CHILD_PAGES,

    columns: [  
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "10%",
            align: "center"
        },
        {
            title: "Mijoz F.I.O",
            dataIndex: "fish",
            key: "FISh",
            width: "40%",
            align: "center"
        },
        {
            title: "Dastur nomi",
            dataIndex: "programm_name",
            key: "programm_name",
            width: "20%",
            align: "center"
        },
        {
            title: "Izoh",
            dataIndex: "izoh",
            key: "izoh",
            width: "20%",
            align: "center"
        },
        {
            title: "Ish olingan vaqti",
            dataIndex: "start_time",
            key: "start_time",
            width: "30%",
            align: "center"
        },
        {
            title: "Ish topshirish vaqti",
            dataIndex: "finish_time",
            key: "finish_time",
            width: "40%",
            align: "center"
        },
        {
            title: "Kim orqali",
            dataIndex: "by_client",
            key: "by_client",
            width: "30%",
            align: "center"
        },
        {
            title: "Hodim",
            dataIndex: "staff",
            key: "staff",
            onFilter: (value, record) => record.yonalish.indexOf(value) === 0,
            width: "30%",
            align: "center"
        },
    ],
}