import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Button } from "antd"


export const ProgrammSpecifications = {
    text: "Texnik tafsiflar",
    columns: [
        {
            title: <FieldNumberOutlined />,
            dataIndex: "number",
            key: "number",
            width: "5%",
            align: "center",
        },
        {
            title: "Nomi",
            dataIndex: "name",
            render: (text) => (<Input type="text" />),
            key: "number",
            width: "25%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            render: (text) => (<Input type="text" />),
            key: "number",
            width: "35%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file",
            render: () => (<Button>+</Button>),
            key: "number",
            width: "15%",
            align: "center"
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => {
                return <>
                    <Button type="link">Delete</Button>
                </>
            },
            key: "action",
            width: "15%",
            align: "center"
        }

    ],
    data: [
        {
            number: "1",
            name: "Marg",
            comment: "izoh kiriting",
            file: "file"
        },
        {
            number: "2",
            name: "Farg'ona",
            comment: "commentlar uchun",
            file: "file2"
        }
    ]
}