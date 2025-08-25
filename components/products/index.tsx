"use client";

import { Table, Tag, Button, Space, Row, Col, theme, Image } from "antd";
import type { ColumnsType } from "antd/es/table";

import TitleHead from "../titleHead";
import { FaShopify } from "react-icons/fa";
import { ProductsData } from "./data";

interface Product {
  key: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Scheduled" | "Draft";
  image: string;
}

const statusColors: Record<string, string> = {
  Active: "green",
  Scheduled: "blue",
  Draft: "orange",
};

export default function ProductsTable() {
  const { token } = theme.useToken();

  const columns: ColumnsType<Product> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space>
          <Image
            src={record.image}
            alt={record.name}
            width={40}
            height={40}
            style={{ borderRadius: 6, objectFit: "cover" }}
          />
          <span>{record.name}</span>
        </Space>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="link">Details</Button>,
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Row justify="space-between" align="middle" style={{ marginBottom: 30 }}>
        <Col>
          {" "}
          <TitleHead title="Products" icon={<FaShopify />} />
        </Col>
        <Col>
          <Space>
            <Button>Filter</Button>
            <Button>See All</Button>
            <Button type="primary">+ Add Product</Button>
          </Space>
        </Col>
      </Row>

      {/* Table */}
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
        dataSource={ProductsData}
        pagination={{
          pageSize: 5,
        }}
        bordered={false}
        rowSelection={{}}
      />
    </div>
  );
}
