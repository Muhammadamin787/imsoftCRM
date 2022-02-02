import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/tabs_reducer";

const GlobalModal = () => {
  const { currentPage } = useSelector((state) => state?.tabs_reducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage?.isOpenModal) {
      setIsModalVisible(true);
    }
  });

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

  console.log(currentPage.forms);

  return (
    <>
      <Modal
        bodyStyle={{ height: 100 }}
        footer={null}
        visible={isModalVisible}
        closable={false}
      >
        <Button onClick={handleCancel}>is exit</Button>
        <h1>{currentPage?.text}</h1>

        <Form>
            {/* {currentPage.form?.inputs.map((input) => (
              <ModalInput type={input.type} name={input.name} label={input.label} />
            ))} */}
          </Form>
      </Modal>
    </>
  );
};

export default GlobalModal;

// {forms?.map(f => (
//   <div className="grid_form" style={{ gridTemplateColumns: f.grid }}>
//     {f.inputs.map(inp => (
//       <ModalInput
//         type={inp.type}
//         label={inp.label}
//         name={inp.name}
//         component={inp.component}
//         allDataType={inp.allData}
//         onChange={handleChange}
//         readOnly={inp.readOnly}
//         condition={inp.condition}
//         secondDate={inp.secondDate}
//         costumData={inp.costumData}
//         costumColumns={inp.costumColumns}
//       ></ModalInput>
//     ))}
//   </div>
// ))}
