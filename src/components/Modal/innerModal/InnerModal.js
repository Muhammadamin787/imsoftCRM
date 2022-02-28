import React, { useState, useEffect, useRef } from "react";
import "../GlobalModal.scss";
import { Modal, Button, Form, message } from "antd";
import ModalInput from "../ModalInput";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleInnerModal,
  setValues2,
  setTableItem,
  setOffInnerModel,
} from "../../../redux/stored_reducer";
import { setData, setAllData } from "../../../redux/unsaved_reducer";
import Draggable from "react-draggable";
import MacActions from "../../ToolsBar/MacActions/MacActions";
import axios from "../../../functions/axios";
import { GET, POST } from "../../../functions/Methods";

// ❗ hard code boldi, Global modaldagi codelar takrollandi

const InnerModal = () => {
  const { currentPage, values2, innerModal } = useSelector(
    (state) => state.tabs_reducer
  );

  const { key } = currentPage;

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

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
  }, [values2]);

  const handleCancel = (e) => {
    dispatch(setOffInnerModel());
    dispatch(toggleInnerModal(false));
    dispatch(setValues2({}));
  };

  const resizeModal = () => {
    // keyinchalik kichik katta qilagian funksiya yoziladi
  };

  const handleChangeValue = (e) => {
    dispatch(setValues2({ ...values2, ...e }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = innerModal?.mainUrl;

    const requiredInputs = [];

    innerModal.form.forEach((el) => {
      el.inputs.forEach((d) => {
        if (d?.required) {
          requiredInputs.push(d);
        }
      });
    });
    let isNotErrors = false;
    requiredInputs.map((d) => {
      if (!values2[d.name]) {
        return message.error(d.label + "ni kiritmadingiz");
      } else {
        isNotErrors = true;
      }
    });

    if (isNotErrors) {
      POST(url, values2).then((res) => {
        message.success({ content: res.data.data, key: e });
        dispatch(toggleInnerModal(false));
        dispatch(setValues2({}));
        dispatch(setTableItem([]));
        GET(url).then((res) => {
          dispatch(setData(res.data.data));
        });
      });
      dispatch(setOffInnerModel(false));
    }
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
      className="inner-modal"
      style={{ ...innerModal?.modal?.style }}
      width={innerModal?.modal?.style?.width}
      footer={null}
      title={
        <div
          style={{
            width: innerModal?.modal?.style?.width,
            cursor: "move",
          }}
          onMouseOver={() => {
            disabled && setDisabled(false);
          }}
          onMouseOut={() => setDisabled(true)}
        >
          <div className="modal-header">
            <span>{innerModal?.text}</span>
            <div className="modal-header__buttons">
              <MacActions onExit={handleCancel} onResize={resizeModal} />
            </div>
          </div>
        </div>
      }
      visible={innerModal?.isOpenModal}
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
        {innerModal?.form?.map((form) => (
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
                handleChangeValue={handleChangeValue}
                {...input}
                isInnerModal={true}
                key={input?.name}
              />
            ))}
          </div>
        ))}
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

export default InnerModal;
