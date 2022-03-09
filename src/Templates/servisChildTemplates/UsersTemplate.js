import React from "react";
import {REKLAMALAR_PATH, USERS_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {MULTIPLE_SELECT, PASSWORD, PHONE, STRING} from "../../components/Modal/InputTypes";
import {FieldNumberOutlined} from "@ant-design/icons";

const UsersTemplate = {
    accessKey: 13,
    text: "Foydalanuvchilar",
    path: USERS_PATH,
    icon: "UsersIcon",
    type: SERVIS_CHILD_PAGES,
    mainUrl: "/users",
    isOpenModal: false,
    modal: {
        style: {
            width: 550,
            // marginTop: "-70px"
        }
    },
    form: [
        {
            grid: {
                // columns: "repeat(1, 10fr)",
                // rows: "repeat(6, 1fr)",
            },
            inputs: [
                {
                    label: "F.I.O",
                    type: STRING,
                    name: "name",
                    required: true,
                    gridColumn: "1 / 3",
                    gridRow: "1 / 2",
                    placeholder: "FIO",
                },
                {
                    label: "Login",
                    type: STRING,
                    name: "login",
                    required: true,
                    gridRow: "2 / 3",
                    placeholder: "login",
                },
                {
                    label: "Telefon",
                    type: PHONE,
                    name: "phone_number",
                    required: true,
                    gridRow: "2 / 3",
                    placeholder: "telefon",
                },
                {
                    label: "Parol",
                    type: PASSWORD,
                    name: "password",
                    required: true,
                    gridRow: "3 / 4",
                    placeholder: "parol",
                },
                {
                    label: "Huquqlari",
                    type: MULTIPLE_SELECT,
                    name: "access",
                    required: true,
                    gridRow: "3 / 4",
                    placeholder: "parol",
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
            render: (text, data, i) => ++i
        },
        {
            title: "F.I.O",
            dataIndex: "name",
            key: "fio",
            width: "55%",
        },
        {
            title: "Telefon",
            dataIndex: "phone_number",
            key: "phone_number",
            width: "35%",
        },
        {
            title: "Login",
            dataIndex: "login",
            key: "login",
            width: "30%",
        },
        {
            title: "Parol",
            dataIndex: "password",
            key: "password",
            width: "30%",
        },
    ],
};

export default UsersTemplate;
