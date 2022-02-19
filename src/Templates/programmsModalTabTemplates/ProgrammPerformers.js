import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import TabInput from "../../components/Modal/TabInput/TabInput";
export const ProgrammPerformers = {
    text: "Bajaruvchilar",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "10px",
            align: "center"
        },
        {
            title: "Xodim",
            dataIndex: "name",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            key: "number",
            width: "22%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            width: "22%",
            align: "center"
        },
        {
            title: "Boshlash sanasi",
            dataIndex: "file",
            key: "number",
            width: "16%",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            align: "center"
        },
        {
            title: "Tugatish sanasi",
            dataIndex: "file",
            key: "number",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            width: "16%",
            align: "center"
        },
        {
            title: "Topshirgan sanasi",
            dataIndex: "file",
            key: "number",
            // render: (text, record, index) => <TabInput record={record} name={"comment"} />,

            width: "16%",
            align: "center"
        }
    ]
}