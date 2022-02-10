import React, {useState, useEffect} from "react";
import "./BottomTabs.scss";
import {useSelector, useDispatch} from "react-redux";
import {Tabs} from "antd";
import {removeTab, setCurrentPage} from "../../redux/tabs_reducer";
import {useNavigate} from "react-router-dom";

import {findIcon} from "../../assets/icons/icons"

const {TabPane} = Tabs;

const BottomTabs = () => {
    const {Panes, currentPage} = useSelector((state) => state?.tabs_reducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {pathname} = window.location;

    const [panes, setPanes] = useState(Panes);
    const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);

    useEffect(() => {
        setPanes(Panes);
    }, [Panes, pathname]);

    const onChange = (activeKey) => {
        navigate(Panes[activeKey].path);
        setActiveKey(activeKey);
        dispatch(setCurrentPage(Panes[activeKey]));
    };

    const onEdit = (targetKey, action) => {
        if (action === "remove") {
            if (panes?.length === 1) {
                navigate("/servis");
            } else if (panes[+targetKey]?.text === currentPage?.text) {
                if (panes?.length - 1 > targetKey) {
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
            {Panes &&
                Panes?.map((pane, i) => (
                    <TabPane
                        tab={
                            <div className="site-footer__tab" onClick={() => onChange(i)}>
                                {findIcon(pane?.icon)}
                                <span>{pane?.text}</span>
                            </div>
                        }
                        key={i}
                    />
                ))}
        </Tabs>
    );
};

export default BottomTabs;
