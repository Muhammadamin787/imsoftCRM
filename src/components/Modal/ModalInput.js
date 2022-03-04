import {Input, InputNumber, DatePicker, Select} from "antd";
import {Option} from "antd/lib/mentions";
import React, {useEffect, useState, useRef} from "react";
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
  PICTURE_WALL, PASSWORD, MULTIPLE_SELECT,
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
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { accessValues } from "../../constant/constants";

const { TextArea } = Input;

const ModalInput = (props) => {
  let input = null;
  const dispatch = useDispatch();
  const { currentPage, values, innerModal, values2 } = useSelector(
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
    isInnerModal,
    filePath,
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

  const getProperValue = () => {
    if (innerModal && isInnerModal) {
      return values2[name];
    } else {
      return values[name];
    }
  };

  const getProperValueDate = () => {
    if (innerModal && isInnerModal) {
      return moment(values2[name], "YYYY-MM-DD");
    } else {
      if (values[name]) {
        return moment(values[name], "YYYY-MM-DD");
      } else {
        return "";
      }
    }
  };

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
            value={getProperValue()}
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
          value={getProperValue()}
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
              autoFocus
              required={required}
              value={getProperValue()}
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
            allowClear={false}
            value={getProperValueDate()}
            autoFocus
            required={required}
            onChange={(e, dateString) => {
              const formatDate = moment(e._d).format("YYYY-MM-DD hh:mm:ss");
              const target = {
                [name]: formatDate,
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
            value={getProperValue()}
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
            value={getProperValue() ? getProperValue() : "+998"}
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
              : []
          }
        />
      );
      break;

    case PASSWORD:
      input = (
        <label style={{
          gridColumn: gridColumn,
          gridRow: gridRow,
          height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          required={required}>
          {label && label}
          <Input.Password
            placeholder="input password"
            value={values[name]}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e) => {
              handleChangeValue({
                [name]: e.target.value,
              });
            }}
          />
        </label>
      );
      break;

    case MULTIPLE_SELECT:
      const access = accessValues;
      const children = [];
      access.map(category => {
        children.push(<Option key={category.value}>{category.text}</Option>);
      })
      input = (
        <label style={{
          gridColumn: gridColumn,
          gridRow: gridRow,
          height: height ? height + "px" : inputDeafultHeght + "px",
        }}
          required={required}>
          {label && label}
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(value) => {
              let res = [1,4];
              value?.map(el => {
                accessValues.map(item => {
                  if (el === item.text || +el === item.value) {
                    res.push(+item.value);
                  }
                })
              })
              handleChangeValue({
                access: res,
              })
            }}
          >
            {children}
          </Select>
        </label>
      );
      break;
    default:
      break;
  }

  return input;
};

export default ModalInput;
