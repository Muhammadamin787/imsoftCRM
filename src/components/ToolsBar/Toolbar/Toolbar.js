import React from "react";
import {
  removeTableItem,
  toggleModal,
  changePanesModal,
} from "../../../redux/tabs_reducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Popconfirm } from "antd";
import MacActions from "../MacActions/MacActions";
import "./toolBar.scss";
import { findIcon } from "../../../assets/icons/icons";

const Toolbar = ({ tableItem }) => {
  const dispatch = useDispatch();
  const { currentPage, Panes } = useSelector((state) => state.tabs_reducer);

  const handleModalClick = () => {
    // dispatch(toggleModal(!page.isOpenModal));
    const newPanes = Panes.map((page) =>
      page.path === currentPage.path
        ? { ...page, isOpenModal: !currentPage.isOpenModal }
        : page
    );

    const newCurrentPage = {
      ...currentPage,
      isOpenModal: !currentPage.isOpenModal,
    };
    dispatch(
      changePanesModal({ panes: newPanes, currentPage: newCurrentPage })
    );
  };

  const onRemove = () => {
    dispatch(removeTableItem(tableItem));
    message.info("Malumot uchirildi.");
  };

  const onEdit = () => {
    dispatch(dispatch(toggleModal(true)));
  };

  const currentPageIcon = findIcon(currentPage?.icon);

  const noPopEdit = {
    pop: {
      placement: "top",
      title: "1 ta qatorni belgilng!",
      okText: "tushundim",
    },
  };

  const ToolBarButtons = [
    { icon: findIcon("AddItem"), onClick: handleModalClick },
    { icon: findIcon("AddFolder") },
    { icon: findIcon("AddFile") },
    // {icon: findIcon("CopyFolder"),},
    // {icon: findIcon("TransferFolder"),},
    // {icon: findIcon("Antenna"),},
    // {icon: findIcon("AntennaReceive"),},
    // {icon: findIcon("Circle")},
    {
      icon: findIcon("EditFile"),
      onClick: tableItem?.length == 1 && onEdit,
      pop: (tableItem?.length > 1 || tableItem?.length == 0) && noPopEdit?.pop,
    },

    {
      icon: findIcon("DeleteItem"),
      pop: {
        placement: "top",
        title: "Malumotni o'chirmoqchimisiz!",
        onConfirm: onRemove,
        okText: "Ha",
        cancelText: "Yo'q",
      },
    },
  ];

  return (
    <div className="toolbar">
      <div className="toolbar__title">
        <span>{currentPageIcon}</span>
        <span className="toolbar__title-text">{currentPage?.text}</span>
      </div>
      <div className="toolbar__tools">
        {ToolBarButtons?.map((button) =>
          button.pop ? (
            <Popconfirm {...button.pop} showCancel={false}>
              <Button>{button.icon}</Button>
            </Popconfirm>
          ) : (
            <Button onClick={() => button.onClick()}>{button.icon}</Button>
          )
        )}
      </div>
      <MacActions />
    </div>
  );
};

export default Toolbar;
