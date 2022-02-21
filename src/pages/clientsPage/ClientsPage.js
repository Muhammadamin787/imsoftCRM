import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/tabs_reducer";
import ClientPageChild from "./clientPageChild/ClientPageChild";

const ClientsPage = ({ page }) => {
  const dispatch = useDispatch();
  return (
    <div id="my__layout">
      <ClientPageChild activeKey={page.key} />
    </div>
  );
};

export default ClientsPage;
