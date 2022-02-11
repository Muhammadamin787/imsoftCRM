import React from "react";
import {Table, Tabs} from "antd";
import ModalInput from "../ModalInput";
import InnerTable from "../../Table/innerTable/InnerTable";
import "./ModalTabs.scss"

const ModalTabs = ({tabs,i}) => {
    const [index, setIndex] = React.useState(1)

    // console.log(tabs);
    
    return (
        <Tabs type="line" destroyInactiveTabPane="true" defaultActiveKey="2">
            {tabs?.map((tab, i) => (
                
                <Tabs.TabPane tab={tab.text} key={`2`}>
                    {tab.form?.map((forma, i) => (
                        <div className="modal-grid__form"
                             key={forma?.grid}
                             style={{
                                 gridTemplateColumns: forma.grid?.columns,
                                 gridAutoRows: forma.grid?.rows,
                             }}>
                            {forma?.inputs?.map((input) => (
                                <ModalInput {...input} key={input?.name}/>
                            ))}
                        </div>
                    ))}
                    {tab?.columns && <InnerTable innerTable={tab}/>}
                </Tabs.TabPane>
            ))}
        </Tabs>
    );
};

export default ModalTabs;
