import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, message } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  setValues,
  setTableItem,
  stopLoading,
  startLoading,
} from "../../redux/stored_reducer";
import { setData, setAllData } from "../../redux/unsaved_reducer";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";
import MacActions from "../ToolsBar/MacActions/MacActions";
import { GET, POST } from "../../functions/Methods";
import { removeApiStatusLines } from "../../constant/apiLine/apiLine";
import axios from "../../functions/axios";

const GlobalModal = () => {
  const { currentPage, values, innerModal } = useSelector(
    (state) => state.tabs_reducer
  );
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const draggleRef = useRef("s");
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    if (currentPage && currentPage.isOpenModal) {
      let currentData = currentPage?.allData;
      for (const url in currentData) {
        let res = axios(currentData[url]);
        res.then((res) => {
          dispatch(setAllData({ [url]: res.data.data }));
        });
      }
    }
  }, [currentPage, innerModal]);

  const resizeModal = () => {
    // keyinchalik kichik katta qilagian funksiya yoziladi
  };

  const handleChangeValue = (e) => {
    dispatch(setValues({ ...values, ...e }));
  };

  const handleCancel = (e) => {
    dispatch(toggleModal(false));
    dispatch(setValues({}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { mainUrl, key, form, modal } = currentPage;
    const requiredInputs = [];
    let bool = false;

    if (form) {
      form.forEach((el) => {
        el.inputs.forEach((d) => {
          if (d.required) {
            requiredInputs.push(d);
          }
        });
      });
    } else {
      modal.tabs.forEach((el) => {
        el?.form[0]?.inputs?.forEach((d) => {
          if (d?.required) {
            requiredInputs.push(d);
          }
        });
      });
    }
    requiredInputs.forEach((key) => {
      if (!Object.keys(values).includes(key?.name)) {
        bool = true;
        console.log(key);
        message.error(
          key?.name !== "longitude"
            ? key?.label + "ni kiritmadingiz"
            : "Map ni kiritmadingiz"
        );
      }
    });

    if (bool) {
      POST(mainUrl, values).then((res) => {
        message.success({ content: res.data.data, key: e });
        dispatch(toggleModal(false));
        dispatch(setValues({}));
        dispatch(setTableItem([]));
        dispatch(startLoading());
        GET(
          removeApiStatusLines.includes(mainUrl)
            ? `${mainUrl}/status/${key}`
            : mainUrl
        ).then((res) => {
          dispatch(setData(res.data.data));
          dispatch(stopLoading());
        });
      });

      dispatch(toggleModal(false));
    }
  };

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
      className="global-modal"
      style={{ ...currentPage?.modal?.style }}
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
              <MacActions onExit={handleCancel} onResize={resizeModal} />
            </div>
          </div>
        </div>
      }
      visible={currentPage?.isOpenModal}
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
      <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
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
              <ModalInput
                {...input}
                key={input?.name}
                countInput={form?.inputs}
                handleChangeValue={handleChangeValue}
              />
            ))}
          </div>
        ))}
        <ModalTabs
          tabs={currentPage?.modal?.tabs}
          handleChangeValue={handleChangeValue}
        />
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
      </form>
    </Modal>
  );
};

export default GlobalModal;
