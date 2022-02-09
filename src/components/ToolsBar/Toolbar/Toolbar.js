import React from 'react';
import {removeTableItem, toggleModal} from "../../../redux/tabs_reducer";
import {useDispatch} from "react-redux";
import {Button, message, Popconfirm} from "antd";
import MacActions from "../MacActions/MacActions";
import "./toolBar.scss";
import { findIcon } from '../../../assets/icons/icons';

const Toolbar = ({Panes, currentPage, tableItem}) => {
    const dispatch = useDispatch();

    const handleModalClick = () => {
        dispatch(toggleModal(true));
    };

    const confirm = () => {
        dispatch(removeTableItem(tableItem));
        message.info("Malumot uchirildi.");
    }

    const handleTableItem = () => {
        const item = currentPage.data.find(data => data.number === tableItem.number);
        dispatch(toggleModal(true));

        if (item) {
            currentPage.data[item.number] = item;
        }
    };

    const text = "malumotni o'chirmoqchimisiz !";

    return (
        <div className="toolbar">
            <div className="toolbar__iconTitle">
                {findIcon(currentPage?.icon)}
                <span>{currentPage?.text}</span>
            </div>
            <div className="toolbar__tools">
                <Button onClick={() => handleModalClick()}>
                    {findIcon("AddItem")}
                </Button>
                <Button>
                    {findIcon("AddFolder")}
                </Button>
                <Button>
                    {findIcon("AddFile")}
                </Button>
                <Button>
                    {findIcon("CopyFolder")}
                </Button>
                <Button>
                    {findIcon("TransferFolder")}
                </Button>
                <Button onClick={() => handleTableItem()}>
                    {findIcon("EditFile")}
                </Button>
                <Button>
                    {findIcon("Antenna")}
                </Button>
                <Button>
                    {findIcon("AntennaReceive")}
                </Button>
                <Popconfirm placement="top"
                            title={text}
                            onConfirm={confirm}
                            okText="Ha"
                            cancelText="Yo'q">
                    <Button>
                        {findIcon("SignallessAntenna")}
                    </Button>
                </Popconfirm>
                <Button>
                    {findIcon("Circle")}
                </Button>
            </div>
            <MacActions Panes={Panes} currentPage={currentPage}/>
        </div>
    );
};

export default Toolbar;