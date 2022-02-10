import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";

export const ProgrammSpecifications = {
    text: "Texnik tafsiflar",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "10px",
            align: "center"
        },
        {
            title: "Nomi",
            dataIndex: "name",
            key: "number",
            width: "27%",
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