import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../../redux/tabs_reducer';
import CustomersPage from "../CustomersPage";
const CustomersPageChild = ({ page }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(s => s.tabs_reducer.currentPage);
  
  return <div>
    <CustomersPage activeKey={currentPage?.key} />
    <h2>{currentPage?.text}</h2>
    
  </div>;
};
export default CustomersPageChild;
