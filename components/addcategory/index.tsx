"use client";
import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Checkbox,
  Button,
  Space,
  Radio,
  Upload,
} from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type categoryFormValues = {
  title: string;
  description: string;
};

export default function AddCategoryCom() {
  const [form] = Form.useForm();
  const router = useRouter();

  const [savedValues, setSavedValues] = useState<categoryFormValues[]>([]);

  // استرجاع البيانات أول ما يشتغل الكمبوننت
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("category") || "[]");
    setSavedValues(stored);
  }, []);

  const onFinish = (values: categoryFormValues) => {
    setSavedValues((prev) => [...prev, values]);
  };

  useEffect(() => {
    if (savedValues.length > 0) {
      localStorage.setItem("category", JSON.stringify(savedValues));
      console.log("Saved Values:", savedValues);
    }
  }, [savedValues]);

  return (
    <Row gutter={27} style={{ marginTop: 40 }}>
      <Col span={18}>
        <Card bodyStyle={{ backgroundColor: "#fff", borderRadius: 8 }}>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please enter product title" },
              ]}
            >
              <Input placeholder="Title" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter product description" },
              ]}
            >
              <Input.TextArea rows={3} placeholder="Description" />
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col span={6}>
        <Card bodyStyle={{ backgroundColor: "#fff", borderRadius: 8 }}>
          <h2 style={{ marginBottom: 16 }}>Add Category</h2>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
          >
            <label style={{ fontWeight: "400", fontSize: 16 }}>
              Category Images
            </label>
            <Form.Item name="images" style={{ marginTop: 8 }}>
              <Upload
                style={{ width: "100%" }}
                listType="picture-card"
                beforeUpload={() => false}
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            {/* Status */}
            <label style={{ fontWeight: "400", fontSize: 16 }}>Status</label>
            <Form.Item
              name="status"
              initialValue="active"
              style={{ marginTop: 8 }}
              rules={[
                { required: true, message: "Please select product status" },
              ]}
            >
              <Select
                placeholder="Select status"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Draft", value: "draft" },
                ]}
              />
            </Form.Item>
          </Form>
          {/* Submit */}
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <Form.Item>
              <Button
                onClick={() => router.push("/categories")}
                type="dashed"
                block
              >
                Finished
              </Button>
            </Form.Item>
            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                block
                onClick={() => {
                  form.submit();
                }}
              >
                Add Category
              </Button>
            </Form.Item>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
