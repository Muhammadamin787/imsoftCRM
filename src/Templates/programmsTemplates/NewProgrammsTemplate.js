import { FieldNumberOutlined } from "@ant-design/icons";
import { YANGI_DASTURLAR } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { ProgrammSpecifications } from "../programmsModalTabTemplates/ProgrammSpecifications";
import { ProgrammPerformers } from "../programmsModalTabTemplates/ProgrammPerformers";
import { ProgrammFilesList } from "../programmsModalTabTemplates/ProgrammFilesList";
import BigLength from "../../components/BigLength/BigLength";
import { ProgrammsTemplateApi } from "../../constant/apiLine/apiLine";


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
  mainUrl: ProgrammsTemplateApi,
  // allData: ["/projects"],
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
      render: (text) => <BigLength text={text} />,
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
      width: "30%",
      align: "center",
      onFilter: (value, record) => record.developer_id.indexOf(value) === 0,
    },
  ],
};

// "id": 10,
// "project_name": "Christina O'Hara",
// "general_info": "Quaerat excepturi necessitatibus sit quia consequatur est. Voluptas explicabo similique ut et illum natus. Ut pariatur illum et magnam placeat. Perferendis et repellat natus aut omnis mollitia. Architecto nulla veniam at recusandae consequatur. Voluptates possimus qui et neque quae aut aliquam. Atque dolor vitae ut error. Quo voluptate at aliquam tempora. Est autem eum qui atque ut occaecati. Corporis laborum nihil facere rerum. Fuga et fugit accusamus rem quia recusandae.",
// "general_file": "https://via.placeholder.com/500x500.png/009944?text=IMSOFT+vel",
// "status_id": 2,
// "developer_id": "Prof. Roosevelt Schaden",
// "developer_info": "Quia id eos possimus quis deserunt quam beatae. Ipsum asperiores ducimus ut voluptatem aliquid. Qui reprehenderit dolores ipsam nostrum aliquid enim vitae similique.",
// "start_date": "1985-05-20 07:14:12",
// "dedline_date": "1987-05-08 08:00:54",
// "finish_date": "2013-05-28 20:29:22",
// "about_file": "Earum aut cupiditate possimus. Sint aut commodi odit deleniti officia. Deleniti iste quam placeat vero dolores. Aut in sit rerum iusto. Eveniet modi veniam atque magni veniam delectus fugiat nisi. Non ab odit rerum aut ea ut. Assumenda dolor aut libero molestias consequuntur. Molestiae provident ea velit. Numquam dolorem voluptas aliquam odio ut. Est autem molestias voluptates placeat similique dolorum ut. Ipsam sit vel voluptatem nesciunt rerum. Ad et dolorem maiores natus voluptates vel voluptate aut. Earum tempore ut voluptatum. Velit enim aut dolore est. Qui vel quis vel rerum neque.",
// "project_file": "https://via.placeholder.com/500x500.png/000088?text=IMSOFT+cupiditate",
// "client_id": "Ross Von"