import { useEffect, useState } from "react";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";
import { useSelector } from "react-redux";
import GlobalTable from "../../../components/Table/GlobalTable";
import ClientTemplate from "../../../Templates/pageTemplates/ClientTemplate";
import ChildTabs from "../../../components/ChildTabs/ChildTabs";


const ClientPageChild = ({ activeKey }) => {
  const [height, setHeight] = useState(0);
  const { tableItem } = useSelector((s) => s.tabs_reducer);

  useEffect(() => {
    const dad = document.getElementById("site__loyout");
    setHeight(parseInt(dad.getBoundingClientRect().height));
  }, []);

  return (
    <>
      <Toolbar tableItem={tableItem} />
      <div className="my__layout_child" style={{ height: height - 70 + "px" }}>
        <ChildTabs data={ClientTemplate} activeKey={activeKey} />
        <GlobalTable />
      </div>
    </>
  );
};
export default ClientPageChild;
