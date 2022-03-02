import { message } from "antd";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";
const key = "error";

export default async (url, method = "GET", data = null, id = null) => {
    const token = localStorage.getItem("token");

    const path = id ? url + "/" + id : url;
    try {
        return await axios({
            method: method,
            url: BaseUrl + path,
            data: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (error) {
        if (error.message.includes("401")) {
            message.error({ content: "Login yoki Password notug'ri" })
        }
        if (error.message.includes("500")) {
            message.error({ content: "Formani to'ldiring!", key: key });
        } else if (error.message.includes("400")) {
            message.warn({ content: "Oldin bog'langan ma'lumitlarni o'chiring", key: key });
        } else if (error.message.includes("422")) {
            message.error({ content: error.message, key: key });
        }
    }
};


