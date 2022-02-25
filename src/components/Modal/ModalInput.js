import { Input, InputNumber, DatePicker, Select, message } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState, useRef } from "react";
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
  PICTURE_WALL,
} from "./InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import "moment/locale/ru";
import MapModal from "./MapModal";
import UpLoadJPG from "./UpLoadJPG";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "./UpLoadFile";
import moment from "moment";
import { setInnerModel, toggleInnerModal } from "../../redux/stored_reducer";
import axios from "../../functions/axios";
import { findIcon } from "../../assets/icons/icons";
import { PicturesWall } from "./PicturesWall/PicturesWall";

const { TextArea } = Input;

const ModalInput = (props) => {
  let input = null;
  const dispatch = useDispatch();
  const { currentPage, values, innerModal } = useSelector(
    (state) => state.tabs_reducer
  );

  const {
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
    filePath,
    autoFocus,
    handleChangeValue,
    fileName,
  } = props;

  const { allData } = useSelector((s) => s?.unsaved_reducer);

  const handleSelectAdd = (template) => {
    dispatch(setInnerModel(template));
    dispatch(toggleInnerModal(true));
  };

  const refs = useRef(null);

  useEffect(() => {
    const id = document.getElementById("autofucus");
    if (id) {
      id.focus();
    }
  }, []);

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
            id={refs && "autofucus"}
            value={values[name] ? values[name] : ""}
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
          id={refs && "autofucus"}
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
          value={values[name] ? values[name] : ""}
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
          id={refs && "autofucus"}
          className="select-label"
        >
          {label && label}
          <div className="select-add__option">
            <Select
              size="small"
              name={name}
              placeholder={placeholder}
              required={required}
              value={values[name] && values[name]}
              onChange={(e) => {
                if (autoSelect) {
                  let selectedValues = { [name]: e };
                  autoSelect?.forEach((el) => {
                    let thisObj =
                      allData &&
                      allData[options] &&
                      allData[options].find((item) => item["id"] === e);
                    selectedValues = { ...selectedValues, [el]: thisObj[el] };
                  });
                  handleChangeValue(selectedValues);
                } else {
                  handleChangeValue({ [name]: e });
                }
              }}
            >
              {allData &&
                allData[options] &&
                allData[options]?.map((option, i) => (
                  <Select.Option value={option?.id} key={option?.id}>
                    {option?.name}
                  </Select.Option>
                ))}
            </Select>
            {innerModal == "" && template ? (
              <div
                className="option-add"
                onClick={() => handleSelectAdd(template)}
              >
                {findIcon("Plus")}
              </div>
            ) : null}
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
          handleChangeValue={handleChangeValue}
          required={required}
          geo={
            values?.longitude && values?.latitude
              ? [values.latitude, values?.longitude]
              : ""
          }
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
            value={values[name] ? moment(values[name], "YYYY/MM/DD") : ""}
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
            value={values[name] ? values[name] : ""}
            autoFocus
            required={required}
            autoSize={{ minRows: 3, maxRows: 3 }}
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
            // style={{ height: "65px !important"}}
            specialLabel={false}
            disableDropdown={true}
            countryCodeEditable={false}
            required={required}
            areaCodes={{
              uz: ["+998"],
            }}
            masks={{ uz: "(..) ...-..-.." }}
            prefix="+"
            onChange={(data) => {
              const target = {
                [name]: data,
              };
              handleChangeValue(target);
            }}
            value={values[name] ? values[name] : ""}
          />
        </label>
      );
      break;
    case UPLOAD:
      input = (
        <UploadFile
          id="file-uploder"
          name={name}
          filePath={filePath}
          placeholder={placeholder}
          gridColumn={gridColumn}
          gridRow={gridRow}
          height={height}
          onChange={handleChangeValue}
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
        <PicturesWall
          gridColumn={gridColumn}
          gridRow={gridRow}
          filePath={filePath}
          name={name}
          handleChangeValue={handleChangeValue}
          fileName={fileName ? fileName : ""}
          fileList={
            values[name]
              ? [
                  {
                    uid: "-1",
                    name: "image.png",
                    status: "done",
                    url: values[name],
                  },
                ]
              : false
          }
        />
      );
      break;
    default:
      break;
  }

  return input;
};

export default ModalInput;
