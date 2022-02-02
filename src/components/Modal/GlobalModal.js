import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import {MacRed, MacGreen, MacYellow} from "../functions/icons";


const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state?.tabs_reducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(false);
    };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(toggleModal(false));
  };

  console.log(currentPage);

  const sty = {
    // height: "100%",
    // backgroundColor:"red"
    // borderTopLeftRadius:"5px",
  };

    return (
        <>
            <Modal bodyStyle={sty}
                   footer={null}
                   visible={isModalVisible}
                   closable={false}>
                <div className="modal-header">
                    <span>{currentPage.text}</span>
                    <div>
                        <div className="modal-header__buttons">
                            <Button className="modal-header__button">
                                <MacYellow/>
                            </Button>
                            <Button className="modal-header__button">
                                <MacRed/>
                            </Button>
                            <Button className="modal-header__button">
                                <MacGreen/>
                            </Button>
                        </div>
                    </div>
                </div>
                <form className="modal-form">
                    {currentPage?.form?.map((form) => (
                        <div className="modal-grid__form" style={{gridTemplateColumns: form.grid}}>
                            {form?.inputs?.map((input) => (
                                <ModalInput
                                    type={input.type}
                                    name={input.name}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                />
                            ))}
                        </div>
                    ))}
                    <div className="modal-form_buttons">
                        <Button type="submit" className="modal-form__button qaytish"
                                onClick={handleCancel}>Qaytish</Button>
                        <Button type="submit" className="modal-form__button saqlash"
                                onClick={handleCancel}>Saqlash</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default GlobalModal;
