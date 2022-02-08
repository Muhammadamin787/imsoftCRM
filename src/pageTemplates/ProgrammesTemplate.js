import React from 'react';
import {PROGRAMMES_PATH} from "../pages/pageConstants/PageRoutes";
import {PROGRAMMES_PAGE} from "../pages/pageConstants/PageTypes";
import {VectorIcon} from "../assets/icons/icons";
import {FieldNumberOutlined} from "@ant-design/icons";
import Zoom from "react-medium-image-zoom";

const ProgrammsTemplate = {
	text: "Dasturlar",
	path: PROGRAMMES_PATH,
	icon: "VectorIcon",
	type: PROGRAMMES_PAGE,
	columns: [
		{
			title: <FieldNumberOutlined/>,
			dataIndex: "number",
			key: "number",
			width: "10%",
			align: "center"
		},
		{
			title: "Mijoz F.I.O",
			dataIndex: "fish",
			key: "FISh",
			width: "40%",
			align: "center"
		},
		{
			title: "Dastur nomi",
			dataIndex: "telefon",
			key: "Telefon",
			width: "20%",
			align: "center"
		},
		{
			title: "Izox",
			dataIndex: "viloyat",
			key: "viloyat",
			width: "20%",
			align: "center"
		},
		{
			title: "Ish olingan vaqti",
			dataIndex: "shahar",
			key: "shahar",
			width: "30%",
			align: "center"
		},
		{
			title: "Ish topshirish vaqti",
			dataIndex: "manzil",
			key: "manzil",
			width: "40%",
			align: "center"
		},
		{
			title: "Kim orqali",
			dataIndex: "tugilgan_sana",
			key: "tugilgan sana",
			width: "30%",
			align: "center"
		},
		{
			title: "User",
			dataIndex: "yonalish",
			key: "yonalish",
			onFilter: (value, record) => record.yonalish.indexOf(value) === 0,
			width: "30%",
			align: "center"
		},
	]
};

export default ProgrammsTemplate;