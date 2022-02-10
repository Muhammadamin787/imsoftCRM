import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/tabs_reducer";
import ClientsPage from "../ClientsPage";
import {Layout} from 'antd'
const ClientPageChild = ({ page }) => {
  const dispatch = useDispatch();
  dispatch(setCurrentPage(page));

  return (
    <div>
      <Layout>
        <ClientsPage activeKey={page.key} />
        {page.text}
      </Layout>
    </div>
  );
};
export default ClientPageChild;
