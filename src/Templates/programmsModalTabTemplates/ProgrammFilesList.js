import { STRING, DATE, UPLOAD } from './../../components/Modal/InputTypes';
import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";



export const ProgrammFilesList = {
    text: "Fayllar ro’yxati",
    name:"file_doc",
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
            render: (text, record, index) => <TabInput record={record} name={"comment"} type={STRING} />,
            width: "39%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file_doc",
            key: "number",
            width: "17%",
            render: (text, record, index) => <TabInput record={record} name={"file_doc"} type={UPLOAD} />,
            align: "center"
        }
    ]
}