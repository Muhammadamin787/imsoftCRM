import React from "react";
import "./childServicePages.scss";
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
  MacYellow, } from "../../../assets/icons/icons";
import GlobalTable from "../../../components/Table/GlobalTable";
import GlobalModal from "../../../components/Modal/GlobalModal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/tabs_reducer";

const ChildServicePages = ({ page }) => {
  const dispatch = useDispatch();

  const handleModalClick = () => {
    dispatch(toggleModal(true));
  };

  return (
    <div className="child-page">
      <div className="child-header">
        {/* header  */}
        <div className="child-page__header">
          <div className="child-page__iconTitle">
            {page.icon}
            <span>{page.text}</span>
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
          <div className="child-page__buttons">
            <Button className="child-page__button">
              <MacGreen />
            </Button>
            <Button className="child-page__button">
              <MacYellow />
            </Button>
            <Button className="child-page__button">
              <MacRed />
            </Button>
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

export default ChildServicePages;
