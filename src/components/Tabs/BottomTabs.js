import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  setCurrentPage,
  removeTab,
  clearPanes,
} from "../../redux/stored_reducer";
import { useNavigate } from "react-router-dom";
import { findIcon } from "../../assets/icons/icons";
import { ClearOutlined, CloseOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const BottomTabs = () => {
  const { Panes, currentPage } = useSelector((state) => state?.tabs_reducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = window.location;

  const [panes, setPanes] = useState(Panes ? Panes : []);

  useEffect(() => {
    setPanes(Panes);
  }, [Panes, pathname]);

  const onChange = (activeKey) => {
    navigate(Panes[activeKey].path);
    dispatch(setCurrentPage(Panes[activeKey]));
  };

  const onEdit = (e, targetKey) => {
    e.stopPropagation();
    if (panes?.length === 1) {
      navigate("/servis");
      dispatch(clearPanes());
    } else if (panes[+targetKey]?.text === currentPage?.text) {
      if (panes?.length - 1 > targetKey) {
        dispatch(setCurrentPage(panes[+targetKey + 1]));
      } else {
        dispatch(setCurrentPage(panes[+targetKey - 1]));
      }
    }
    dispatch(removeTab(targetKey));
  };

  const clearAll = () => {
    dispatch(clearPanes([]));
    navigate("/servis");
  };

  useEffect(() => {
    const parent = document.querySelectorAll(".innerText");
    parent.forEach((item, i) => {
      if (item.innerText === currentPage.text) {
        item.parentElement.classList.add("activeBottomKey");
      } else {
        item.parentElement.classList.remove("activeBottomKey");
      }
    });
  }, [currentPage]);

  return (
    <>
      {Panes?.length > 0 && (
        <div className="bottom__tabs_relative">
          <div className="site-footer__tabs">
            {Panes &&
              Panes?.map((pane, i) => (
                <button className="bottom__btn" onClick={() => onChange(i)}>
                  {findIcon(pane?.icon)}
                  <span className="innerText">{pane?.text}</span>
                  <span className="bottom__cross" onClick={(e) => onEdit(e, i)}>
                    {findIcon("CloseIconForTab")}
                  </span>
                </button>
              ))}
          </div>
          {Panes.length > 1 && (
            <button className="clear__all" onClick={clearAll}>
              <ClearOutlined /> Tabni tozalash
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default BottomTabs;
