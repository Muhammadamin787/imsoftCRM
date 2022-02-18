import "../clientsPage.scss";
import {Tabs} from "antd";
import {Link} from "react-router-dom";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import GlobalTable from "../../../components/Table/GlobalTable";
import ClientTemplate from "../../../Templates/pageTemplates/ClientTemplate";
import {setCurrentPage, addNewTab} from "../../../redux/tabs_reducer";

const {TabPane} = Tabs;

const ClientPageChild = ({activeKey}) => {
    const dispatch = useDispatch();
    const {tableItem} = useSelector(s => s.tabs_reducer);

    const handleTab = (page) => {
        dispatch(setCurrentPage(page));
        dispatch(addNewTab(page));
    };

    return (
        <div>
            <Toolbar tableItem={tableItem} />
            <Tabs defaultActiveKey={activeKey}>
                {ClientTemplate?.tabs?.map((item) => (
                    <TabPane key={item.key}
                             tab={
                                 <Link to={item.path} onClick={() => handleTab(item)}>
                                     {item.text}
                                 </Link>
                             }/>
                ))}
            </Tabs>
            <GlobalTable/>
        </div>
    );
};
export default ClientPageChild;
