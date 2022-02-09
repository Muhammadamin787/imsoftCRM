import React from 'react';
import {Table, Tabs} from "antd";

const ModalTabs = ({tabs}) => {
    return (
        <Tabs defaultActiveKey={[0]}
              className="customers__tabs">
            {
                tabs?.map((tab, i) =>
                    <Tabs.TabPane tab={tab.text} key={i}>
                        <Table bordered
                               columns={tab.columns}
                               className="inner-table"
                               dataSource={tab?.data}
                               size={"small"}
                               scroll={tab?.scroll ? {...tab?.scroll} : {y: 380}}
                               pagination={{position: ["bottomCenter"]}}
                        />
                    </Tabs.TabPane>
                )
            }
            ))}
        </Tabs>
    );
};

export default ModalTabs;