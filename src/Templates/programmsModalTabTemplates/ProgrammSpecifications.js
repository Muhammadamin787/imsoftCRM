import { FieldNumberOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Button } from "antd"
// import TabInput from "../../components/Modal/tabInput/tabInput";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { STRING, UPLOAD } from "../../components/Modal/InputTypes"
import { v4 as uuidv4 } from 'uuid'

export const ProgrammSpecifications = {
    text: "Texnik tafsiflar",
    name: "tech_doc",
    CreateObj: {
        rowId: uuidv4(),
        name: '',
        comment: '',
        file: '',
    },
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
            render: (text, record, index) => <TabInput record={record} tabName={"tech_doc"} name={"name"} type={STRING} />,
            key: "number",
            width: "25%",
            align: "center",
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            render: (text, record, index) => <TabInput record={record} tabName={"tech_doc"} name={"comment"} type={STRING} />,
            key: "number",
            width: "35%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file_doc",
            render: (text, record, index) => <TabInput record={record} tabName={"tech_doc"} name={"file"} filePath={"/projects/image"} type={UPLOAD} />,
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