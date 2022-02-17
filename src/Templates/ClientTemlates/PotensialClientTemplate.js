import React from "react";
import { FieldNumberOutlined } from "@ant-design/icons";
import { POTENSIAL_MIJOZLAR } from "../../pages/pageConstants/PageRoutes";
import { CLIENTS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Popover } from "antd";
import BigLength from "../../components/BigLength/BigLength";
const PotensialClientTemplate = {
  text: "Potensial mijozlar",
  key: "0",
  icon: "ProfileIcon",
  path: POTENSIAL_MIJOZLAR,
  type: CLIENTS_CHILD_PAGES,
  isOpenModal: false,
  mainUrl: "/clients/status/1",
  allData: [],
  //   form: [
  //     {
  //       grid: "1fr",
  //       inputs: [
  //         {
  //           name: "Yunalishlar",
  //           type: STRING,
  //           required: true,
  //           name: "Yo'nalishlar",
  //           type: STRING,
  //           required: true,
  //           placeholder: "Yo'nalishlar",
  //           value: "",
  //         },
  //       ],
  //     },
  //   ],

  filters: [
    "latitude",
    "order_time",
    "type_name",
    "home_address",
    "address_name",
    "state_name",
    "region_name",
    "category_id",
  ],
  
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "15%",
      align: "center",
      render: (text, _, i) => ++i,
    },

    {
      title: "Kim orqali",
      dataIndex: "enterprise_name",
      key: "enterprise_name",
      width: "60%",
      align: "center",
    },

    {
      title: "F.I.O",
      dataIndex: "client_name",
      key: "client_name",
      width: "80%",
      align: "center",
    },

    {
      title: "Korxona nomi",
      dataIndex: "enterprise_name",
      key: "enterprise_name",
      width: "50%",
      align: "center",
    },

    {
      title: "Telefon",
      dataIndex: "operator_phone_number",
      key: "operator_phone_number",
      width: "50%",
      align: "center",
    },

    {
      title: "Izox",
      dataIndex: "general_info",
      key: "general_info",
      width: "60%",
      align: "center",
      render: (text) => <BigLength text={text} />,
    },

    {
      title: "Rasm",
      dataIndex: "file",
      key: "file",
      width: "40%",
      render: (_, record) => {
        return (
          <Zoom zoomMargin={10}>
            <picture>
              {/* <source media="(max-width: 800px)" srcSet={record.rasmi} /> */}
              <img
                alt="img"
                src={
                  "https://media.istockphoto.com/photos/people-watching-and-photographing-the-northern-lights-aurora-at-the-picture-id1177321571?k=20&m=1177321571&s=612x612&w=0&h=LoG5xB4PAGat6BcfUK0iGADcXxtvoiEkd1VqaFNrGrI="
                }
                width="30"
                height="30"
                style={{ objectFit: "contain" }}
              />
            </picture>
          </Zoom>
        );
      },
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "latitude",
      key: "latitude",
      width: "40%",
      align: "center",
      // onFilter: (value, record) => record.location.indexOf(value) === 0,
    },
    {
      title: "Yo’nalishi",
      dataIndex: "category_id",
      key: "category_id",
      width: "40%",
      onFilter: (value, record) => record.category_id.indexOf(value) === 0,
      align: "center",
    },
    {
      title: "Viloyat",
      dataIndex: "state_name",
      key: "state_name",
      width: 100,
      align: "center",
      onFilter: (value, record) => record.state_name.indexOf(value) === 0,
    },
    {
      title: "Shahar/Tuman",
      dataIndex: "region_name",
      key: "region_name",
      width: "50%",
      align: "center",
      onFilter: (value, record) => record.region_name.indexOf(value) === 0,
    },
    {
      title: "Xudud",
      dataIndex: "address_name",
      key: "address_name",
      width: "40%",
      align: "center",
      onFilter: (value, record) => record.address_name.indexOf(value) === 0,
    },
    {
      title: "Manzil",
      dataIndex: "home_address",
      key: "home_address",
      width: "50%",
      align: "center",
      onFilter: (value, record) => record.home_address.indexOf(value) === 0,
      render: (text) => <BigLength text={text} />,
    },
    {
      title: "Faoliyat",
      dataIndex: "type_name",
      key: "type_name",
      width: "40%",
      align: "center",
      onFilter: (value, record) => record.type_name.indexOf(value) === 0,
    },
    {
      title: "Qo’shilgan Vaqti",
      dataIndex: "order_time",
      key: "order_time",
      width: "60%",
      align: "center",
      onFilter: (value, record) => record.vaqt.indexOf(value) === 0,
    },
  ],
  scroll: { x: 2500, y: 1500 },
};

export default PotensialClientTemplate;
/*
enterprise_name: korhona nomi,
client_name: fio,
operator_phone_number: telefon,
genaral_info: izox,
lacation: longtitude, latitude,
state_name: viloyat,
region_name: shahar/tuman,
address_name: hudud,
home_address: manzil,
activity_type_name: faoliyat,
order_time: qo'shilgan vaqt,
category_id: yo'nalish
*/
