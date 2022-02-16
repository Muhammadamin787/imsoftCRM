import React from "react";
import {REGIONLAR_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {MAP, SELECT, STRING} from "../../components/Modal/InputTypes";
import {FieldNumberOutlined} from "@ant-design/icons";
import {inputDeafultHeght,} from "../../constant/deafultStyle"
import ShaharTumanTemplate from "./ShaharTumanTempilate";
import ViloyatlarTemplate from "./ViloyatlarTemplate";

const RegionlarTemplate = {
    text: "Regionlar",
    path: REGIONLAR_PATH,
    icon: "Regionlar",
    type: SERVIS_CHILD_PAGES,
    isOpenModal: false,
    mainUrl:"/districts",
    allData: {
        states:"/states/all",
        cities:"/cities/all",
     },
    form: [
        {
            grid: {
                columns: "1fr 1fr",
                rows: "1fr 1fr",
            },
            inputs: [
                {
                    name: "viloyat",
                    type: SELECT,
                    required: true,
                    placeholder: "Viloyat",
                    gridColumn: "1 / 2",
                    gridRow: "1 / 2",
                    label: "Viloyat",
                    options: "states",
                    template: ViloyatlarTemplate
                },
                {
                    name: "shahar/tuman",
                    type: SELECT,
                    required: true,
                    placeholder: "Shahar/Tuman",
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3",
                    label: "Shahar/Tuman",
                    options: "cities",
                    template:ShaharTumanTemplate    
                },
                {
                    name: "Map bulishi  kk",
                    type: MAP,
                    required: true,
                    placeholder: "map bulishi kk",
                    gridColumn: "2 / 3",
                    gridRow: "1 / 3",
                    height: inputDeafultHeght * 2.5,
                },

            ],
        },
    ],
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "id",
            key: "id",
            width: "5%",
            align: "center",
        },
        {
            title: "Shahar nomi",
            dataIndex: "name",
            key: "Shahar nomi",
            width: "40%",
        },
        {
            title: "Viloyat nomi",
            dataIndex: "region_id",
            key: "region_id",
            width: "40%",
        },
        {
            title: "Lokatsiya",
            dataIndex: "lokatsiya",
            key: "Lokatsiya",
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

export default RegionlarTemplate;
