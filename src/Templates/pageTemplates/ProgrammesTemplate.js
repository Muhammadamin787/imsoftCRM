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
  ...NewProgrammsTemplate,
  text: "Dasturlar",
  // path: PROGRAMMES_PATH,
  icon: "VectorIcon",
  // type: PROGRAMMES_PAGE,
  // isOpenModal: false,
  // form: [
  //   {
  //     grid: {
  //       columns: "repeat(1, 8fr)",
  //       rows: "repeat(1, 3fr)",
  //     },
  //     inputs: [
  //       {
  //         name: "client_name",
  //         type: STRING,
  //         required: true,
  //         placeholder: "Mijoz",
  //         gridColumn: "1 / 5",
  //         gridRow: "1 / 2",
  //         label: "Mijoz",
  //       },
  //       {
  //         name: "order_start_date",
  //         type: DATE,
  //         required: true,
  //         placeholder: "Buyurtma sana:",
  //         gridColumn: "5 / 7",
  //         gridRow: "1 / 2",
  //         label: "Buyurtma sana",
  //       },
  //       {
  //         name: "order_finish_date",
  //         type: DATE,
  //         required: true,
  //         placeholder: "Topshirilgan sana:",
  //         gridColumn: "7 / 9",
  //         gridRow: "1 / 2",
  //         label: "Topshiriligan sana",
  //       },
  //       {
  //         name: "comment",
  //         type: STRING,
  //         required: true,
  //         placeholder: "Umumiy tafsiflar",
  //         gridColumn: "1 / 9",
  //         gridRow: "2 / 3",
  //         label: "Umumiy tafsiflar",
  //       },
  //       {
  //         name: "telifon",
  //         type: SELECT,
  //         required: true,
  //         placeholder: "Qabul qilgan xodim:",
  //         gridColumn: "1 / 5",
  //         gridRow: "3 / 4",
  //         label: "Qabul qilgan xodim",
  //       },
  //       {
  //         name: "telifon",
  //         type: SELECT,
  //         required: true,
  //         placeholder: "Xolati:",
  //         gridColumn: "5 / 7",
  //         gridRow: "3 / 4",
  //         label: "xolati",
  //       },
  //     ],
  //     innerTable: [],
  //   },
  // ],
  tabs: [
    NewProgrammsTemplate,
    ProcessProgrammesTemplate,
    LearningProgrammesTemplate,
    SubmittedProgrammesTemplate,
    RejactProgrammesTemplate,
  ],
};

export default ProgrammsTemplate;
