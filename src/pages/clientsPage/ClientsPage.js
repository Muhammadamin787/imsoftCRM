import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/tabs_reducer";
import { Layout } from "antd";
import ClientPageChild from "./clientPageChild/ClientPageChild";

const ClientsPage = ({ page }) => {
  const dispatch = useDispatch();
  dispatch(setCurrentPage(page));

  return (
    <div>
      <Layout className="ant__loyout">
        <ClientPageChild activeKey={page.key} />
      </Layout>
    </div>
  );
};

export default ClientsPage;
