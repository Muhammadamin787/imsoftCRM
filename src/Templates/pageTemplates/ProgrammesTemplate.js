import {PROGRAMMES_PATH} from "../../pages/pageConstants/PageRoutes";
import {PROGRAMMES_PAGE} from "../../pages/pageConstants/PageTypes";
import {DATE, SELECT, STRING} from "../../components/Modal/InputTypes";
import {ProgrammSpecifications} from "../programmsModalTabTemplates/ProgrammSpecifications";
import {ProgrammPerformers} from "../programmsModalTabTemplates/ProgrammPerformers";
import {ProgrammFilesList} from "../programmsModalTabTemplates/ProgrammFilesList";
import {NewProgrammsTemplate} from "../programmsTabTemplates/NewProgrammsTemplate";

const ProgrammsTemplate = {
    text: "Dasturlar",
    path: PROGRAMMES_PATH,
    icon: "VectorIcon",
    type: PROGRAMMES_PAGE,
    tabs: [
        NewProgrammsTemplate,
        {
            text: "Jarayondagi",
            columns: NewProgrammsTemplate.columns
        },
        {
            text: "O’qitilayotgan",
            columns: NewProgrammsTemplate.columns
        },
        {
            text: "Topshiriligan",
            columns: NewProgrammsTemplate.columns
        },
        {
            text: "Bekor qilingan",
            columns: NewProgrammsTemplate.columns
        },
    ],
    isOpenModal: false,
    modal: {
        width: 1100,
        tabs: [
            ProgrammSpecifications,
            ProgrammPerformers,
            ProgrammFilesList
        ]
    },
    form: [
        {
            grid: {
                columns: "repeat(20, 200fr)",
                rows: "repeat(6, 2fr)",
            },
            inputs: [
                {
                    name: "client_name",
                    type: STRING,
                    required: true,
                    placeholder: "Mijoz",
                    gridColumn: "1 / 10",
                    gridRow: "1 / 2",
                },
                {
                    name: "order_start_date",
                    type: DATE,
                    required: true,
                    placeholder: "Buyurtma sana:",
                    gridColumn: "10 / 15",
                    gridRow: "1 / 2",
                },
                {
                    name: "order_finish_date",
                    type: STRING,
                    required: true,
                    placeholder: "Topshirilgan sana:",
                    gridColumn: "15 / 20",
                    gridRow: "1 / 2",
                },
                {
                    name: "comment",
                    type: STRING,
                    required: true,
                    placeholder: "Umumiy tafsiflar",
                    gridColumn: "1 / 10",
                    gridRow: "2 / 3",
                },
                {
                    name: "telifon",
                    type: SELECT,
                    required: true,
                    placeholder: "Qabul qilgan xodim:",
                    gridColumn: "10 / 15",
                    gridRow: "2 / 3",
                },
                {
                    name: "telifon",
                    type: SELECT,
                    required: true,
                    placeholder: "Xolati:",
                    gridColumn: "15 / 20",
                    gridRow: "2 / 3",
                },
            ],
            innerTable: []
        },
    ],
    data: [
        {
            number: 22,
            fish: "Teshabek",
            programm_name: "Bolta CRM",
            izoh: "izoh",
            start_time: "12.05.2022",
            finish_time: "30.05.2022",
            by_client: "jaloliddin",
            staff: "Komilbek",
        },
        {
            number: 23,
            fish: "Ketmonbek",
            programm_name: "Bolda tizim",
            izoh: "izohcha",
            start_time: "12.03.2022",
            finish_time: "15.04.2022",
            by_client: "Qurbonali",
            staff: "Komilbek",
        },
    ]
};

export default ProgrammsTemplate;