import {FieldNumberOutlined} from "@ant-design/icons";
import {YANGI_DASTURLAR} from "../../pages/pageConstants/PageRoutes";
import {PROGRAMMERS_CHILD_PAGES} from "../../pages/pageConstants/PageTypes";
import {ProgrammSpecifications} from "../programmsModalTabTemplates/ProgrammSpecifications";
import {ProgrammPerformers} from "../programmsModalTabTemplates/ProgrammPerformers";
import {ProgrammFilesList} from "../programmsModalTabTemplates/ProgrammFilesList";
import BigLength from "../../components/BigLength/BigLength";
import {ProgrammsTemplateApi} from "../../constant/apiLine/apiLine";
import {
    STRING,
    DATE,
    MAP,
    NUMBER,
    SELECT,
    UPLOAD,
    IMAGE,
} from "../../components/Modal/InputTypes";
import XodimlarTemplate from "../servisChildTemplates/XodimlarTemplate";

export const NewProgrammsTemplate = {
    text: "Yangi dasturlar",
    path: YANGI_DASTURLAR,
    type: PROGRAMMERS_CHILD_PAGES,
    key: "1",
    allData: {
        workers: "/workers/all",
    },
    modal: {
        style: {
            width: 1000,
            marginTop: "-70px",
        },
        tabs: [
            ProgrammSpecifications,
            ProgrammPerformers,
            ProgrammFilesList
        ],
    },
    form: [
        {
            grid: {
                columns: "repeat(1, 8fr)",
                rows: "repeat(1, 3fr)",
            },
            inputs: [
                {
                    name: "client_id",
                    type: NUMBER,
                    required: true,
                    placeholder: "Mijoz",
                    gridColumn: "1 / 5",
                    gridRow: "1 / 2",
                    label: "Mijoz",
                },
                {
                    name: "start_date",
                    type: DATE,
                    required: true,
                    placeholder: "Buyurtma sana:",
                    gridColumn: "5 / 7",
                    gridRow: "1 / 2",
                    label: "Buyurtma sana",
                },
                {
                    name: "finish_date",
                    type: DATE,
                    required: true,
                    placeholder: "Topshirilgan sana:",
                    gridColumn: "7 / 9",
                    gridRow: "1 / 2",
                    label: "Topshiriligan sana",
                },
                {
                    name: "general_info",
                    type: STRING,
                    required: true,
                    placeholder: "Umumiy tafsiflar",
                    gridColumn: "1 / 5",
                    gridRow: "2 / 3",
                    label: "Umumiy tafsiflar",
                },
                {
                    name: "developer_id",
                    type: SELECT,
                    required: true,
                    placeholder: "Qabul qilgan xodim:",
                    gridColumn: "5 / 7",
                    gridRow: "2 / 3",
                    label: "Qabul qilgan xodim",
                    options: "workers",
                    template: XodimlarTemplate,
                },
                {
                    name: "status_id",
                    type: SELECT,
                    required: true,
                    placeholder: "Xolati:",
                    gridColumn: "7 / 9",
                    gridRow: "2 / 3",
                    label: "xolati",
                    options: "status",
                },
            ],
            innerTable: [],
        },
    ],
    isOpenModal: false,
    mainUrl: ProgrammsTemplateApi,
    // allData: ["/projects"],
    filters: ["developer_name"],
    columns: [
        {
            title: <FieldNumberOutlined/>,
            dataIndex: "number",
            key: "number",
            width: "10%",
            align: "center",
            render: (text, data, index) => ++index,
        },
        {
            title: "Mijoz F.I.O",
            dataIndex: "client_name",
            key: "client_name",
            width: "40%",
            align: "center",
        },
        {
            title: "Dastur nomi",
            dataIndex: "project_name",
            key: "project_name",
            width: "30%",
            align: "center",
        },
        {
            title: "Izoh",
            dataIndex: "general_info",
            key: "general_info",
            width: "50%",
            align: "center",
            render: (text) => <BigLength text={text}/>,
        },
        {
            title: "Ish olingan vaqti",
            dataIndex: "start_date",
            key: "start_date",
            width: "30%",
            align: "center",
        },
        {
            title: "Ish topshirish vaqti",
            dataIndex: "finish_date",
            key: "finish_date",
            width: "40%",
            align: "center",
        },
        {
            title: "Kim orqali",
            dataIndex: "by_client",
            key: "by_client",
            width: "30%",
            align: "center",
        },
        {
            title: "Hodim",
            dataIndex: "developer_name",
            key: "developer_name",
            width: "30%",
            align: "center",
        },
    ],
};
