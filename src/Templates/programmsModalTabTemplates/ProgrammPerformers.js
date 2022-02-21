import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";
import { STRING, SELECT,DATE } from "../../components/Modal/InputTypes";
import TabInput from "../../components/Modal/TabInput/TabInput";
import { v4 as uuidv4 } from 'uuid'


export const ProgrammPerformers = {
    text: "Bajaruvchilar",
    name:"dev_doc",
    allData: {
        workers: "/workers/all",
    },
    CreateObj: {
        rowId: uuidv4(),
        name: '',
        comment: '',
        start_date:"",
        deadline_date:"",
        finish_date:"",
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
            title: "Xodim",
            dataIndex: "name",
            render: (text, record, index) => <TabInput record={record} tabName={"dev_doc"} name={"name"} options={"workers"} type={SELECT} />,
            key: "number",
            width: "22%",
            align: "center"
        },
        {
            title: "Tafsif",
            dataIndex: "comment",
            key: "number",
            render: (text, record, index) => <TabInput record={record} tabName={"dev_doc"} name={"comment"} type={STRING} />,
            width: "22%",
            align: "center"
        },
        {
            title: "Boshlash sanasi",
            dataIndex: "start_date",
            key: "number",
            width: "16%",
            render: (text, record, index) => <TabInput record={record} tabName={"dev_doc"} name={"start_date"} type={DATE} />,
            align: "center"
        },
        {
            title: "Tugatish sanasi",
            dataIndex: "finish_date",
            key: "number",
            render: (text, record, index) => <TabInput record={record} tabName={"dev_doc"} name={"finish_date"} type={DATE} />,
            width: "16%",
            align: "center"
        },
        {
            title: "Topshirgan sanasi",
            dataIndex: "deadline_date",
            key: "number",
            render: (text, record, index) => <TabInput record={record} tabName={"dev_doc"} name={"deadline_date"} type={DATE} />,
            width: "16%",
            align: "center"
        }
    ]
}