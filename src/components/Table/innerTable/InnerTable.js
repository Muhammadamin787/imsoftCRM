import React from 'react';
import {Table} from "antd";

const InnerTable = ({innerTable}) => {
    return (
        <Table bordered
               columns={innerTable.columns}
               className="inner-table"
               dataSource={innerTable?.data}
               size={"small"}
               scroll={innerTable?.scroll ? {...innerTable?.scroll} : {y: 380}}
               pagination={{position: ["bottomCenter"]}}
        />
    );
};

export default InnerTable;