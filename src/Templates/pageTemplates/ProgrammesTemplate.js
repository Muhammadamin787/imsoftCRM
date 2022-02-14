import { PROGRAMMES_PATH } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMES_PAGE } from "../../pages/pageConstants/PageTypes";
import { DATE, SELECT, STRING } from "../../components/Modal/InputTypes";
import { ProgrammSpecifications } from "../programmsModalTabTemplates/ProgrammSpecifications";
import { ProgrammPerformers } from "../programmsModalTabTemplates/ProgrammPerformers";
import { ProgrammFilesList } from "../programmsModalTabTemplates/ProgrammFilesList";
import { NewProgrammsTemplate } from "../programmsTabTemplates/NewProgrammsTemplate";
import { LearningProgrammesTemplate } from "../programmsTabTemplates/LearningProgrammesTemplate";
import { ProcessProgrammesTemplate } from "../programmsTabTemplates/ProcessProgrammesTemplate";
import { RejactProgrammesTemplate } from "../programmsTabTemplates/RejactProgrammesTemplate";
import { SubmittedProgrammesTemplate } from "../programmsTabTemplates/SubmittedProgrammesTemplate";

const ProgrammsTemplate = {
  text: "Dasturlar",
  path: PROGRAMMES_PATH,
  icon: "VectorIcon",
  type: PROGRAMMES_PAGE,
  isOpenModal: false,
  modal: {
    style: {
      width: 1000,
      marginTop: "-70px",
    },
    tabs: [ProgrammSpecifications, ProgrammPerformers, ProgrammFilesList],
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
          label: " ",
        },
        {
          name: "order_start_date",
          type: DATE,
          required: true,
          placeholder: "Buyurtma sana:",
          gridColumn: "10 / 15",
          gridRow: "1 / 2",
          label: "Buyurtma sana",
        },
        {
          name: "order_finish_date",
          type: DATE,
          required: true,
          placeholder: "Topshirilgan sana:",
          gridColumn: "15 / 20",
          gridRow: "1 / 2",
          label: "Topshiriligan sana",
        },
        {
          name: "comment",
          type: STRING,
          required: true,
          placeholder: "Umumiy tafsiflar",
          gridColumn: "1 / 10",
          gridRow: "2 / 3",
          label: "Umumiy tafsiflar",
        },
        {
          name: "telifon",
          type: SELECT,
          required: true,
          placeholder: "Qabul qilgan xodim:",
          gridColumn: "10 / 15",
          gridRow: "2 / 3",
          label: "Qabul qilgan xodim",
        },
        {
          name: "telifon",
          type: SELECT,
          required: true,
          placeholder: "Xolati:",
          gridColumn: "15 / 20",
          gridRow: "2 / 3",
          label: "xolati",
        },
      ],
      innerTable: [],
    },
  ],
  columns: [...NewProgrammsTemplate.columns],
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
  ],
  tabs: [
    NewProgrammsTemplate,
    ProcessProgrammesTemplate,
    LearningProgrammesTemplate,
    SubmittedProgrammesTemplate,
    RejactProgrammesTemplate,
  ],
};

export default ProgrammsTemplate;
