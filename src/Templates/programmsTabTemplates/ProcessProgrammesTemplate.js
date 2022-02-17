import { JARAYONDAGI } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";
import {ProgrammSpecifications} from "../programmsModalTabTemplates/ProgrammSpecifications";
import {ProgrammPerformers} from "../programmsModalTabTemplates/ProgrammPerformers";
import {ProgrammFilesList} from "../programmsModalTabTemplates/ProgrammFilesList";

export const ProcessProgrammesTemplate = {
  ...NewProgrammsTemplate,
  text: "Jarayondagi",
  path: JARAYONDAGI,
  key: "2",
  type: PROGRAMMERS_CHILD_PAGES,
  mainUrl:"/projects/status/2",
  // modal: {...NewProgrammsTemplate.modal},
  // columns: [...NewProgrammsTemplate.columns],
};
