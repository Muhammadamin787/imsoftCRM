import { useState, useEffect } from "react";
import { Input } from "antd";
import {
  setSearchInputValue,
  setCurrentPage,
  setFilteredMainData,
} from "../../redux/tabs_reducer";
import { useDispatch, useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
const filterqidirmaydiganTamlateDataIndex = [
  "developer_photo",
  "passport",
  "family",
  "hozirgi_yashash_joyi",
  "number",
];
const { Search } = Input;
const NewSearch = () => {
  const [value, setValue] = useState("");
  const { mainData, currentPage } = useSelector((s) => s.tabs_reducer);
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
      if (!filterqidirmaydiganTamlateDataIndex.includes(item.dataIndex)) {
        return {
          ...item,
          render: (text) => (
            <div
              style={
                item.dataIndex !== "about"
                  ? {}
                  : {
                      height: "50px",
                      overflowY: "scroll",
                      fontSize: ".9em",
                      margin: "-2px 0",
                      padding: 0,
                      // border: "1px solid red"
                    }
              }
            >
              <Highlighter
                highlightClassName={{ backgroundColor: "#000", padding: 15 }}
                searchWords={[`${value}`]}
                autoEscape={true}
                textToHighlight={text}
              />
            </div>
          ),
          // render: (text, _, i) => (
          //   <Highlighter
          //     highlightClassName={{ backgroundColor: "#000", padding: 15 }}
          //     searchWords={[`${value}`]}
          //     autoEscape={true}
          //     textToHighlight={text}
          //   />
          // ),
        };
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

export default NewSearch;
