import React from "react";
import "./childServicePages.scss";
import {
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
} from "../../../components/functions/icons";
import { Button } from "antd";
import { MacRed, MacGreen, MacGray } from "../../../components/functions/icons";
import GlobalTable from "../../../components/Table/GlobalTable";
import GlobalModal from "../../../components/Modal/GlobalModal";
import {useDispatch } from "react-redux"
import { toggleModal } from "../../../redux/tabs_reducer";


const ChildServicePages = ({ page }) => {

  const dispatch = useDispatch()
  
  // console.log(page);

  const handleModalClick = () => {
    dispatch(toggleModal(true) ) 
  }

  return (
    <div className="child-page">
      <div className="child-header">
        {/* header  */}
        <div className="child-page__header">
          <div className="child-page__iconTitle">
            {page.icon}
            <span>{page.text}</span>
          </div>
          <div className="child-page__buttons">
            <Button className="child-page__button">
              <MacGray />
            </Button>
            <Button className="child-page__button">
              <MacRed />
            </Button>
            <Button className="child-page__button">
              <MacGreen />
            </Button>
          </div>
        </div>
      </div>
      {/* all edits */}
      <div className="data_change_sections">
        {/* change forms */}
        {/* <div className="child-page__forms">
          <form>
            <input placeholder="nomer" />
            <input placeholder="date" />
            <input placeholder="numbers" />
            <input placeholder="owe" />
          </form>
        </div> */}
        {/* tools */}
        <div className="child-page__tools">
          <Button onClick={()=> handleModalClick()}>
            <AddItem ></AddItem>                                                                                                                                                                                                                                                             
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
          <Button>
            <EditFile />
          </Button>
          <Button>
            <Antenna />
          </Button>
          <Button>
            <AntennaReceive />
          </Button>
          <Button>
            <SignallessAntenna />
          </Button>
          <Button>
            <Circle />
          </Button>
        </div>
      </div>
      {/* Global Table */}
      <div>
        <GlobalTable />
      </div>
    </div>
  );
};

export default ChildServicePages;
