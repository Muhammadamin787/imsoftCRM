import {
  STRING,
  SELECT,
  MAP,
  NUMBER,
  UPLOAD,
  IMAGE,
  DATE,
} from "../../../components/Modal/InputTypes";
import YunalishlarTemplate from "../../../Templates/servisChildTemplates/YunalishlarTemplate";
import ViloyatlarTemplate from "../../../Templates/servisChildTemplates/ViloyatlarTemplate";
import ShaharTumanTemplate from "../../servisChildTemplates/ShaharTumanTempilate";
import FaolyatTurlaiTemplate from  '../../servisChildTemplates/FaolyatTurlariTemplate';
const CommonTabTemplate = {
  text: "Umumiy",
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "repeat(8, 1fr)",
        rows: "repeat(5, 1fr)",
      },

      inputs: [
        {
          label: "Korxona nomi",
          name: "enterprise_name",
          type: STRING,
          required: true,
          placeholder: "Korxona nomi",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
          autoFocus: true
        },
        {
          name: "category_id",
          type: SELECT,
          required: true,
          label: "Yunalish turi",
          placeholder: "Yo'nalishlar turi",
          template: YunalishlarTemplate,
          options: "cities",
          gridColumn: "1 / 3",
          gridRow: "2 / 3",
        },
        {
          name: "state_name",
          type: SELECT,
          required: true,
          placeholder: "viloyat",
          label: "Viloyat",
          gridColumn: "1 / 3",
          gridRow: "3 / 4",
          options: "states",
          template: ViloyatlarTemplate,
        },
        {
          name: "home_address",
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
          name: "type_name",
          type: SELECT,
          required: true,
          placeholder: "Faoliyat turi",
          label: "Faoliyat turi",
          gridColumn: "3 / 6",
          gridRow: "2 / 3",
          options: "activity_types",
          template: FaolyatTurlaiTemplate
        },
        {
          name: "address_name",
          type: SELECT,
          required: true,
          placeholder: "xudud",
          label: "Xudud",
          gridColumn: "6 / 9",
          gridRow: "3 / 4",
        },
        {
          name: "region_name",
          type: SELECT,
          required: true,
          label: "Shahar/Tuman",
          placeholder: "Shahar/Tuman",
          gridColumn: "3 / 6",
          gridRow: "3 / 4",
          label: "Shahar",
          template: ShaharTumanTemplate,
        },
        {
          name: "client_status",
          type: SELECT,
          required: true,
          placeholder: "xolati",
          label: "Xolati",
          gridColumn: "6 / 9",
          gridRow: "1 / 2",
        },
      ],
    },
  ],
};

export default CommonTabTemplate;
