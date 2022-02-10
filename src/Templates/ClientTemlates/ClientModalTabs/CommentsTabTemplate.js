import { STRING } from "../../../components/Modal/InputTypes";
import {FieldNumberOutlined} from "@ant-design/icons";

const align = "center";

const CommetsTabTemplate = {
  text: "Izohlar",
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "repeat(1, 1fr)",
        rows: "repeat(1, 1fr)",
      },

      inputs: [
        {
          name: "umumiy_izoxlar",
          type: STRING,
          required: true,
          placeholder: "Umumiy izoxlar",
          gridColumn: "1 / 1",
          gridRow: "1 / 2",
        },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "5%",
      align,
    },
    {
      title: "Izox",
      dataIndex: "izox",
      key: "izox",
      width: "40%",
    },
    {
      title: "Fayl",
      dataIndex: "fayl",
      key: "fayl",
      width: "15%",
    },
    {
      title: "Xodim",
      dataIndex: "xodim",
      key: "xodim",
      width: "25%",
    },
    {
      title: "Vaqti",
      dataIndex: "vaqti",
      key: "vaqti",
      width: "15%",
    },
  ],
  data: [
    {
      number: "1",
      key: 1,
      izox:"yaxshi table",
      fayl: "no fayl",
      xodim: "Uroq",
      vaqti: "2020/12/15",
    },
    {
      number: "2",
      key: 2,
      izox:"dastur mukammal ishlangan 👍",
      fayl: "no fayl",
      xodim: "Tovar",
      vaqti: "2021/17/15",
    },
  ]
};

export default CommetsTabTemplate;
