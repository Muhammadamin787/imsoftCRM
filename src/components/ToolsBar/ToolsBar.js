import React from "react";
import "./ToolsBar.scss";
import {Button} from "antd";
import {
    MacRed,
    MacGreen,
    MacGray,
    AddItem,
    AddFile,
    Antenna,
    Circle,
    SignallessAntenna,
    AntennaReceive,
    AddFolder,
    EditFile,
    CopyFolder,
    TransferFolder,
    MacYellow,
} from "../../assets/icons/icons";
import GlobalTable from "../Table/GlobalTable";
// import GlobalModal from "../Modal/GlobalModal";
import {useSelector, useDispatch} from "react-redux";
import {
    toggleModal,
    setCurrentPage,
    changePanes,
    removeTableItem,
} from "../../redux/tabs_reducer";
import {useNavigate} from "react-router-dom";
import {Popconfirm, message} from "antd";
import MacActions from "./MacActions/MacActions";
import Actions from "./Actions/Actions";
import {findIcon} from "../../assets/icons/icons"
import { Popconfirm, message } from 'antd';










const ToolsBar = ({page}) => {
    const dispatch = useDispatch();
    const {Panes, currentPage, tableItem} = useSelector((s) => s.tabs_reducer);
    const navigate = useNavigate();

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
        <div className="child-page">
            <div className="child-header">
                <Actions tableItem={tableItem} Panes={Panes} currentPage={currentPage}/>
            </div>


      <div className="child-body">
        <GlobalTable />
      </div>
    </div>
  );
};

export default ToolsBar;
