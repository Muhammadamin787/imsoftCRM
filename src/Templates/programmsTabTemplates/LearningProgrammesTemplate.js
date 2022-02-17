import {
  OQITILAYOTGAN,
} from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const LearningProgrammesTemplate = {
  text: "O'qitilayotgan",
  path: OQITILAYOTGAN,
  key: "3",
  type: PROGRAMMERS_CHILD_PAGES,
  modal: {...NewProgrammsTemplate.modal},
  columns: [...NewProgrammsTemplate.columns],
};
