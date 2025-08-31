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

type ProductFormValues = {
  title: string;
  description: string;
  quantity: number;
  price: number;
  colors?: string[];
  sizes?: string[];
  properties?: { key: string; value: string }[];
  images?: File[];
  category: string;
  status: "active" | "draft";
};

export default function EditProductCom() {
  const [form] = Form.useForm<ProductFormValues>();
  const router = useRouter();
  const [savedValues, setSavedValues] = useState<ProductFormValues[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // product index (string)

  // load products from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("product") || "[]");
    setSavedValues(stored);
  }, []);

  // find product to edit
  const edit = savedValues.find((_, idx) => String(idx + 1) === id);

  // prefill form with product values
  useEffect(() => {
    if (edit) {
      form.setFieldsValue(edit);
    }
  }, [edit, form]);

  // save edited product
  const onFinish = (values: ProductFormValues) => {
    const updated = savedValues.map((item, idx) =>
      String(idx + 1) === id ? values : item
    );
    setSavedValues(updated);
  };

  // persist in localStorage
  useEffect(() => {
    if (savedValues.length > 0) {
      localStorage.setItem("product", JSON.stringify(savedValues));
      console.log("Updated Products:", savedValues);
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

            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="Quantity"
                  name="quantity"
                  rules={[{ required: true, message: "Enter quantity" }]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[{ required: true, message: "Enter price" }]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Available Colors" name="colors">
              <Select
                mode="multiple"
                options={[
                  { label: "Red", value: "red" },
                  { label: "Blue", value: "blue" },
                  { label: "Green", value: "green" },
                  { label: "Black", value: "black" },
                  { label: "White", value: "white" },
                ]}
              />
            </Form.Item>

            <Form.Item label="Available Sizes" name="sizes">
              <Checkbox.Group options={["XS", "S", "M", "L", "XL", "XXL"]} />
            </Form.Item>

            <Form.List name="properties">
              {(fields, { add, remove }) => (
                <>
                  <label>Extra Properties</label>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "key"]}
                        rules={[{ required: true, message: "Key is required" }]}
                      >
                        <Input placeholder="Property name (e.g. Material)" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        rules={[
                          { required: true, message: "Value is required" },
                        ]}
                      >
                        <Input placeholder="Value (e.g. Cotton)" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Property
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </Card>
      </Col>

      <Col span={6}>
        <Card bodyStyle={{ backgroundColor: "#fff", borderRadius: 8 }}>
          <h2 style={{ marginBottom: 16 }}>Edit Product</h2>
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

            <label style={{ fontWeight: "400", fontSize: 16 }}>
              Categories
            </label>
            <Form.Item
              name="category"
              style={{ marginTop: 8 }}
              rules={[{ required: true, message: "Please select category" }]}
            >
              <Select
                options={[
                  { label: "Clothing", value: "clothing" },
                  { label: "Electronics", value: "electronics" },
                  { label: "Furniture", value: "furniture" },
                  { label: "Shoes", value: "shoes" },
                ]}
              />
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
                onClick={() => router.push("/products")}
                type="dashed"
                block
              >
                Finished
              </Button>
            </Form.Item>
            <Form.Item style={{ width: "100%" }}>
              <Button type="primary" block onClick={() => form.submit()}>
                Edit Product
              </Button>
            </Form.Item>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
