import React from "react";
import {REKLAMALAR_PATH, USERS_PATH} from "../../pages/pageConstants/PageRoutes";
import {SERVIS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {MULTIPLE_SELECT, PASSWORD, PHONE, STRING} from "../../components/Modal/InputTypes";
import {FieldNumberOutlined} from "@ant-design/icons";

const UsersTemplate = {
    accessKey: 12,
    text: "Foydalanuvchilar",
    path: USERS_PATH,
    icon: "UsersIcon",
    type: SERVIS_CHILD_PAGES,
    mainUrl: "/users",
    isOpenModal: false,
    form: [
        {
            grid: {
                columns: "repeat(1, 10fr)",
                rows: "repeat(6, 1fr)",
            },
            inputs: [
                {
                    label: "F.I.O",
                    type: STRING,
                    name: "name",
                    required: true,
                    gridColumn: "1 / 6",
                    gridRow: "1 / 2",
                    placeholder: "FIO",
                },
                {
                    label: "Telefon",
                    type: PHONE,
                    name: "phone_number",
                    required: true,
                    gridColumn: "6 / 11",
                    gridRow: "1 / 2",
                    placeholder: "telefon",
                },
                {
                    label: "Login",
                    type: STRING,
                    name: "login",
                    required: true,
                    gridColumn: "1 / 11",
                    gridRow: "2 / 3",
                    placeholder: "login",
                },
                {
                    label: "Parol",
                    type: PASSWORD,
                    name: "password",
                    required: true,
                    gridColumn: "1 / 6",
                    gridRow: "3 / 4",
                    placeholder: "parol",
                },
                {
                    label: "Parolni tasdiqlang",
                    type: PASSWORD,
                    name: "password_confirmation",
                    required: true,
                    gridColumn: "6 / 11",
                    gridRow: "3 / 4",
                    placeholder: "Parolni Tasdiqlang",
                },
                {
                    label: "Huquqlari",
                    type: MULTIPLE_SELECT,
                    name: "access",
                    required: true,
                    gridColumn: "1 / 11",
                    gridRow: "4 / 5",
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