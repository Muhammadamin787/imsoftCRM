import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Tabs, Table } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";
import { MacRed, MacGreen, MacYellow } from "../../assets/icons/icons";
import ModalTabs from "./modalTabs/ModalTabs";

const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state.tabs_reducer);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage?.isOpenModal) {
      setIsModalVisible(true);
    }
  }, [currentPage]);

  const handleCancel = (e) => {
    e.preventDefault();
    const handleCancel = () => {
      setIsModalVisible(false);
      dispatch(toggleModal(false));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
    dispatch(toggleModal(false));
  };

  //   console.log(currentPage.modalTabs.map((tabe) => tabe.form[0].grid.columns));

  return (
    <>
      <Modal
        width={currentPage?.modal?.width}
        footer={null}
        visible={isModalVisible}
        closable={false}
      >
        <div className="modal-header">
          <span>{currentPage?.text}</span>
          <div>
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

        <Form className="modal-form">
          <Tabs className="customers__tabs">
            {currentPage?.modalTabs &&
              currentPage?.modalTabs?.map((tabe) => (
                <Tabs.TabPane tab={tabe?.text} key={tabe?.text}>
                  {tabe?.form?.map((forma, i) => (
                    <div
                      className="modal-grid__form"
                      key={forma?.grid}
                      style={{
                        gridTemplateColumns: forma.grid?.columns,
                        gridAutoRows: forma.grid?.rows,
                      }}
                    >
                      {forma?.inputs?.map((input) => (
                        <>
                          <ModalInput {...input} key={input?.name} />
                          {tabe?.columns && (
                            <Table
                              bordered
                              columns={tabe?.columns}
                              className="inner-table"
                              dataSource={tabe?.data}
                              size={"small"}
                              scroll={
                                tabe?.scroll ? { ...tabe?.scroll } : { y: 380 }
                              }
                              pagination={{ position: ["bottomCenter"] }}
                            />
                          )}
                        </>
                      ))}
                    </div>
                  ))}
                </Tabs.TabPane>
              ))}
          </Tabs>

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
              Qaytish
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
    </>
  );
};

export default GlobalModal;
