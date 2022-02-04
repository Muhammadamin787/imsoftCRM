import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import {MacRed, MacGreen, MacYellow} from "../../assets/icons/icons";

const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state?.tabs_reducer);
    const tabs = useSelector((state) => state);

    // console.log(tabs);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage?.isOpenModal) {
      setIsModalVisible(true);
    }
  }, [currentPage]);

  // const showModal = () => {
  //   setIsModalVisible(false);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(toggleModal(false));
  };

  const sty = {
    // height: "100%",
    // backgroundColor:"red"
    // width:"800px"
    // borderTopLeftRadius:"5px",
  };

    return (
        <>
            <Modal width={currentPage?.modal?.width}
                   footer={null}
                   visible={isModalVisible}
                   closable={false}>
                <div className="modal-header" style={sty}>
                    <span>{currentPage?.text}</span>
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
                        <div className="modal-grid__form" style={{gridTemplateColumns: form.grid?.columns, gridAutoRows:form.grid?.rows}}>
                            {form?.inputs?.map((input) => (
                                <ModalInput {...input}
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
