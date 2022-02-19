import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Button } from "antd"
// import TabInput from "../../components/Modal/tabInput/tabInput";
import TabInput from "../../components/Modal/TabInput/TabInput";
import {STRING, UPLOAD} from "../../components/Modal/InputTypes"


export const ProgrammSpecifications = {
    text: "Texnik tafsiflar",
    name:"dev_docs",
    columns: [
        {
            title: <FieldNumberOutlined />,
            dataIndex: "number",
            key: "number",
            width: "5%",
            align: "center",
            columnsName:"dev_docs"
        },
        {
            title: "Nomi",
            dataIndex: "name",
            render: (text, record, index) => <TabInput record={record} name={"name"} type={STRING} />,
            key: "number",
            columnsName:"dev_docs",
            width: "25%",
            align: "center",
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            render: (text, record, index) => <TabInput record={record} name={"comment"} type={STRING} />,
            key: "number",
            columnsName:"dev_docs",

            width: "35%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file",
            render: (text, record, index) => <TabInput record={record} name={"file"} type={UPLOAD} />,
            key: "number",
            columnsName:"dev_docs",

            width: "15%",
            align: "center"
        },
        {
            title: "Actions",
            columnsName:"dev_docs",

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