import React from 'react';
import "./programmesPage.scss"
import Toolbar from "../../components/ToolsBar/Toolbar/Toolbar";
import {Table, Tabs} from 'antd';


const ProgrammesPage = ({page}) => {
    const {TabPane} = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className='programmes-page'>
            <Toolbar currentPage={page}/>
            <Tabs defaultActiveKey="0" onChange={callback} className="programmes-tabs">
                {
                    page?.tabs?.map((tab,i) =>
                        <TabPane tab={tab.text} key={i}>
                            <Table bordered
                                   columns={tab.columns}
                                   className="inner-table"
                                   dataSource={tab?.data}
                                   size={"small"}
                                   scroll={tab?.scroll ? {...tab?.scroll} : {y: 380}}
                                   pagination={{position: ["bottomCenter"]}}
                            />
                        </TabPane>
                    )
                }
            </Tabs>
        </div>
    );
};

export default ProgrammesPage;
