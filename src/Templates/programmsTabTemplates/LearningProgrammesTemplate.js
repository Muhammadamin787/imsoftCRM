import {
  OQITILAYOTGAN,
} from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const LearningProgrammesTemplate = {
  ...NewProgrammsTemplate,
  text: "O'qitilayotgan",
  path: OQITILAYOTGAN,
  key: "3",
  type: PROGRAMMERS_CHILD_PAGES,
  mainUrl:"/projects/status/3",
  // modal: {...NewProgrammsTemplate.modal},
  // columns: [...NewProgrammsTemplate.columns],
};
