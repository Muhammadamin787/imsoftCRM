import { BEKOR_QILINGAN } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";

export const RejactProgrammesTemplate = {
  text: "Bekor qilingan",
  path: BEKOR_QILINGAN,
  type: PROGRAMMERS_CHILD_PAGES,
  key: "5",
  modal: {...NewProgrammsTemplate.modal},
  columns: [...NewProgrammsTemplate.columns],
};
