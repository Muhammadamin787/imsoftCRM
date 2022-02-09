import React from "react";
import {useDispatch} from 'react-redux';
import {setCurrentPage} from '../../../redux/tabs_reducer';
const CustomersPageChild = ({ page }) => {
  const dispatch = useDispatch();
  dispatch(setCurrentPage(page));
  return <div>{page.text}</div>;
};
export default CustomersPageChild;
