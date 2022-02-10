import { STRING } from "../../../components/Modal/InputTypes";




const CommetsTabTemplate = {
	text: "Izohlar",
  isOpenModal: false,
	form :[
        {
          grid: {
            columns: "repeat(8, 1fr)",
            rows: "repeat(1, 1fr)",
          },
    
          inputs: [
            {
              name: "full_name",
              type: STRING,
              required: true,
              placeholder: "F.I.SH",
              gridColumn: "1 / 3",
              gridRow: "1 / 2",
            },
            {
              name: "ismi",
              type: STRING,
              required: true,
              placeholder: "ismi",
              gridColumn: "3 / 6",
              gridRow: "1 / 2",
            },
            {
              name: "familyasi",
              type: STRING,
              required: true,
              placeholder: "familyasi",
              gridColumn: "6 / 9",
              gridRow: "1 / 2",
            },
          ],
        },
      ],
};

export default CommetsTabTemplate;