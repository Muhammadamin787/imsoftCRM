import "./clientsPage.scss";
import {Tabs} from "antd";
import {Link} from "react-router-dom";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import {useSelector, useDispatch} from 'react-redux';
import GlobalTable from "../../components/Table/GlobalTable";
import {setCurrentPage, addNewTab} from '../../redux/tabs_reducer';
import ClientTemplate from "../../Templates/pageTemplates/ClientTemplate";

const {TabPane} = Tabs;

const ClientsPage = ({activeKey}) => {
    const dispatch = useDispatch();
    const handleTab = (page) => {
        dispatch(setCurrentPage(page));
        dispatch(addNewTab(page));
    }

    return (
        <div>
            <Toolbar currentPage="Mijozlar Ro'yhati"/>
            <Tabs defaultActiveKey={activeKey}>
                {ClientTemplate?.tabs?.map((item) => (
                    <TabPane tab={
                        <Link to={item.path} onClick={() => handleTab(item)}>{item.text}</Link>
                    } key={item.key}>

                    </TabPane>
                ))}
            </Tabs>
            <GlobalTable />
        </div>
    );
};

export default ClientsPage;
