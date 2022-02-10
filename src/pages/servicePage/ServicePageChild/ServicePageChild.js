import React from "react";
import "./servicePageChild.scss";
import GlobalTable from "../../../components/Table/GlobalTable";
import {useSelector, useDispatch} from "react-redux";
import {
    setCurrentPage,
    changePanes,
} from "../../../redux/tabs_reducer";
import {useNavigate} from "react-router-dom";
import Toolbar from "../../../components/ToolsBar/Toolbar/Toolbar";

const ServicePageChild = ({page}) => {
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
            <Toolbar tableItem={tableItem} Panes={Panes} currentPage={currentPage}/>
            <div className="child-body">
                <GlobalTable/>
            </div>
        </div>
    );
};

export default ServicePageChild;
