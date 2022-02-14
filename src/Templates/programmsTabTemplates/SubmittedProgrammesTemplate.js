import { TOPSHIRILGAN } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const SubmittedProgrammesTemplate = {
  text: "Topshirilgan",
  path: TOPSHIRILGAN,
  type: PROGRAMMERS_CHILD_PAGES,
  key: "4",
  columns: [...NewProgrammsTemplate.columns],
};
