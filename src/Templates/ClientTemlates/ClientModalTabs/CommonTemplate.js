import { STRING, SELECT,MAP, NUMBER, UPLOAD, IMAGE,DATE} from "../../../components/Modal/InputTypes";




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
            },
            {
              name: "yunalish_turi",
              type: SELECT,
              required: true,
              placeholder: "Yo'nalishlar turi",
              gridColumn: "1 / 3",
              gridRow: "2 / 3",
              option: [
                { value:"savdo"},{ value:"nimadur"}
              ]
            },
            {
              name: "viloyat",
              type: SELECT,
              required: true,
              placeholder: "viloyat",
              gridColumn: "1 / 3",
              gridRow: "3 / 4",
              option: [{ value:"Farg'ona"},{ value:"Savdo"},]
            },
            {
              name: "manzil",
              type: STRING,
              required: true,
              placeholder: "Manzil",
              gridColumn: "1 / 9",
              gridRow: "4 / 5",
            },
            {
              name: "kelish_turi",
              type: SELECT,
              required: true,
              placeholder: "Kelish turi",
              gridColumn: "6 / 9",
              gridRow: "2 / 3",
              option:[{ value:"Qandaydur savdo"},{ value:"Savdo"},]
            },
            {
              name: "faoliyat_turi",
              type: SELECT,
              required: true,
              placeholder: "Faoliyat turi",
              gridColumn: "3 / 6",
              gridRow: "2 / 3",
              option: [{ value:"Savdo"},{ value:"Savdo2"}, ]
            },
            {
              name: "xudud",
              type: SELECT,
              required: true,
              placeholder: "xudud",
              gridColumn: "6 / 9",
              gridRow: "3 / 4",
              option: [ {value:"Eshonguzar"}, {value:"guzar"}]
            },
            {
              name: "shahar_tuman",
              type: SELECT,
              required: true,
              placeholder: "Shahar/Tuman",
              gridColumn: "3 / 6",
              gridRow: "3 / 4",
              option: [{ value:"Marg'ilon"},{ value:"Savdo2"}, ]
            },
            {
              name: "xolati",
              type: SELECT,
              required: true,
              placeholder: "xolati",
              gridColumn: "6 / 9",
              gridRow: "1 / 2",
              option: [ {value:"Alo"}, {value:"o'rtacha"}]
            },
          ],
        },
      ],
};

export default CommonTabTemplate;