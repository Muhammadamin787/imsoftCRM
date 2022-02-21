import { STRING, DATE, UPLOAD } from './../../components/Modal/InputTypes';
import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { v4 as uuidv4 } from 'uuid'


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
            width: "10px",
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
            dataIndex: "file_doc",
            key: "number",
            width: "20%",
            render: (text, record, index) => <TabInput record={record} tabName={"file_doc"} name={"file"} type={UPLOAD} filePath={"/workers/image"} />,
            align: "center"
        }
    ]
}