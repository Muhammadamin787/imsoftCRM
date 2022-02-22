import { STRING, DATE, UPLOAD } from './../../components/Modal/InputTypes';
import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { v4 as uuidv4 } from 'uuid'
import { Input, Button } from "antd"



export const ProgrammFilesList = {
    text: "Fayllar ro’yxati",
    name:"file_doc",
    CreateObj: {
        rowId: uuidv4(),
        comment: '',
        file: '',
    },
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "id",
            key: "number",
            width: "5%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            render: (text, record, index) => <TabInput record={record} tabName={"file_doc"} name={"comment"} type={STRING} />,
            width: "70%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file",
            render: (text, record, index) => <TabInput record={record} tabName={"file_doc"} name={"file"} type={UPLOAD} filePath={"/projects/image"} />,
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
            width: "10%",
            align: "center"
        }


    ]
}