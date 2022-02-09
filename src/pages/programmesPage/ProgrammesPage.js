import React from 'react';
import "./programmesPage.scss"
import GlobalTable from "../../components/Table/GlobalTable";
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import {Tabs} from 'antd';


const ProgrammesPage = ({page}) => {
    const {TabPane} = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className='programmes-page'>
            <Toolbar currentPage={page}/>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
            <GlobalTable/>
        </div>
    );
};

export default ProgrammesPage;
