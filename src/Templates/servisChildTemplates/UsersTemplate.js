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
    mainUrl: "/reklams",
    isOpenModal: false,
    form: [
        {
            grid: {
                columns: "repeat(20, 100fr)",
                rows: "repeat(6, 1fr)",
            },
            inputs: [
                {
                    label: "F.I.O",
                    type: STRING,
                    name: "fio",
                    required: true,
                    gridColumn: "1 / 10",
                    gridRow: "1 / 2",
                    placeholder: "FIO",
                },
                {
                    label: "Telefon",
                    type: PHONE,
                    name: "phone_number",
                    required: true,
                    gridColumn: "10 / 20",
                    gridRow: "1 / 2",
                    placeholder: "telefon",
                },
                {
                    label: "Login",
                    type: STRING,
                    name: "login",
                    required: true,
                    gridColumn: "1 / 10",
                    gridRow: "2 / 3",
                    placeholder: "login",
                },
                {
                    label: "Parol",
                    type: PASSWORD,
                    name: "password",
                    required: true,
                    gridColumn: "10 / 20",
                    gridRow: "2 / 3",
                    placeholder: "parol",
                },
                {
                    label: "Huquqlari",
                    type: MULTIPLE_SELECT,
                    name: "access",
                    required: true,
                    gridColumn: "1 / 20",
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
            dataIndex: "fio",
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
    data: [
        {
            number: "1",
            reklama_nomi: "Instagram mitti.me",
            key: 1,
        },
    ],
};

export default UsersTemplate;
