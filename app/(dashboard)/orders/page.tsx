"use client";

import TitleHead from "@/components/titleHead";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FaShoppingBag } from "react-icons/fa";

interface Order {
  id: string;
  name: string;
  address: string;
  date: string;
  price: string;
  status: "Completed" | "Processing" | "Rejected" | "On Hold" | "In Transit";
}

const data: Order[] = [
  {
    id: "00001",
    name: "Denim Jacket",
    address: "12A, MG Road, Delhi, India",
    date: "04 Sep 2019",
    price: "$49.99",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Floral Dress",
    address: "45B, Andheri West, Mumbai, India",
    date: "28 May 2019",
    price: "$59.99",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Denim Jacket",
    address: "45B, Andheri West, Mumbai, India",
    date: "23 Nov 2019",
    price: "$59.99",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Sneakers",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    price: "$59.99",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Sneakers",
    address: "90E, Anna Nagar, Chennai, India",
    date: "29 Jul 2019",
    price: "$39.99",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Leather Bag",
    address: "45B, Andheri West, Mumbai, India",
    date: "15 Aug 2019",
    price: "$59.99",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Denim Jacket",
    address: "45B, Andheri West, Mumbai, India",
    date: "21 Dec 2019",
    price: "$49.99",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Floral Dress",
    address: "90E, Anna Nagar, Chennai, India",
    date: "30 Apr 2019",
    price: "$59.99",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Leather Bag",
    address: "45B, Andheri West, Mumbai, India",
    date: "09 Jan 2019",
    price: "$49.99",
    status: "In Transit",
  },
];

const statusColors: Record<Order["status"], string> = {
  Completed: "green",
  Processing: "blue",
  Rejected: "red",
  "On Hold": "orange",
  "In Transit": "purple",
};

const columns: ColumnsType<Order> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: Order["status"]) => (
      <Tag color={statusColors[status]}>{status}</Tag>
    ),
  },
];

export default function OrdersPage() {
  return (
    <div style={{ background: "#fff", borderRadius: "8px" }}>
      <div style={{ padding: "24px" }}>
        <div style={{ marginBottom: "20px" }}>
          <TitleHead title="Orders" icon={<FaShoppingBag />} />
        </div>
        <Table
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{
                    padding: "12px",
                    fontSize: "14px",
                    background: "#efefefc4",
                  }}
                />
              ),
            },
            body: {
              row: (props) => (
                <tr
                  {...props}
                  style={{ background: "#fafafa", cursor: "pointer" }}
                />
              ),
              cell: (props) => (
                <td
                  {...props}
                  style={{
                    padding: "12px",
                    fontSize: "14px",
                    background: "#fff",
                  }}
                />
              ),
            },
          }}
          columns={columns}
          dataSource={data}
          rowKey="id"
          bordered
          pagination={false}
        />
      </div>
    </div>
  );
}
