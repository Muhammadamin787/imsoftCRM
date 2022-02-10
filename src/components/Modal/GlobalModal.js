import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import { MacRed, MacGreen, MacYellow } from "../../assets/icons/icons";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";

const GlobalModal = () => {
  const { currentPage, Panes } = useSelector((state) => state.tabs_reducer);

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const handleCancel = (e) => {
    dispatch(toggleModal(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    console.log(Panes);
  }, [Panes]);

  return (
    <Modal
      width={currentPage?.modal?.width}
      footer={null}
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
      title={
        <div
          style={{
            width: "100%",
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
              <Button className="modal-header__button">
                <MacYellow />
              </Button>
              <Button className="modal-header__button">
                <MacRed />
              </Button>
              <Button className="modal-header__button">
                <MacGreen />
              </Button>
            </div>
          </div>
        </div>
      }
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
              <ModalInput {...input} key={input?.name} />
            ))}
          </div>
        ))}
        <ModalTabs tabs={currentPage?.modal?.tabs} />
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
