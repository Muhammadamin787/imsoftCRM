import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { ServiceIcon } from "../functions/icons";
import {useSelector, useDispatch} from "react-redux"
import { Tabs } from "antd";
import { removeTab } from "../../redux/tabs_reducer"

const { TabPane } = Tabs;

const BottomTabs = () => {
  
  const {Panes} = useSelector(state => state.tabs_reducer);
  
  const dispatch = useDispatch()
  
  
  const [panes, setPanes] = useState(Panes);
  const [newTabIndex, setNewTabIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(panes[0].key);

  useEffect(() =>{
    setPanes(Panes);
  },[Panes])

  
  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      remove(targetKey);
      dispatch(removeTab(targetKey));
    }
    
  };


  const add = () => {
    let newTabIndex2 = newTabIndex + 1;
    let key = `newTab${newTabIndex2}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: key });
    setPanes(panes);
    setActiveKey(key);
    setNewTabIndex(newTabIndex2);
  };

  const remove = (targetKey) => {
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        setActiveKey(panes[lastIndex].key);
      } else {
        setActiveKey(panes[0].key);
      }
    }
    setPanes(newPanes);
  };

  return (
    <div>
      {/* <div style={{ marginBottom: 16 }}>
    <Button onClick={add}>ADD</Button>
  </div> */}
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        className="site-footer__tabs"
      >
        {panes.map((pane) => (
          <TabPane
            tab={
              <div className="site-footer__tab">
                <ServiceIcon /> <span>{pane.title}</span>
              </div>
            }
            key={pane.key}
          >
            {/* {pane.content} */}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default BottomTabs;

// ReactDOM.render(<BottomTabs />, document.getElementById("container"));
