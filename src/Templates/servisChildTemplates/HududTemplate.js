import React from "react";
import { HUDUD_PATH } from "../../pages/pageConstants/PageRoutes";
import { SERVIS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { MAP, SELECT, STRING } from "../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import { inputDeafultHeght, } from "../../constant/deafultStyle"
import ShaharTumanTemplate from "./ShaharTumanTempilate";
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
                    name: "state_id",
                    type: SELECT,
                    required: true,
                    placeholder: "Viloyat",
                    gridColumn: "1 / 3",
                    gridRow: "1 / 2",
                    label: "Viloyat",
                    options: "states",
                    changeOtherSelect: "cities",
                    template: ViloyatlarTemplate,
                },
                {
                    name: "region_id",
                    type: SELECT,
                    required: true,
                    placeholder: "Shahar/Tuman",
                    gridColumn: "1 / 3",
                    gridRow: "2 / 3",
                    label: "Shahar/Tuman",
                    options: "cities",
                    changeOtherSelect:"states",
                    template: ShaharTumanTemplate
                },
                {
                    name: "name",
                    type: STRING,
                    required: true,
                    placeholder: "Hudud",
                    gridColumn: "1 / 3",
                    gridRow: "3 / 4",
                    label: "Hudud",
                }

                // {
                //     name: "Map bulishi  kk",
                //     type: MAP,
                //     required: true,
                //     placeholder: "map bulishi kk",
                //     gridColumn: "2 / 3",
                //     gridRow: "1 / 3",
                //     height: inputDeafultHeght * 2.5,
                // },

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
