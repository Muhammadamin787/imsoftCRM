import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";

export const ProgrammFilesList = {
    text: "Fayllar ro’yxati",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "7%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            width: "39%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file",
            key: "number",
            width: "17%",
            align: "center"
        }
    ]
}