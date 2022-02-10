import React from 'react';
import "./programmesPage.scss"
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import {Table, Tabs} from 'antd';
import InnerTable from "../../components/Table/innerTable/InnerTable";


const ProgrammesPage = ({page}) => {
    const {TabPane} = Tabs;

    function callback(key) {
    }

    return (
        <div className='programmes-page'>
            <Toolbar currentPage={page}/>
            <Tabs defaultActiveKey="0" onChange={callback} className="programmes-tabs">
                {
                    page?.tabs?.map((tab,i) =>
                        <TabPane tab={tab.text} key={i}>
                            <InnerTable innerTable={tab}/>
                        </TabPane>
                    )
                }
            </Tabs>
        </div>
    );
};

export default ProgrammesPage;
