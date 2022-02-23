import { useState, useEffect } from "react";
import { Input } from "antd";
import {
  setSearchInputValue,
  setCurrentPage,
  setFilteredMainData,
} from "../../redux/stored_reducer";
import { useDispatch, useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import { Popover } from "antd";
import PaintBackground from "../PaintBackground/PaintBackground";

// ! Template dagi dataIndex agar rasim yoki string && number dan boshqa typedagi ma'lumot bo'ladigan bolsa shu arrayni 👇
// ! ichiga qaysi dataIndex larini o'qimasligini yozib qo'yishingiz talab qiliniadi aks holda projact da hatoli yoki
// ! tushunmovchilik kuzatilishi mumkin 👨‍🏫👨‍🏫👨‍🏫

const dontFilterTamlateDataIndex = [
  "developer_photo",
  "passport",
  "family",
  "hozirgi_yashash_joyi",
  "number",
  "file_1",
  "loc",
];

// ! Template dagi dataIndex keladigan ma'lumotlarning length kotta bo'lib ketadigan bo'lsa u holda table buzilib ketadi
// ! buzilishini oldini olish uchun popover chiqarish kerak qaysi dataIndex ga chiqishini yozing 👨‍🏫👨‍🏫👨‍🏫

const popoverTrue = ["about", "general_info", "home_address"];

const { Search } = Input;

const SearchInput = () => {
  const [value, setValue] = useState("");
  const { currentPage } = useSelector((state) => state.tabs_reducer);
  const {mainData} = useSelector((state) => state.unsaved_reducer)
  const [keys, setKeys] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchInputValue(value));
  }, [value]);

  useEffect(() => {
    setKeys(Object.keys(mainData[0] ? mainData[0] : []));
  }, [mainData]);

  useEffect(() => {
    let filter = mainData.filter((item) => {
      for (let i = 0; i < keys.length; i++) {
        if (typeof item[keys[i]] === "string") {
          console.log(item[keys[i]]);
          if (
            item[keys[i]]
              .toString()
              .toLowerCase()
              .includes(value.toLocaleLowerCase())
          ) {
            return item;
          }
        }
      }
    });

    let newColumn = currentPage?.columns?.map((item) => {
      if (item?.dataIndex) {
        if (!dontFilterTamlateDataIndex.includes(item?.dataIndex)) {
          return {
            ...item,
            render: (text) => {
              let content = (
                <div style={{ width: "400px" }}>
                  <PaintBackground text={`${text}`} value={value?value:" "} />
                </div>
              );
              return popoverTrue.includes(item.dataIndex) ? (
                <Popover placement="leftTop" content={content}>
                  <div className="hodim-template">
                    <div className={"box-shadow"}></div>
                    <PaintBackground text={`${text}`} value={value?value:""} />
                  </div>
                </Popover>
              ) : (
                <PaintBackground text={`${text}`} value={value?value:""} />
              );
            },
          };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    if (currentPage?.columns) {
      dispatch(setCurrentPage({ ...currentPage, columns: newColumn }));
    }

    dispatch(setFilteredMainData(filter));
  }, [value]);

  return (
    <Search
      placeholder="Search..."
      value={value}
      allowClear
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
