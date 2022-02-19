import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";

export const ProgrammFilesList = {
    text: "Fayllar ro’yxati",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "10px",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            width: "39%",
            align: "center"
        },
        {
            title: "Fayl",
            dataIndex: "file",
            key: "number",
            width: "17%",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            align: "center"
        }
    ]
}