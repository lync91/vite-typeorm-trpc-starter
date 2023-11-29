import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Ngày tháng",
    dataIndex: "ngaythang",
  },
  {
    title: "Tên khách",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value: string, record) => record.name.includes(value),
  },
  {
    title: "Điện thoại",
    dataIndex: "dienthoai",
  },
  {
    title: "Trạng thái",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
    render: (value) => {
      return <>Hello</>
    }
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value: string, record) => record.address.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Sản phẩm quan tâm",
    dataIndex: "sanphamquantam",
  },
  {
    title: "Câu hỏi",
    dataIndex: "cauhoi",
  },
  {
    title: "Phản hổi",
    dataIndex: "phanhoi",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const KhachHangTable: React.FC = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default KhachHangTable;
