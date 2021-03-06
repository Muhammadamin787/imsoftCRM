import {Input, InputNumber, DatePicker, Select, message} from "antd";
import {Option} from "antd/lib/mentions";
import React, {useEffect, useState} from "react";
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
    UPLOAD, PICTURE_WALL,
} from "./InputTypes";
import {inputDeafultHeght} from "../../constant/deafultStyle";
import "moment/locale/ru";
import MapModal from "./MapModal";
import UpLoadJPG from "./UpLoadJPG";
import {useDispatch, useSelector} from "react-redux";
import UploadFile from "./UpLoadFile";
import {setValues, setInnerModel, toggleModal, toggleInnerModal, setAllData} from "../../redux/tabs_reducer"
import axios from "../../functions/axios"
import {findIcon} from "../../assets/icons/icons";
import {PicturesWall} from "./PicturesWall/PicturesWall";


const {TextArea} = Input;

const ModalInput = ({

                        autoSelect,
                        placeholder,
                        name,
                        gridRow,
                        gridColumn,
                        label,
                        type,
                        height,
                        Iconic,
                        options,
                        template,
                        required,
                        handleChangeValue
                    }) => {
    let input = null;
    const dispatch = useDispatch();
    const {currentPage, values, allData, innerModal} = useSelector((state) => state.tabs_reducer);


  const handleSelectAdd = (template) => {
    dispatch(setInnerModel(template))
    dispatch(toggleInnerModal(true))

  }


    switch (type) {
        case STRING:
            input = (
                <label
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    required={required}
                >
                    {label && label}
                    <Input
                        name={name}
                        autoFocus
                        value={values && values[name]}
                        placeholder={placeholder}
                        required={required}
                        onChange={(e) => {
                            const target = {
                                [name]: e.target.value,
                            };
                            handleChangeValue(target);
                        }}
                    />
                </label>
            );
            break;
        case NUMBER:
            input = (
                <InputNumber
                    addonBefore={label}
                    type="number"
                    autoFocus
                    name={name}
                    required
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                    placeholder={placeholder}
                    showSearch
                    onChange={(e) => {
                        const target = {
                            [name]: e,
                        };
                        handleChangeValue(target);
                    }}
                />
            );
            break;
        case SELECT:
            input = (
                <label
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                    required={required}
                    className="select-label"
                >
                    {label && label}
                    <div className="select-add__option">
                        <Select
                            size="small"
                            name={name}
                            autoFocus
                            placeholder={placeholder}
                            required={required}
                            value={values[name]}
                            onChange={(e) => {

                                if (autoSelect) {
                                    let selectedValues = {[name]: e};
                                    autoSelect.forEach(el => {
                                        let thisObj = allData[options].find(item => item["id"] === e);
                                        selectedValues = {...selectedValues, [el]: thisObj[el]};
                                    });
                                    console.log(selectedValues)
                                    handleChangeValue(selectedValues);
                                } else {
                                    handleChangeValue({[name]: e});
                                }
                            }}>
                            {allData && allData[options]?.map((option, i) => (
                                <Option value={option.id} key={option.id}>
                                    {option.name}
                                </Option>
                            ))}
                        </Select>
                        {innerModal == "" ? <div className="option-add"
                                                 onClick={() => handleSelectAdd(template)}>{findIcon("Plus")}</div> : null}
                    </div>
                </label>
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
                    required={required}
                />
            );
            break;
        case DATE:
            input = (
                <label
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                >
                    {label && label}
                    <DatePicker
                        placeholder={placeholder}
                        format="DD.MM.YYYY"
                        allowClear={false}
                        autoFocus
                        // defaultValue={moment("2020/01/01", "YYYY/MM/DD")}
                        required={required}
                        onChange={(_, dateString) => {
                            const target = {
                                [name]: dateString,
                            };
                            handleChangeValue(target);
                        }}
                    />
                </label>
            );
            break;
        case TEXTAREA:
            input = (
                <label
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}

                >
                    {label && label}
                    <TextArea
                        placeholder={placeholder}
                        autoFocus
                        required={required}
                        autoSize={{minRows: 3, maxRows: 3}}
                        onChange={(data) => {
                            const target = {
                                [name]: data.target.value,
                            };

                            handleChangeValue(target);
                        }}
                    />
                </label>
            );
            break;
        case PHONE:
            input = (
                <label
                    style={{
                        gridColumn: gridColumn,
                        gridRow: gridRow,
                        height: height ? height + "px" : inputDeafultHeght + "px",
                    }}
                >
                    {label && label}
                    <PhoneInput
                        country={"uz"}
                        style={{height: "65px !important"}}
                        specialLabel={false}
                        // autoFormat
                        disableDropdown={true}
                        countryCodeEditable={false}
                        required={required}
                        areaCodes={{
                            uz: ["+998"],
                        }}
                        masks={{uz: "(..) ...-..-.."}}
                        prefix="+"
                        onChange={(data) => {
                            const target = {
                                [name]: data,
                            };
                            handleChangeValue(target);
                        }}
                    />
                </label>
            );
            break;
        case UPLOAD:
            input = (
                <UploadFile
                    id="file-uploder"
                    name={name}
                    placeholder={placeholder}
                    gridColumn={gridColumn}
                    gridRow={gridRow}
                    height={height}
                    handleChange={handleChangeValue}
                    Iconic={Iconic}
                    label={label}
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
                    label={label}
                />
            );
            break;
        case PICTURE_WALL:
            input = (
                <PicturesWall gridColumn={gridColumn}
                              gridRow={gridRow}/>
            );
            break;
        default:
            break;

    }

    return input;
};

export default ModalInput;
