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
// import GlobalModal from "../Modal/GlobalModal";
import {useSelector, useDispatch } from "react-redux";
import { toggleModal, setCurrentPage, changePanes,removeTableItem } from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";

import { Popconfirm, message } from 'antd';










const ToolsBar = ({ page }) => {
  const dispatch = useDispatch();
  const {Panes, currentPage, tableItem} = useSelector((s) => s.tabs_reducer);
  const navigate = useNavigate();


  const handleModalClick = () => {
    dispatch(toggleModal(true));
  };

  
  const removeCurrentPage = (type = null) => {
    let position = null;
    Panes?.forEach((item, i) =>{
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
  
  // console.log(currentPage?.data[tableItem.number-1]);
  // console.log(tableItem);
  const text = "malumotni o'chirmoqchimisiz !";

  function confirm() {
    dispatch(removeTableItem(tableItem))
    message.info('Malumot uchirildi.');
  }
  

  const handleTableItem = () => {
    const item = currentPage.data.find(data => data.number === tableItem.number);
    dispatch(toggleModal(true));

    console.log(item);
    console.log(currentPage.data[item.number]);


    if(item) {
        currentPage.data[item.number] = item
      }

      // console.log(state.currentPage);
  }

  return (
    <div className="child-page">
      <div className="child-header">
        <div className="child-page__header">
          <div className="child-page__iconTitle">
            {currentPage?.icon}
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

      {/* Global Table */}
      <div className="child-body">
        <GlobalTable />
      </div>
    </div>
  );
};

export default ToolsBar;
