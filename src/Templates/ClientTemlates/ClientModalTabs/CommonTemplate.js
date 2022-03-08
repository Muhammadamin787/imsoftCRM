import { STRING, SELECT } from "../../../components/Modal/InputTypes";
import YunalishlarTemplate from "../../../Templates/servisChildTemplates/YunalishlarTemplate";
import ViloyatlarTemplate from "../../../Templates/servisChildTemplates/ViloyatlarTemplate";
import ShaharTumanTemplate from "../../servisChildTemplates/ShaharTumanTempilate";
import FaolyatTurlaiTemplate from "../../servisChildTemplates/FaolyatTurlariTemplate";
import HududTemplate from "../../servisChildTemplates/HududTemplate";

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
          placeholder: "Korxona nomi",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
          autoFocus: true,
        },
        {
          name: "client_status",
          type: SELECT,
          placeholder: "xolati",
          label: "Xolati",
          gridColumn: "6 / 9",
          gridRow: "1 / 2",
          options: "client_status",
        },
        {
          name: "category_id",
          type: SELECT,
          label: "Yunalish turi",
          placeholder: "Yo'nalishlar turi",
          template: YunalishlarTemplate,
          options: "category_name",
          gridColumn: "1 / 3",
          gridRow: "2 / 3",
        },
        {
          name: "activity_type_id",
          type: SELECT,
          placeholder: "Faoliyat turi",
          label: "Faoliyat turi",
          gridColumn: "3 / 6",
          gridRow: "2 / 3",
          options: "activity_types",
          template: FaolyatTurlaiTemplate,
        },
        {
          name: "address_id",
          type: SELECT,
          placeholder: "xudud",
          template: HududTemplate,
          options: "hudud",
          label: "Xudud",
          gridColumn: "6 / 9",
          gridRow: "2 / 3",
        },
        {
          name: "state_id",
          type: SELECT,
          placeholder: "viloyat",
          label: "Viloyat",
          gridColumn: "1 / 3",
          gridRow: "3 / 4",
          options: "states",
          template: ViloyatlarTemplate,
        },
        {
          name: "region_id",
          type: SELECT,
          label: "Shahar/Tuman",
          placeholder: "Shahar/Tuman",
          gridColumn: "3 / 6",
          gridRow: "3 / 4",
          label: "Shahar",
          options: "cities",
          template: ShaharTumanTemplate,
        },
        {
          name: "order_reason",
          type: SELECT,
          placeholder: "Kelish turi",
          gridColumn: "6 / 9",
          gridRow: "3 / 4",
          label: "Kelish turi",
          options: "order_reason",
        },
        {
          name: "home_address",
          type: STRING,
          placeholder: "Manzil",
          gridColumn: "1 / 6",
          gridRow: "4 / 5",
          label: "Manzil",
        },

        {
          name: "from",
          type: SELECT,
          placeholder: "Kim tomondan",
          options: "kim_tomondan",
          label: "Kim tomondan",
          gridColumn: "6 / 9",
          gridRow: "4 / 5",
        },
      ],
    },
  ],
};

export default CommonTabTemplate;
