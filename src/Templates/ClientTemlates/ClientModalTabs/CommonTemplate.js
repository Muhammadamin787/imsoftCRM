import { STRING, SELECT,MAP, NUMBER, UPLOAD, IMAGE,DATE} from "../../../components/Modal/InputTypes";
import {inputDeafultHeght} from "../../../constant/deafultStyle"



const CommonTabTemplate = {
	text: "Umumiy",
  isOpenModal: false,
	form :[
        {
          grid: {
            columns: "repeat(8, 1fr)",
            rows: "repeat(5, 1fr)",
          },
    
          inputs: [
            {
              name: "korxona_nomi",
              type: STRING,
              required: true,
              placeholder: "Korxona nomi",
              gridColumn: "1 / 6",
              gridRow: "1 / 2",
              label:"Korxona nomi",
            },
            {
              name: "yunalish_turi",
              type: SELECT,
              required: true,
              label: "Yunalish turi",
              placeholder: "Yo'nalishlar turi",
              gridColumn: "1 / 3",
              gridRow: "2 / 3",
            },
            {
              name: "viloyat",
              type: SELECT,
              required: true,
              placeholder: "viloyat",
              label:"Viloyat",
              gridColumn: "1 / 3",
              gridRow: "3 / 4",
            },
            {
              name: "manzil",
              type: STRING,
              required: true,
              placeholder: "Manzil",
              gridColumn: "1 / 9",
              gridRow: "4 / 5",
              label: "Manzil",
            },
            {
              name: "kelish_turi",
              type: SELECT,
              required: true,
              placeholder: "Kelish turi",
              gridColumn: "6 / 9",
              gridRow: "2 / 3",
              label: "Kelish turi",
            },
            {
              name: "faoliyat_turi",
              type: SELECT,
              required: true,
              placeholder: "Faoliyat turi",
              label: "Faoliyat turi",
              gridColumn: "3 / 6",
              gridRow: "2 / 3",
            },
            {
              name: "xudud",
              type: SELECT,
              required: true,
              placeholder: "xudud",
              label: "Xudud",
              gridColumn: "6 / 9",
              gridRow: "3 / 4",
            },
            {
              name: "shahar_tuman",
              type: SELECT,
              required: true,
              label: "Shahar/Tuman",
              placeholder: "Shahar/Tuman",
              gridColumn: "3 / 6",
              gridRow: "3 / 4",
            },
            {
              name: "xolati",
              type: SELECT,
              required: true,
              placeholder: "xolati",
              label:"Xolati",
              gridColumn: "6 / 9",
              gridRow: "1 / 2",
            },
          ],
        },
      ],
};

export default CommonTabTemplate;