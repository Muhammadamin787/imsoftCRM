import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Button } from "antd"
// import TabInput from "../../components/Modal/tabInput/tabInput";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { STRING, UPLOAD } from "../../components/Modal/InputTypes"


export const ProgrammSpecifications = {
    text: "Texnik tafsiflar",
    name: "tech_doc",
    columns: [
        {
            title: <FieldNumberOutlined />,
            dataIndex: "id",
            key: "number",
            width: "5%",
            align: "center",
        },
        {
            title: "Nomi",
            dataIndex: "name",
            render: (text, record, index) => <TabInput record={record} name={"name"} type={STRING} />,
            key: "number",
            width: "25%",
            align: "center",
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            render: (text, record, index) => <TabInput record={record} name={"comment"} type={STRING} />,
            key: "number",
            width: "35%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file_doc",
            render: (text, record, index) => <TabInput record={record} name={"file_doc"} type={UPLOAD} />,
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
}