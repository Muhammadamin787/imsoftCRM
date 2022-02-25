import ClientPageChild from "./clientPageChild/ClientPageChild";
const ClientsPage = ({ page }) => {

  return (
    <div id="my__layout">
      <ClientPageChild activeKey={page.key} />
    </div>
  );
};

export default ClientsPage;
