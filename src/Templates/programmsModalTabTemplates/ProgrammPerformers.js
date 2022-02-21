import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import { STRING, SELECT,DATE } from "../../components/Modal/InputTypes";
import TabInput from "../../components/Modal/TabInput/TabInput";



export const ProgrammPerformers = {
    text: "Bajaruvchilar",
    name:"dev_docs",
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "id",
            key: "number",
            width: "10px",
            align: "center"
        },
        {
            title: "Xodim",
            dataIndex: "name",
            render: (text, record, index) => <TabInput record={record} name={"name"} type={STRING} />,
            key: "number",
            width: "22%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            render: (text, record, index) => <TabInput record={record} name={"comment"} type={STRING} />,
            width: "22%",
            align: "center"
        },
        {
            title: "Boshlash sanasi",
            dataIndex: "start_date",
            key: "number",
            width: "16%",
            render: (text, record, index) => <TabInput record={record} name={"start_date"} type={DATE} />,
            align: "center"
        },
        {
            title: "Tugatish sanasi",
            dataIndex: "finish_date",
            key: "number",
            render: (text, record, index) => <TabInput record={record} name={"finish_date"} type={DATE} />,
            width: "16%",
            align: "center"
        },
        {
            title: "Topshirgan sanasi",
            dataIndex: "deadline_date",
            key: "number",
            render: (text, record, index) => <TabInput record={record} name={"deadline_date"} type={DATE} />,
            width: "16%",
            align: "center"
        }
    ]
}