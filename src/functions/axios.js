import {message} from "antd";
import axios from "axios";
import {BaseUrl} from "../BaseUrl";



const key = "error";
export default async (url, method, data = null, id = null) => {
	const path = id ? url + "/" + id : url;
	try {
		return await axios({
			method: method,
			url: BaseUrl + path,
			data: data,
		});
	} catch (error) {
		if (error.message.includes("500")) {
			message.error({content: "Formani to'ldiring!", key: key});
		} else {
			message.error({content: "Internet bilan aloqa yo'q", key: key});
		}
	}
};
