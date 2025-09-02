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
  Upload,
} from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type CategoryFormValues = {
  title: string;
  description: string;
  images?: File[];
  status: "active" | "draft";
};

export default function EditCategoryCom() {
  const [form] = Form.useForm<CategoryFormValues>();
  const router = useRouter();
  const [savedValues, setSavedValues] = useState<CategoryFormValues[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // product index (string)

  // load categories from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("category") || "[]");
    setSavedValues(stored);
  }, []);

  // find category to edit
  const edit = savedValues.find((_, idx) => String(idx + 1) === id);

  // prefill form with category values
  useEffect(() => {
    if (edit) {
      form.setFieldsValue(edit);
    }
  }, [edit, form]);

  // save edited category
  const onFinish = (values: CategoryFormValues) => {
    const updated = savedValues.map((item, idx) =>
      String(idx + 1) === id ? values : item
    );
    setSavedValues(updated);
  };

  // persist in localStorage
  useEffect(() => {
    if (savedValues.length > 0) {
      localStorage.setItem("category", JSON.stringify(savedValues));
      console.log("Updated category:", savedValues);
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
              name="name"
              rules={[
                { required: true, message: "Please enter product title" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter product description" },
              ]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col span={6}>
        <Card bodyStyle={{ backgroundColor: "#fff", borderRadius: 8 }}>
          <h2 style={{ marginBottom: 16 }}>Edit Category</h2>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
          >
            <label style={{ fontWeight: "400", fontSize: 16 }}>
              Product Images
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

            <label style={{ fontWeight: "400", fontSize: 16 }}>Status</label>
            <Form.Item
              name="status"
              initialValue="active"
              style={{ marginTop: 8 }}
              rules={[{ required: true, message: "Please select status" }]}
            >
              <Select
                options={[
                  { label: "Active", value: "active" },
                  { label: "Draft", value: "draft" },
                ]}
              />
            </Form.Item>
          </Form>

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
                Edit Category
              </Button>
            </Form.Item>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
