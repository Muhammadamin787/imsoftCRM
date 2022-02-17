import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, message } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import {toggleModal, addValuesData, setData, setAllData, setValues, setTableItem} from "../../redux/tabs_reducer";
import ModalTabs from "./modalTabs/ModalTabs";
import Draggable from "react-draggable";
import MacActions from "../ToolsBar/MacActions/MacActions";
import axios from "../../functions/axios";
import {GET, POST} from "../../functions/Methods";
import InnerModal from "./innerModal/InnerModal";
import {inputDeafultHeght} from "../../constant/deafultStyle"


const GlobalModal = () => {
    const {currentPage, data, values} = useSelector((state) => state.tabs_reducer);

    const [bounds, setBounds] = useState({
        left: 0, top: 0, bottom: 0, right: 0
    });
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentPage && currentPage.isOpenModal) {
            let currentData = currentPage?.allData;
            // console.log(currentData);
            for (const url in currentData) {
                let res = axios(currentData[url]);
                res.then(res => {
                    dispatch(setAllData({ [url] : res.data.data }));
                });

            }
        }
    }, [currentPage])

    const handleCancel = (e) => {
        dispatch(toggleModal(false));
        dispatch(setValues({}));
    };

    const resizeModal = () => {
        // keyinchalik kichik katta qilagian funksiya yoziladi
    };

    const handleChangeValue = (e) => {
        dispatch(setValues({ ...values, ...e }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChangeValue()
        const url = currentPage?.mainUrl;
        POST(url, values).then(res => {
            message.success({content: res.data.data, key: e});
            dispatch(toggleModal(false));
            dispatch(setValues({}));
            dispatch(setTableItem([]))
            GET(url).then(res => {
                dispatch(setData(res.data.data))
            });
        });
    }

    const draggleRef = useRef("s");

    const onStart = (event, uiData) => {
        const {clientWidth, clientHeight} = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y)
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
                        cursor: "move"
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
            <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
                {/* <InnerModal /> */}
                {currentPage?.form?.map((form) => (
                    <div
                        className="modal-grid__form"
                        key={form?.grid}
                        style={{
                            gridTemplateColumns: form.grid?.columns,
                            gridAutoRows: form.grid?.rows
                        }}
                    >
                        {form?.inputs?.map((input) => (
                            <Form.Item
                            style={{
                                gridColumn: input.gridColumn,
                                gridRow: input.gridRow,
                                height: input.height ? input.height + "px" : inputDeafultHeght + "px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                            >
                                <ModalInput {...input} key={input?.name} handleChangeValue={handleChangeValue}/>
                            </Form.Item>
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
                    <button 
                        type="submit"
                        className="modal-form__button saqlash"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Saqlash
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default GlobalModal;
