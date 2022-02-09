import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";

export const ProgrammPerformers = {
    text: "Bajaruvchilar",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "7%",
            align: "center"
        },
        {
            title: "Xodim",
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
            title: "Boshlash sanasi",
            dataIndex: "file",
            key: "number",
            width: "17%",
            align: "center"
        },
        {
            title: "Tugatish sanasi",
            dataIndex: "file",
            key: "number",
            width: "17%",
            align: "center"
        },
        {
            title: "Topshirgan sanasi",
            dataIndex: "file",
            key: "number",
            width: "17%",
            align: "center"
        }
    ]
}