import { STRING } from "../../../components/Modal/InputTypes";




const CommetsTabTemplate = {
	text: "Commets ",
	form :[
        {
          grid: {
            columns: "repeat(20, 100fr)",
            rows: "repeat(6, 1fr)",
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

export default CommetsTabTemplate;