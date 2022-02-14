import { JARAYONDAGI } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const ProcessProgrammesTemplate = {
  text: "Jarayondagi",
  path: JARAYONDAGI,
  key: "2",
  type: PROGRAMMERS_CHILD_PAGES,
  columns: [...NewProgrammsTemplate.columns],
};
