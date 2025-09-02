"use client";

import { FaShopify } from "react-icons/fa";
import TitleHead from "../titleHead";
import { TbCategoryPlus } from "react-icons/tb";
import { Table, Tag, Button, Space, Row, Col, theme, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { ProductsData } from "../products/data";

// المنتج كما يُخزن في localStorage
interface StoredProduct {
  name: string;
  description: string;
  status: "active" | "draft" | "scheduled";
  images?: { uid: string; name: string; status?: string; url?: string }[];
}

// المنتج كما يظهر في الجدول
interface CategoryTableRow {
  key: string; // align with ProductsData keys
  name: string;
  description: string;
  status: "Active" | "Draft" | "Scheduled";
  image: string;
}

const statusColors: Record<CategoryTableRow["status"], string> = {
  Active: "green",
  Scheduled: "blue",
  Draft: "orange",
};

export default function CategoriesCom() {
  const { token } = theme.useToken();
  const router = useRouter();

  const [categoryData, setCategoryData] = useState<CategoryTableRow[]>([]);

  // تحميل البيانات من localStorage
  useEffect(() => {
    const storedCategories: StoredProduct[] = JSON.parse(
      localStorage.getItem("category") || "[]"
    );

    const mapped: CategoryTableRow[] = storedCategories.map((p, idx) => ({
      key: String(idx + 1), // ensure key is string
      name: p.name,
      description: p.description,
      status: (p.status.charAt(0).toUpperCase() + p.status.slice(1)) as
        | "Active"
        | "Draft"
        | "Scheduled",
      image: p.images?.[0]?.url || "/no-image.png",
    }));

    setCategoryData(mapped);
  }, []);

  const handleDelete = (key: string) => {
    const filteredData = categoryData.filter((item) => item.key !== key);
    setCategoryData(filteredData);
    localStorage.setItem("category", JSON.stringify(filteredData));
  };

  // أعمدة الجدول
  const columns: ColumnsType<CategoryTableRow> = [
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
            src={record.image}
            alt={record.name}
            width={40}
            height={40}
            style={{ borderRadius: 6, objectFit: "cover" }}
          />
        </Space>
      ),
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <span>{record.name}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: CategoryTableRow["status"]) => (
        <Tag color={statusColors[status]}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <Button
            type="link"
            onClick={() =>
              router.push(`/categories/editcategory?id=${record.key}`)
            }
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
  return (
    <>
      <div
        style={{
          padding: "24px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 30 }}
        >
          <Col>
            <TitleHead title="Categories" icon={<TbCategoryPlus />} />
          </Col>
          <Col>
            <Space>
              <Button>Filter</Button>
              <Button>See All</Button>
              <Link href={"/categories/addcategory"}>
                <Button type="primary">+ Add Category</Button>
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
          dataSource={
            categoryData.length > 0
              ? categoryData
              : (ProductsData as unknown as CategoryTableRow[])
          }
          pagination={{ pageSize: 5 }}
          bordered={false}
          rowSelection={{}}
        />
      </div>
    </>
  );
}
