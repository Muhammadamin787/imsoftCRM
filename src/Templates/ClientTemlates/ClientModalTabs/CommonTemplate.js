import { STRING } from "../../../components/Modal/InputTypes";




const CommonTabTemplate = {
	text: "Umumiy",
  isOpenModal: false,
	form :[
        {
          grid: {
            columns: "repeat(7, 1fr)",
            rows: "repeat(5, 1fr)",
          },
    
          inputs: [
            {
              name: "full_name",
              type: STRING,
              required: true,
              placeholder: "F.I.SH",
              gridColumn: "1 / 10",
              gridRow: "1 / 2",
            },
          ],
        },
      ],
};

export default CommonTabTemplate;