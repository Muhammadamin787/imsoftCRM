import { STRING,PHONE,MAP, NUMBER, SELECT, UPLOAD, IMAGE,DATE } from "../../../components/Modal/InputTypes";
import {inputDeafultHeght} from "../../../constant/deafultStyle"




const ContactsTemplate = {
	text: "Kontaktlar",
  isOpenModal: false,
  
  form: [
    {
      grid: {
        columns: "repeat(18, 1fr)",
        rows: "repeat(20, 1fr)",
      },

      inputs: [
        {
          name: "raxbar",
          type: STRING,
          required: true,
          placeholder: "Raxbar",
          gridColumn: "1 / 6",
          gridRow: "1 / 2",
          label: "Raxbar",
        },
        {
          name: "rahbar_telifon",
          type: PHONE,
          required: true,
          placeholder: "Telifon",
          gridColumn: "6 / 10",
          gridRow: "1 / 2",
          label: "Telifon 1",
        },
        {
          name: "opirator",
          type: STRING,
          required: true,
          placeholder: "Opirator",
          gridColumn: "1 / 6",
          gridRow: "2 / 3",
          label: "Opirator",
        },
        {
            name: "opirator_telifon",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "6 / 10",
            gridRow: "2 / 3",
            label:"Telifon 1"
          },
          {
            name: "foto1",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "1 / 4",
            gridRow: "3 / 20",
            height: inputDeafultHeght * 7,
            label:"Foto"
          },
          {
            name: "foto2",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "4 / 7",
            gridRow: "3 / 20",
            height: inputDeafultHeght * 7,
            label: " "
          },
          {
            name: "foto3",
            type: IMAGE,
            required: true,
            placeholder: "Foto",
            gridColumn: "7 / 10",
            gridRow: "3 / 20",
            height: inputDeafultHeght * 7 ,
            label: " "
          },
          {
            name: "rahbar_telifon2",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "10 / 15",
            gridRow: "1 / 2",
            label: "Telifon 2"
          },
          {
            name: "opirator_telifon2",
            type: PHONE,
            required: true,
            placeholder: "Telifon",
            gridColumn: "10 / 15",
            gridRow: "2 / 3",
            label: "Telifon 2"
          },
          {
            name: "rahbar_tugilgan_sana",
            type: DATE,
            required: true,
            placeholder: "Tug'ilgan Sana",
            gridColumn: "15 / 19",
            gridRow: "1 / 2",
            label: "Tug'ilgan Sana"
          },
          {
            name: "opirator_tugilgan_sana",
            type: DATE,
            required: true,
            placeholder: "Tug'ilgan Sana",
            gridColumn: "15 / 19",
            gridRow: "2 / 3",
            label: "Tug'ilgan Sana"
          },
          {
            name: "client_addres",
            type: MAP,
            required: true,
            placeholder: "Client Addres",
            gridColumn: "10 / 19",
            gridRow: "3 / 20",
            height: inputDeafultHeght * 3,
          },
      ],
    },
  ],
};

export default ContactsTemplate;