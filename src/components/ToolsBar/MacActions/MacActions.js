import React from "react";
import { MacGreen, MacRed, MacYellow } from "../../../assets/icons/icons";
import { changePanes, setCurrentPage } from "../../../redux/tabs_reducer";
import { LineOutlined, CloseOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MacActions = ({ Panes, currentPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeCurrentPage = (type = null) => {
    let position = null;
    Panes?.forEach((item, i) => {
      if (item?.text === currentPage?.text) {
        position = i;
        !type && dispatch(changePanes(i));
      }
    });
    if (position === 0 && Panes?.length === 1) {
      navigate("/servis");
    } else if (Panes?.length - 1 > position) {
      navigate(Panes[position]?.path);
      dispatch(setCurrentPage(Panes[position]));
    } else {
      navigate(Panes[position - 1]?.path);
      dispatch(setCurrentPage(Panes[position - 1]));
    }
  };

  return (
    <div className="toolbar__buttons">
      <button
        className="child-page__button green_btn mac_btn"
        onClick={() => removeCurrentPage("minimize")}
      >
        <LineOutlined />
      </button>
      <button className="child-page__button yellow_btn">
        <FullscreenExitOutlined />
      </button>
      <button
        className="child-page__button red_btn"
        onClick={() => removeCurrentPage()}
      >
        <CloseOutlined />
      </button>
    </div>
  );
};

export default MacActions;
