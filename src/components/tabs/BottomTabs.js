import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import { removeTab } from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const BottomTabs = () => {
  const { Panes } = useSelector((state) => state?.tabs_reducer);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pathname} = window.location;

  const [panes, setPanes] = useState(Panes);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);

  useEffect(() => {
    setPanes(Panes);
  }, [Panes, pathname]);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
    const active = Panes[activeKey].path;
    navigate(active, { replace: true });
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      dispatch(removeTab(targetKey));

      if (Panes.length === 1) {
        navigate("/servis");
      } else if (targetKey === "0") {
        navigate(Panes[+targetKey + 1].path);
      } else {
        navigate(Panes[+targetKey - 1].path);
      }

    }
  };


  return (
    // <div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        className="site-footer__tabs"
      >
        {panes &&
          panes.map((pane, i) => (
            <TabPane
              tab={
                <div className="site-footer__tab">
                  {pane.icon} <span>{pane.text}</span>
                </div>
              }
              key={i}
            >
              {/* {pane.title} */}
            </TabPane>
          ))}
      </Tabs>
    // {/* </div> */}
  );
};

export default BottomTabs;
