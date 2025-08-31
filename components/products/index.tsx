"use client";

import { Table, Tag, Button, Space, Row, Col, theme, Image } from "antd";
import type { ColumnsType } from "antd/es/table";

import TitleHead from "../titleHead";
import { FaShopify } from "react-icons/fa";
import { ProductsData } from "./data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import EditProductCom from "../editproduct";
import { useRouter } from "next/navigation";

interface StoredProduct {
  title: string;
  category: string;
  price: number;
  quantity: number;
  status: "active" | "draft";
  images?: { uid: string; name: string; status?: string; url?: string }[];
}

interface Product {
  key: number; // استخدمت number بدل string لتوافق key مع Table
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
  const router = useRouter();

  const [productData, setProductData] = useState<Product[]>([]);
  useEffect(() => {
    const storedProducts: StoredProduct[] = JSON.parse(
      localStorage.getItem("product") || "[]"
    );

    const mapped: Product[] = storedProducts.map((p, idx) => ({
      key: idx + 1,
      name: p.title,
      category: p.category,
      price: Number(p.price),
      stock: Number(p.quantity),
      status: (p.status.charAt(0).toUpperCase() + p.status.slice(1)) as
        | "Active"
        | "Draft",
      image: p.images?.[0]?.url || "/no-image.png",
    }));

    setProductData(mapped);
  }, []);

  console.log("Stored Products:", productData);

  const columns: ColumnsType<any> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (_, record) => (
        <Space>
          <span>{record.key}</span>
        </Space>
      ),
    },
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <Space>
          <Image
            src={`/images/trendProduct5.webp`}
            alt={record.name}
            width={40}
            height={40}
            style={{ borderRadius: 6, objectFit: "cover" }}
          />
        </Space>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space>
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
      render: (_, record) => (
        <div>
          <Button
            type="link"
            onClick={() => {
              <EditProductCom key={record.key} />;
              router.push(`/products/editproduct?id=${record.key}`);
            }}
          >
            <CiEdit size={18} />
          </Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>
            <MdDeleteOutline size={18} />
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = (key: number) => {
    const filteredData = productData.filter((item) => item.key !== key);
    setProductData(filteredData);
    localStorage.setItem("product", JSON.stringify(filteredData));
  };

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
            <Link href={"/products/addproduct"}>
              <Button type="primary">+ Add Product</Button>
            </Link>
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
        dataSource={productData.length > 0 ? productData : ProductsData}
        pagination={{
          pageSize: 5,
        }}
        bordered={false}
        rowSelection={{}}
      />
    </div>
  );
}
