import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Avatar, Badge } from "antd";
import { removeTab, setCurrentPage } from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;

const BottomTabs = () => {
  const { Panes, currentPage } = useSelector((state) => state?.tabs_reducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = window.location;

  const [panes, setPanes] = useState(Panes);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);

  useEffect(() => {
    setPanes(Panes);
  }, [Panes, pathname]);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
    const active = Panes[activeKey].path;
    navigate(active, { replace: true });
    dispatch(setCurrentPage(Panes[activeKey]));
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      if (panes.length === 1) {
        navigate("/servis");
      } else if (panes[+targetKey].text === currentPage.text) {
        if (panes.length - 1 > targetKey) {
          dispatch(setCurrentPage(panes[+targetKey + 1]));
        } else {
          dispatch(setCurrentPage(panes[+targetKey - 1]));
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
      {panes &&
        panes.map((pane, i) => (
          <TabPane
            tab={
              <div className="site-footer__tab" onClick={() => onChange(i)}>
                {pane?.icon} <span>{pane?.text}</span>
                {pane.showBadge?<Badge dot={pane.showBadge}>
                                  <Avatar shape="square" size="large" />
                                </Badge>: ""}
              </div>
            }
            key={i}
          ></TabPane>
        ))}
    </Tabs>
  );
};

export default BottomTabs;
