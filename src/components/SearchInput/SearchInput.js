import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPageData } from "../../redux/tabs_reducer";
import {SearchTableInput} from 'ant-table-extensions';
import { SearchOutlined } from "@ant-design/icons";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const state = useSelector((state) => state?.tabs_reducer);
  const dispatch = useDispatch();

  /* ------------------------------------ / ----------------------------------- */

  useEffect(() => {
    setData(state?.currentPage?.data);
  }, [state?.currentPage?.text]);

  /* ------------------------------------ / ----------------------------------- */
  
 useEffect(() => {
    dispatch(changeCurrentPageData(search));
 }, [search]);


  return (
    <>
      <SearchTableInput
        columns={state?.currentPage?.columns?state?.currentPage?.columns:[]}
        dataSource={data} 
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
