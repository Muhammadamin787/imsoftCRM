import {Input, InputNumber, DatePicker, Select} from "antd";
import {Option} from "antd/lib/mentions";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "./GlobalModal.scss";
import {
    DATE,
    IMAGE,
    MAP,
    NUMBER,
    TEXTAREA,
    PHONE,
    SELECT,
    STRING,
    UPLOAD,
} from "./InputTypes";
import {inputDeafultHeght} from "../../constant/deafultStyle";
import "moment/locale/ru";
import MapModal from "./MapModal";
import UpLoadJPG from "./UpLoadJPG";
import {useDispatch} from "react-redux";
import AvatarUpload from "./AvatarUpload"


const {TextArea} = Input;

const ModalInput = ({
                        placeholder,
                        name,
                        gridRow,
                        gridColumn,
                        label,
                        type,
                        option,
                        height,
                        width,
                        Iconic,
                    }) => {
    let input = null;

    const dispatch = useDispatch();

    const handleChangeValue = (e) => {
        const setInputData = {
            [e.name]: e.value,
        }
        // dispatch(addValuesData(setInputData))
    };

    switch (type) {
        case STRING:
            input = (
                <Input
                    addonBefore={label}
                    name={name}
                    placeholder={placeholder}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    // value={value}
                    onChange={(e) => {
                        const target = {
                            name: e.target.name,
                            value: e.target.value,
                        };
                        handleChangeValue(target);
                    }}
                />
            );
            break;

        case NUMBER:
            input = (
                <InputNumber
                    addonBefore={label}
                    type="number"
                    name={name}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    placeholder={placeholder}
                    showSearch
                    // value={value}
                    onChange={(e) => {
                        const target = {
                            name: e.target.name,
                            value: e.target.value,
                        };
                        handleChangeValue(target);
                    }}
                />
            );
            break;

        case SELECT:
            input = (
                <Select
                    addonBefore={label}
                    size="small"
                    name={name}
                    placeholder={placeholder}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    // value={value}
                    onSelect={(event) => {
                        const target = {
                            name: name,
                            value: event,

                        };

                        handleChangeValue(target);
                    }}
                >
                    {option &&
                        option?.map((option, i) => (
                            <Option value={option.value} key={i}>
                                {option.value}
                            </Option>
                        ))}
                </Select>
            );
            break;

        case MAP:
            input = (
                <MapModal
                    gridColumn={gridColumn}
                    gridRow={gridRow}
                    height={height}
                    name={name}
                    handleChangeValue={handleChangeValue}
                />
            );
            break;

        case DATE:
            input = (
                <DatePicker
                    placeholder={placeholder}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    format="DD.MM.YYYY"
                    allowClear={false}
                    // defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
                    // value={value}
                    onChange={(_, dateString) => {
                        const target = {
                            name: name,
                            value: dateString
                        };
                        handleChangeValue(target);
                    }}
                />
            );
            break;

        case TEXTAREA:
            input = (
                <TextArea
                    placeholder={placeholder}
                    autoSize={{minRows: 3, maxRows: 3}}
                    // value={value}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    onChange={(data) => {
                        const target = {
                            name: name,
                            value: data.target.value
                        };

                        handleChangeValue(target);
                    }}
                />
            );
            break;

        case PHONE:
            input = (
                <PhoneInput
                    country={"uz"}
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    specialLabel={false}
                    disableDropdown={true}
                    countryCodeEditable={false}
                    areaCodes={{
                        uz: ["+998"],
                    }}
                    masks={{uz: "(..) ...-..-.."}}
                    prefix="+"
                    // value={valuess[name] ? values[name] : "+998"}
                    onChange={(data) => {
                        const e = {
                            name: name,
                            value: data
                        };
                        handleChangeValue(e);
                    }}
                />
            );
            break;

        case UPLOAD:
            input = (
                // <UpLoadFile
                //   id="file-uploder"
                //   name={name}
                //   placeholder={placeholder}
                //   gridColumn={gridColumn}
                //   gridRow={gridRow}
                //   height={height}
                //   Iconic={Iconic}
                //   // value={value}
                //   onChange={(data) => {
                //     const e = {
                //       name: data,
                //     };
                //     handleChangeValue(e);
                //   }}
                // />
                <AvatarUpload
                    id="file-uploder"
                    name={name}
                    placeholder={placeholder}
                    gridColumn={gridColumn}
                    gridRow={gridRow}
                    height={height}
                    Iconic={Iconic}

                />
            );
            break;

        case IMAGE:
            input = (
                <UpLoadJPG
                    id="file-uploder"
                    name={name}
                    placeholder={placeholder}
                    gridColumn={gridColumn}
                    gridRow={gridRow}
                    height={height}
                    Iconic={Iconic}
                    // value={value}
                    onChange={(data) => {
                        const e = {
                            name: name,
                            value: data.target.file,
                        };
                        console.log(data);
                        handleChangeValue(e);
                    }}
                />
            );
            break;

        default:
            break;
    }

    return input;
};

export default ModalInput;
