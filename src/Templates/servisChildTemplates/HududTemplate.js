import React from "react";
import { HUDUD_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { SELECT, STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import ViloyatlarTemplate from "./ViloyatlarTemplate";


const HududTemplate = {
    text: "Hudud",
    path: HUDUD_PATH,
    icon: "Hudud",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    mainUrl: "/districts",
    allData: {
        states: "/states/all",
        cities: "/cities/all",
    },
    form: [
        {
            grid: {
                columns: "1fr 1fr",
                // rows: "1fr 1fr",
            },
            inputs: [
                {
                    label: "Hudud",
                    name: "name",
                    type: STRING,
                    required: true,
                    placeholder: "Hudud",
                    gridColumn: "1 / 3",
                    gridRow: "1 / 2",
                },
                {
                    label: "Shahar/Tuman",
                    name: "region_id",
                    type: SELECT,
                    options: "cities",
                    required: true,
                    placeholder: "Shahar/Tuman",
                    gridColumn: "1 / 3",
                    gridRow: "2 / 3",
                    autoSelect: [
                        "state_id"
                    ]
                },
                {
                    label: "Viloyat",
                    name: "state_id",
                    type: SELECT,
                    required: true,
                    options: "states",
                    placeholder: "Viloyat",
                    gridColumn: "1 / 3",
                    gridRow: "3 / 4",
                    template: ViloyatlarTemplate
                },
            ],
        },
    ],
    columns: [
        {
            title: <FieldNumberOutlined />,
            dataIndex: "id",
            key: "id",
            width: "5%",
            align: "center",
        },
        {
            title: "Nomi",
            dataIndex: "name",
            key: "Hudud nomi",
            width: "40%",
        },
        {
            title: "Shahar nomi",
            dataIndex: "city_name",
            key: "Hudud nomi",
            width: "40%",
        },
        {
            title: "Viloyat nomi",
            dataIndex: "state_name",
            key: "Viloyat nomi",
            width: "15%",
            align: "center",
        },
    ],
    data: [
        {
            number: "1",
            shahar_nomi: "Marg'ilon",
            viloyat_nomi: "Farg'ona",
            lokatsiya: "ertyui",
            key: 1,
        },
    ],
};

export default HududTemplate;
