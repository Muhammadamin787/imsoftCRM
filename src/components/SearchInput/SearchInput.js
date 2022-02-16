import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPageData, setData } from "../../redux/tabs_reducer";
import { SearchTableInput } from "ant-table-extensions";
import { SearchOutlined } from "@ant-design/icons";

function SearchInput() {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => state?.tabs_reducer);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);
  /* ------------------------------------ / ----------------------------------- */

  // useEffect(() => {
  //   setCurrentData(state?.currentPage?.data);
  // }, [state?.currentPage?.text]);

  /* ------------------------------------ / ----------------------------------- */

  useEffect(() => {
    // dispatch(setData(search));
    console.log(search);
  }, [search]);

  useEffect(() => {
    setAllData(state?.mainData);
  }, [state?.mainData]);

  return (
    <>
      <SearchTableInput
        columns={state?.currentPage?.columns ? state?.currentPage?.columns : []}
        dataSource={state?.mainData?state?.mainData:[]}
        setDataSource={setSearch}
        inputProps={{
          placeholder: "Qidiruv...",
          prefix: <SearchOutlined />,
        }}
      />
    </>
  );
}
export default SearchInput;
