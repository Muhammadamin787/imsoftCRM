import { FieldNumberOutlined } from "@ant-design/icons";
import { YANGI_DASTURLAR } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import {ProgrammSpecifications} from "../programmsModalTabTemplates/ProgrammSpecifications";
import {ProgrammPerformers} from "../programmsModalTabTemplates/ProgrammPerformers";
import {ProgrammFilesList} from "../programmsModalTabTemplates/ProgrammFilesList";

export const NewProgrammsTemplate = {
  text: "Yangi dasturlar",
  path: YANGI_DASTURLAR,
  type: PROGRAMMERS_CHILD_PAGES,
  key: "1",
  modal: {
    style: {
      width: 1000,
      marginTop: "-70px",
    },
    tabs: [ProgrammSpecifications, ProgrammPerformers, ProgrammFilesList],
  },
  isOpenModal: false,
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "10%",
      align: "center",
    },
    {
      title: "Mijoz F.I.O",
      dataIndex: "fish",
      key: "FISh",
      width: "40%",
      align: "center",
    },
    {
      title: "Dastur nomi",
      dataIndex: "programm_name",
      key: "programm_name",
      width: "20%",
      align: "center",
    },
    {
      title: "Izoh",
      dataIndex: "izoh",
      key: "izoh",
      width: "20%",
      align: "center",
    },
    {
      title: "Ish olingan vaqti",
      dataIndex: "start_time",
      key: "start_time",
      width: "30%",
      align: "center",
    },
    {
      title: "Ish topshirish vaqti",
      dataIndex: "finish_time",
      key: "finish_time",
      width: "40%",
      align: "center",
    },
    {
      title: "Kim orqali",
      dataIndex: "by_client",
      key: "by_client",
      width: "30%",
      align: "center",
    },
    {
      title: "Hodim",
      dataIndex: "staff",
      key: "staff",
      onFilter: (value, record) => record.yonalish.indexOf(value) === 0,
      width: "30%",
      align: "center",
    },
  ],
  data: [
    {
      number: 22,
      fish: "Teshabek",
      programm_name: "Bolta CRM",
      izoh: "izoh",
      start_time: "12.05.2022",
      finish_time: "30.05.2022",
      by_client: "jaloliddin",
      staff: "Komilbek",
    },
    {
      number: 23,
      fish: "Ketmonbek",
      programm_name: "Bolda tizim",
      izoh: "izohcha",
      start_time: "12.03.2022",
      finish_time: "15.04.2022",
      by_client: "Qurbonali",
      staff: "Komilbek",
    },
  ],
};
