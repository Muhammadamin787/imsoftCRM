import React from 'react';
import {removeTableItem, toggleModal, changePanesModal} from "../../../redux/tabs_reducer";
import {useDispatch, useSelector} from "react-redux";
import {Button, message, Popconfirm} from "antd";
import MacActions from "../MacActions/MacActions";
import "./toolBar.scss";
import {findIcon} from '../../../assets/icons/icons';
import useSelection from "antd/es/table/hooks/useSelection";

const Toolbar = ({tableItem}) => {
    const dispatch = useDispatch();
    const {currentPage, Panes} = useSelector(state => state.tabs_reducer);


    const handleModalClick = () => {
        // dispatch(toggleModal(!page.isOpenModal));
        const newPanes = Panes.map(page => page.path === currentPage.path?{...page, isOpenModal: !currentPage.isOpenModal}:page);
        const newCurrentPage = {...currentPage, isOpenModal: !currentPage.isOpenModal};
        console.log(newCurrentPage);
        dispatch(changePanesModal({panes: newPanes, currentPage: newCurrentPage}))
    };

    const onConfirm = () => {
        dispatch(removeTableItem(tableItem));
        message.info("Malumot uchirildi.");
    }

    const handleTableItem = () => {
        dispatch(toggleModal(true));
        const item = currentPage.data.find(data => data.number === tableItem.number);
        if (item) {
            currentPage.data[item.number] = item;
        }
    };

    const currentPageIcon = findIcon(currentPage?.icon);

    const ToolBarButtons = [
        {icon: findIcon("AddItem"), onClick: handleModalClick},
        {icon: findIcon("AddFolder"),},
        {icon: findIcon("AddFile"),},
        // {icon: findIcon("CopyFolder"),},
        // {icon: findIcon("TransferFolder"),},
        // {icon: findIcon("EditFile"), onClick: handleTableItem},
        // {icon: findIcon("Antenna"),},
        // {icon: findIcon("AntennaReceive"),},
        // {
        //     icon: findIcon("SignallessAntenna"),
        //     pop: {
        //         placement: "top",
        //         title: "Malumotni o'chirmoqchimisiz!",
        //         onConfirm: onConfirm,
        //         okText: "Ha",
        //         cancelText: "Yo'q"
        //     }
        // },
        // {icon: findIcon("Circle"),},
    ]
    return (
        <div className="toolbar">
            <div className="toolbar__title">
                <span>{currentPageIcon}</span>
                <span className="toolbar__title-text">{currentPage?.text}</span>
            </div>
            <div className="toolbar__tools">
                {
                    ToolBarButtons?.map(button =>
                        button.pop ?
                            <Popconfirm {...button.pop}>
                                <Button>{button.icon}</Button>
                            </Popconfirm>
                            :
                            <Button onClick={() => button.onClick()}>
                                {button.icon}
                            </Button>
                    )
                }
            </div>
            <MacActions />
        </div>
    );
};

export default Toolbar;