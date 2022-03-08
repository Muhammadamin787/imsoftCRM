import { Input, InputNumber, DatePicker, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState, useCallback, useRef } from "react";
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
  PASSWORD,
  MULTIPLE_SELECT,
  SEARCH_SELECT,
} from "./InputTypes";
import { inputDeafultHeght } from "../../constant/deafultStyle";
import "moment/locale/ru";
import MapModal from "./MapModal";
import UpLoadJPG from "./UpLoadJPG";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "./UpLoadFile";
import moment from "moment";
import { setInnerModel, toggleInnerModal } from "../../redux/stored_reducer";
import { setFilterData } from "../../redux/unsaved_reducer";
import { findIcon } from "../../assets/icons/icons";
import { PicturesWall } from "./PicturesWall/PicturesWall";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { accessValues } from "../../constant/constants";
import { Base } from "../../BaseUrl";

const { TextArea } = Input;

const ModalInput = (props) => {
  let input = null;
  const dispatch = useDispatch();
  const { values, innerModal, values2 } = useSelector(
    (state) => state.tabs_reducer
  );
  const [fileList, setFileList] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [bool, setBool] = useState(true);

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
    isInnerModal,
    filePath,
    handleChangeValue,
    fileName,
    openFile,
    filterData,
    parentSelect,
  } = props;

  const { allData, filterAllData } = useSelector((s) => s?.unsaved_reducer);

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

  useEffect(() => {
    if (type === PICTURE_WALL) {
      setFileList(
        values[name]
          ? [
              {
                uid: "-1",
                name: fileList[0]?.name ? fileList[0]?.name : "image.png",
                status: "done",
                url: Base + values[name],
              },
            ]
          : []
      );
    }
    if (type === UPLOAD) {
      setImgUrl(values[name] ? values[name] : "");
    }
  }, [values]);

  useEffect(() => {
    if (allData[filterData]) {
      if (values[name]) {
        const a = allData[filterData].filter(
          (item) => item[name] === values[name]
        );
        dispatch(setFilterData({ ...filterAllData, [filterData]: a }));
      }
    }
  }, [values]);

  useEffect(() => {
    dispatch(setFilterData(allData));
  }, [allData]);

  switch (type) {
    case STRING:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
        >
          {label && label}
          <Input
            name={name}
            autoFocus
            id={refs && "autofucus"}
            value={getProperValue()}
            placeholder={placeholder}
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
          // value={values[name] ? values[name] : ""}
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
          id={refs && "autofucus"}
          className="select-label"
        >
          {label && label}
          <div className="select-add__option">
            <Select
              size="small"
              name={name}
              autoFocus
              value={getProperValue()}
              onChange={(e) => {
                handleChangeValue({ [name]: e });
              }}
              disabled={
                parentSelect ? (values[parentSelect] ? false : true) : false
              }
            >
              {filterAllData &&
                filterAllData[options]?.map((option, i) => (
                  <Select.Option value={option?.id} key={i}>
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
            format={"DD.MM.YYYY"}
            autoFocus
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
          dispatch={dispatch}
          values={values}
          imageUrl={imgUrl}
          setUrl={setImgUrl}
          openFile={openFile}
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
          dispatch={dispatch}
          values={values}
          handleChangeValue={handleChangeValue}
          fileName={fileName ? fileName : ""}
          fileList={fileList}
          setFileList={setFileList}
        />
      );
      break;
    case PASSWORD:
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
        >
          {label && label}
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={values[name]}
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
      access.map((category) => {
        children.push(
          <Option value={category.value} key={category.value}>
            {category.text}
          </Option>
        );
      });
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
        >
          {label && label}
          <Select
            mode="multiple"
            allowClear
            value={getProperValue()}
            style={{ width: "100%" }}
            placeholder="Please select"
            maxTagCount={"responsive"}
            onChange={(value) => {
              let res = [1, 4];
              value?.map((el) => {
                accessValues.map((item) => {
                  if (!res.includes(el)) {
                    if (el === item.text || +el === item.value) {
                      res.push(+item.value);
                    }
                  }
                });
              });
              handleChangeValue({
                access: res,
              });
            }}
          >
            {children}
          </Select>
        </label>
      );
      break;
    case SEARCH_SELECT:
      let stateBir = [];
      const handleSearch = (searchWords) => {
        // setValue(value)
      };
      input = (
        <label
          style={{
            gridColumn: gridColumn,
            gridRow: gridRow,
            height: height ? height + "px" : inputDeafultHeght + "px",
          }}
          id={refs && "autofucus"}
          className="select-label"
        >
          {label && label}
          <Select
            showSearch
            value={getProperValue()}
            placeholder={placeholder}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={(e) => {
              console.log(e);
            }}
            notFoundContent={null}
          >
            {filterAllData &&
              filterAllData[options] &&
              filterAllData[options]?.map((option) => (
                <Option value={option?.id} key={option?.id}>
                  {option?.name}
                </Option>
              ))}
          </Select>
        </label>
      );
    default:
      break;
  }
  return input;
};

export default ModalInput;
