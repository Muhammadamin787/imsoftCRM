import React from "react";
import "./ToolsBar.scss";
import { Button } from "antd";
import { MacRed, MacGreen, MacGray,  AddItem,
  AddFile,
  Antenna,
  Circle,
  SignallessAntenna,
  AntennaReceive,
  AddFolder,
  EditFile,
  CopyFolder,
  TransferFolder,
  MacYellow, } from "../../assets/icons/icons";
import GlobalTable from "../Table/GlobalTable";
import {useSelector, useDispatch } from "react-redux";
import { toggleModal, setCurrentPage, changePanes,removeTableItem } from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";

import { Popconfirm, message } from 'antd';










const ToolsBar = ({ page }) => {
  const dispatch = useDispatch();
  const {Panes, currentPage, tableItem} = useSelector((state) => state?.tabs_reducer);
  const navigate = useNavigate();


  const handleModalClick = () => {
    dispatch(toggleModal(true));
  };

  
  const removeCurrentPage = (type = null) => {
    let position = null;
    Panes?.length > 0 && Panes?.forEach((item, i) =>{
      if(item?.text === currentPage?.text){
        position = i;
        !type && dispatch(changePanes(i));
      }
    });
    if(position === 0 && Panes?.length === 1){
      navigate('/servis');
    }else if(Panes?.length -1> position){
      navigate(Panes[position]?.path);
      dispatch(setCurrentPage(Panes[position]));
    }else{
      navigate(Panes[position-1]?.path);
      dispatch(setCurrentPage(Panes[position-1]));
    }
  }
  
  const text = "malumotni o'chirmoqchimisiz !";

  function confirm() {
    console.log(tableItem);
    if (tableItem) {
      dispatch(removeTableItem(tableItem))
      message.info('Malumot uchirildi.');
    } else {
      message.info('Qatorni belgilang.');
    }
  }
  

  const handleTableItem = () => {
    // let item = currentPage.data.find(data => data.number === tableItem.number);
    if (Panes?.length > 0 && tableItem) {
      dispatch(toggleModal(true));
      currentPage.data = [...tableItem]
    }
  }

  return (
    <div className="child-page">
      <div className="child-header">
        <div className="child-page__header">
          <div className="child-page__iconTitle">
            {/* <span> { currentPage?.icon} </span> */}
            <span>{currentPage?.text}</span>
          </div>
          <div className="child-page__tools">
            <Button onClick={() => handleModalClick()}>
              <AddItem />
            </Button>
            <Button>
              <AddFolder />
            </Button>
            <Button>
              <AddFile />
            </Button>
            <Button>
              <CopyFolder />
            </Button>
            <Button>
              <TransferFolder />
            </Button>
            <Button onClick={() => handleTableItem()}>
              <EditFile />
            </Button>
            <Button>
              <Antenna />
            </Button>
            <Button>
              <AntennaReceive />
            </Button>
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Ha" cancelText="Yo'q">
              <Button> <SignallessAntenna /> </Button>
            </Popconfirm>
            <Button>
              <Circle />
            </Button>
          </div>
          <div className="child-page__buttons">
            <button className="child-page__button" onClick={() => removeCurrentPage('minimize')}>
              <MacGreen />
            </button>
            <button className="child-page__button">
              <MacYellow />
            </button>
            <button className="child-page__button" onClick={() => removeCurrentPage()}>
              <MacRed />
            </button>
          </div>
        </div>
      </div>

       
      <div className="child-body">
        <GlobalTable />
      </div>
    </div>
  );
};

export default ToolsBar;
