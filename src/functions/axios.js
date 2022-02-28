    import { message } from "antd";
    import axios from "axios";
    import { BaseUrl } from "../BaseUrl";

    const key = "error";

    export default async (url, method = "GET", data = null, id = null) => {
        const path = id ? url + "/" + id : url;
        try {
            return await axios({
                method: method,
                url: BaseUrl + path,
                data: data,
            });

        } catch (error) {
            if(error.message.includes("401")){
                message.error({content:"Email yoki Password notug'ri"})
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


