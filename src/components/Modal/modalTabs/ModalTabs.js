import React from "react";
import { Table, Tabs } from "antd";
import ModalInput from "../ModalInput";

const ModalTabs = ({ tabs }) => {
  return (
    <Tabs defaultActiveKey={[0]}>
      {tabs?.map((tab, i) => (
        <Tabs.TabPane tab={tab.text} key={i}>
          {tab.form?.map((forma, i) => (
            <div
              className="modal-grid__form"
              key={forma?.grid}
              style={{
                gridTemplateColumns: forma.grid?.columns,
                gridAutoRows: forma.grid?.rows,
              }}
            >
              {forma?.inputs?.map((input) => (
                <ModalInput {...input} key={input?.name} />
              ))}
            </div>
          ))}

          {tab?.columns && (
            <Table
              bordered
              columns={tab?.columns}
              className="inner-table"
              dataSource={tab?.data}
              size={"small"}
              scroll={tab?.scroll ? { ...tab?.scroll } : { y: 380 }}
              pagination={{ position: ["bottomCenter"] }}
            />
          )}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default ModalTabs;
