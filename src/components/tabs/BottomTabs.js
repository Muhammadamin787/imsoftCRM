import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Avatar, Badge } from "antd";
import { removeTab, setCurrentPage } from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";
import iconArr from "../../assets/icons/icons.js"

const { TabPane } = Tabs;

const BottomTabs = () => {
  const { Panes, currentPage } = useSelector((state) => state?.tabs_reducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = window.location;

  const [activeKey, setActiveKey] = useState(Panes && Panes[0]?.key);


  const onChange = (activeKey) => {
    console.log(activeKey);
    navigate(Panes[activeKey].path);
    setActiveKey(activeKey);
    dispatch(setCurrentPage(Panes[activeKey]));
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      if (Panes?.length === 1) {
        navigate("/servis");
      } else if (Panes[+targetKey]?.text === currentPage?.text) {
        if (Panes?.length - 1 > targetKey) {
          dispatch(setCurrentPage(Panes[+targetKey + 1]));
        } else {
          dispatch(setCurrentPage(Panes[+targetKey - 1]));
        }
      }
      dispatch(removeTab(targetKey));
    }
  };



  return (
    <Tabs
      hideAdd
      activeKey={activeKey}
      type="editable-card"
      onEdit={onEdit}
      className="site-footer__tabs"
    >
      {Panes &&
        Panes?.map((pane, i) => (
          <TabPane
              tab={
                <div className="site-footer__tab" onClick={() => onChange(i)}>
                  <span>{pane?.text}</span> 
                </div>
              }
              key={i}
            ></TabPane>
        ))}
    </Tabs>
  );
};

export default BottomTabs;
