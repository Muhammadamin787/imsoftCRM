import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import "./GlobalModal.scss";
import ModalInput from "./ModalInput";
import { useSelector, useDispatch } from "react-redux";


const GlobalModal = () => {
  
  const { Panes } = useSelector((state) => state?.tabs_reducer);
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(Panes);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        bodyStyle={{ height: 100 }}
        footer={null}
        visible={isModalVisible}
        closable={false}
      >
        <Form>
          {/* {forms?.map((f) => (
            <div className="grid_form" style={{ gridTemplateColumns: f.grid }}>
              {f.inputs.map((inp) => ( */}
                <ModalInput
                  // type={inp.type}
                  // label={inp.label}
                  // name={inp.name}
                  // component={inp.component}
                  // allDataType={inp.allData}
                  // onChange={handleChange}
                  // readOnly={inp.readOnly}
                  // condition={inp.condition}
                  // secondDate={inp.secondDate}
                  // costumData={inp.costumData}
                  // costumColumns={inp.costumColumns}
                ></ModalInput>
              {/* ))}
            </div>
          ))} */}


          {/* <Button onClick={handleOk}>OK</Button>
          <Button onClick={handleCancel}>Close</Button> */}
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
