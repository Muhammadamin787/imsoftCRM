import { TOPSHIRILGAN } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const SubmittedProgrammesTemplate = {
  ...NewProgrammsTemplate,
  text: "Topshirilgan",
  path: TOPSHIRILGAN,
  type: PROGRAMMERS_CHILD_PAGES,
  key: "4",
  mainUrl:"/projects/status/4",
  // modal: {...NewProgrammsTemplate.modal},
  // columns: [...NewProgrammsTemplate.columns],
};
