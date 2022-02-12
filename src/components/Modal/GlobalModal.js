import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Button,
  Form,
  Tabs,
  Table,
  Input,
  Space,
  InputNumber,
  Select,
} from "antd";
import { Option } from "antd/lib/mentions";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import { MacRed, MacGreen, MacYellow } from "../../assets/icons/icons";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";
import {
  DATE,
  IMAGE,
  MAP,
  NUMBER,
  TEXTAREA,
  PHONE,
  SELECT,
  STRING,
  UPLOAD,
} from "./InputTypes";
import ReturnInput from "./ReturnInput";

const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state.tabs_reducer);
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (currentPage?.isOpenModal) {
    setIsModalVisible(currentPage?.isOpenModal);
    // }
  }, [currentPage]);

  const handleCancel = (e) => {
    setIsModalVisible(false);
    dispatch(toggleModal(false));
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

  /* ------------------------------------ / ----------------------------------- */

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal
        style={{ ...currentPage?.modal?.style }}
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
                <Button className="modal-header__button">
                  <MacYellow />
                </Button>
                <Button className="modal-header__button">
                  <MacGreen />
                </Button>
                <Button className="modal-header__button">
                  <MacRed />
                </Button>
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
        <Form
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              currentPage?.form && currentPage?.form[0].grid.columns,
            gridTemplateRow:
              currentPage?.form && currentPage?.form[0].grid.rows,
          }}
          // form={form}
          onFinish={onFinish}
          className="modal__form"
        >
          {currentPage?.form?.map(
            (form) =>
              // <>
              form.inputs.map((input) => (
                <ModalInput {...input} />
                // <Form.Item
                //   label={input.label}
                //   name={input.name}
                //   style={{
                //     gridColumn: input.gridColumn,
                //     gridRow: input.gridRow,
                //   }}
                // >
                //   <ReturnInput type={input.type} />
                //   {/* <ModalInput {...input} /> */}
                //   {/* <Input /> */}

                //   {/* {input.type === STRING && (
                //     <Input
                //       placeholder={input.placeholder}
                //       className={"modal_input"}
                //     />
                //   )}

                //   {input.type === NUMBER && (
                //     <InputNumber className="modal_input" />
                //   )} */}

                //   {/* {input.type === SELECT && (
                //     <Select
                //       className="modal_input"
                //     >
                //       {input?.option &&
                //         input?.option?.map((option, i) => (
                //           <Option value={option.value} key={i}>
                //             {option.value}
                //           </Option>
                //         ))}
                //     </Select>
                //   )} */}
                // </Form.Item>
              ))
            // </>
          )}

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
        </Form>
      </Modal>
    </div>
  );
};

export default GlobalModal;
