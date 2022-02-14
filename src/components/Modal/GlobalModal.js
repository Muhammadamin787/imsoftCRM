import React, {useState, useEffect, useRef} from "react";
import {Modal, Button, Form, Tabs, Table} from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import { MacRed, MacGreen, MacYellow } from "../../assets/icons/icons";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";
import MacActions from "../ToolsBar/MacActions/MacActions";
import axios from "../../functions/axios";

const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state.tabs_reducer);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

    // useEffect(() => {
    //     // if (currentPage?.isOpenModal) {
    //     setIsModalVisible(currentPage?.isOpenModal);
    //     // }
    //     if (currentPage?.allData && currentPage.allData[0]) {
    //       const data =  axios(currentPage?.allData[0]);

    //       console.log(data);
    //     }

    // }, [currentPage]);

    const handleCancel = (e) => {
        setIsModalVisible(false);
        dispatch(toggleModal(false));
    };

    const resizeModal = (e) => {
        // keyinchalik kichik katta qilagian funksiya yoziladi
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalVisible(false);
        dispatch(toggleModal(false));
    };
    const draggleRef = useRef("s");

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

    return (
        <Modal
            style={{...currentPage?.modal?.style}}
            width={currentPage?.modal?.style?.width}
            footer={null}
            title={
                <div
                    style={{
                        width: currentPage?.modal?.style?.width,
                        cursor: "move",
                    }}
                    onMouseOver={() => {
                        disabled && setDisabled(false);
                    }}
                    onMouseOut={() => setDisabled(true)}
                >
                    <div className="modal-header">
                        <span>{currentPage?.text}</span>
                        <div className="modal-header__buttons">
                            <MacActions onExit={handleCancel} onResize={resizeModal}/>
                        </div>
                    </div>
                </div>
            }
            visible={currentPage.isOpenModal}
            closable={false}
            modalRender={(modal) => (
                <Draggable
                    disabled={disabled}
                    bounds={bounds}
                    onStart={(event, uiData) => onStart(event, uiData)}
                >
                    <div ref={draggleRef}>{modal}</div>
                </Draggable>
            )}
        >
            <Form className="modal-form">
                {currentPage?.form?.map((form) => (
                    <div
                        className="modal-grid__form"
                        key={form?.grid}
                        style={{
                            gridTemplateColumns: form.grid?.columns,
                            gridAutoRows: form.grid?.rows,
                        }}
                    >
                        {form?.inputs?.map((input) => (
                            <ModalInput {...input} key={input?.name}/>
                        ))}
                    </div>
                ))}
                <ModalTabs tabs={currentPage?.modal?.tabs}/>
                <div className="modal-form_buttons">
                    <Button
                        type="submit"
                        className="modal-form__button qaytish"
                        onClick={(e) => handleCancel(e)}
                    >
                        Orqaga
                    </Button>
                    <Button
                        type="submit"
                        className="modal-form__button saqlash"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Saqlash
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default GlobalModal;
