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
  allData: ["/projects"],
  filters: ["developer_id"],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "10%",
      align: "center",
      render: (text, data, index) => ++index, 
    },
    {
      title: "Mijoz F.I.O",
      dataIndex: "client_id",
      key: "client_id",
      width: "40%",
      align: "center",
    },
    {
      title: "Dastur nomi",
      dataIndex: "project_name",
      key: "project_name",
      width: "30%",
      align: "center",
    },
    {
      title: "Izoh",
      dataIndex: "general_info",
      key: "general_info",
      width: "50%",
      align: "center",
    },
    {
      title: "Ish olingan vaqti",
      dataIndex: "start_date",
      key: "start_date",
      width: "30%",
      align: "center",
    },
    {
      title: "Ish topshirish vaqti",
      dataIndex: "finish_date",
      key: "finish_date",
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
      dataIndex: "developer_id",
      key: "developer_id",
      onFilter: (value, record) => record.developer_id.indexOf(value) === 0,
      width: "30%",
      align: "center",
    },
  ],
};

/*
  id(pin):1
project_name(pin):"Prof. Loyce Predovic"
general_info(pin):"Sed quia praesentium voluptatem et et. Voluptas ea aliquam accusantium architecto nostrum eligendi. Velit voluptas qui voluptatibus autem dolores. Porro velit assumenda laudantium. Et voluptatem cum aut quia dignissimos occaecati quae possimus. Amet accusantium voluptas error vero qui eaque. Atque fugiat et non. Vel provident ratione rerum sunt. Magni quia velit esse perspiciatis qui sint ea quis. Qui corporis reiciendis temporibus aliquid."
general_file(pin):"https://via.placeholder.com/500x500.png/0088ee?text=IMSOFT+aliquid"
status_id(pin):"expedita"
developer_id(pin):"Prof. Harold Hayes DVM"
developer_info(pin):"Laborum ullam inventore illum impedit dolor corrupti est. Provident et est aperiam pariatur doloribus eum officia excepturi."
start_date(pin):"2018-08-27 15:00:31"
dedline_date(pin):null
finish_date(pin):"1998-05-16 09:46:16"
about_file(pin):null
project_file(pin):"https://via.placeholder.com/500x500.png/0077ff?text=IMSOFT+quas"
*/