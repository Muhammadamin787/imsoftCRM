import { Table, Tag, Space } from "antd";
import React, { useState } from "react";
import "./GlobalTable.scss";
import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "fullName",
    dataIndex: "fullName",
    key: "full name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "2",
    fullName: "Jim Green",
    key: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    number: "3",
    fullName: "Joe Black",
    key: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "2",
    fullName: "Jim Green",
    key: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    number: "3",
    fullName: "Joe Black",
    key: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "2",
    fullName: "Jim Green",
    key: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    number: "3",
    fullName: "Joe Black",
    key: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    number: "2",
    fullName: "Jim Green",
    key: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    number: "3",
    fullName: "Joe Black",
    key: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    number: "1",
    fullName: "John Brown",
    key: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

const GlobalTable = () => {
  return <Table columns={columns} className="main-table" dataSource={data} scroll={{ y: 340 }}/>;
};

export default GlobalTable;
