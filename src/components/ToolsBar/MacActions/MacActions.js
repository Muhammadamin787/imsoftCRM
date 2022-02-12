import React from "react";
import {changePanes, setCurrentPage} from "../../../redux/tabs_reducer";
import {
    LineOutlined,
    CloseOutlined,
    FullscreenExitOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./macActions.scss";

const MacActions = ({onResize, onHide, onExit}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentPage, Panes} = useSelector((s) => s.tabs_reducer);

    const removeCurrentPage = (type = null) => {
        let position = null;
        Panes?.forEach((item, i) => {
            if (item?.text === currentPage?.text) {
                position = i;
                !type && dispatch(changePanes(i));
            }
        });
        if (position === 0 && Panes?.length === 1) {
            navigate("/");
        } else if (Panes?.length - 1 > position) {
            navigate(Panes[position]?.path);
            dispatch(setCurrentPage(Panes[position]));
        } else {
            navigate(Panes[position - 1]?.path);
            dispatch(setCurrentPage(Panes[position - 1]));
        }
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    const macButtons = [
        {
            icon: <LineOutlined/>,
            className: "green_btn",
            onClick: onHide ? onHide : () => removeCurrentPage("minimize")
        },
        {
            icon: <FullscreenExitOutlined/>,
            className: "yellow_btn",
            onClick: onResize || toggleFullScreen
        },
        {
            icon: <CloseOutlined/>,
            className: "red_btn",
            onClick: onExit ? onExit :   () => removeCurrentPage()
        },
    ]
    return (
        <div className="toolbar__buttons">
            {
                macButtons.map(button =>
                    <button className={"child-page__button " + button.className} onClick={button.onClick}>
                        {button.icon}
                    </button>
                )
            }
        </div>
    );
};

export default MacActions;
