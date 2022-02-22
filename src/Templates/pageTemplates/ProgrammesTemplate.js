import { NewProgrammsTemplate } from "../programmsTemplates/NewProgrammsTemplate";
import { LearningProgrammesTemplate } from "../programmsTemplates/LearningProgrammesTemplate";
import { ProcessProgrammesTemplate } from "../programmsTemplates/ProcessProgrammesTemplate";
import { RejactProgrammesTemplate } from "../programmsTemplates/RejactProgrammesTemplate";
import { SubmittedProgrammesTemplate } from "../programmsTemplates/SubmittedProgrammesTemplate";

const ProgrammsTemplate = {
  ...NewProgrammsTemplate,
  text: "Dasturlar",
  // path: PROGRAMMES_PATH,
  icon: "VectorIcon",
  
  tabs: [
    NewProgrammsTemplate,
    ProcessProgrammesTemplate,
    LearningProgrammesTemplate,
    SubmittedProgrammesTemplate,
    RejactProgrammesTemplate,
  ],
};

export default ProgrammsTemplate;
