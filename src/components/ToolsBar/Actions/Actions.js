import React from 'react';
import {
    AddFile,
    AddFolder,
    AddItem, Antenna, AntennaReceive, Circle,
    CopyFolder, EditFile,
    MacGreen,
    MacRed,
    MacYellow, SignallessAntenna,
    TransferFolder
} from "../../../assets/icons/icons";
import {changePanes, removeTableItem, setCurrentPage, toggleModal} from "../../../redux/tabs_reducer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button, message, Popconfirm} from "antd";
import MacActions from "../MacActions/MacActions";

const Actions = ({Panes, currentPage, tableItem}) => {
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
        <div className="child-page__header">
            <div className="child-page__iconTitle">
                <span>{currentPage?.text}</span>
            </div>
            <div className="child-page__tools">
                <Button onClick={() => handleModalClick()}>
                    <AddItem/>
                </Button>
                <Button>
                    <AddFolder/>
                </Button>
                <Button>
                    <AddFile/>
                </Button>
                <Button>
                    <CopyFolder/>
                </Button>
                <Button>
                    <TransferFolder/>
                </Button>
                <Button onClick={() => handleTableItem()}>
                    <EditFile/>
                </Button>
                <Button>
                    <Antenna/>
                </Button>
                <Button>
                    <AntennaReceive/>
                </Button>
                <Popconfirm
                    placement="top"
                    title={text}
                    onConfirm={confirm}
                    okText="Ha"
                    cancelText="Yo'q">
                    <Button>
                        <SignallessAntenna/>
                    </Button>
                </Popconfirm>
                <Button>
                    <Circle/>
                </Button>
            </div>
            <MacActions Panes={Panes} currentPage={currentPage}/>
        </div>
    );
};

export default Actions;