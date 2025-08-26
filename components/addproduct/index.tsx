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

export default function AddProductCom() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Product Data:", values);
  };

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

            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="Quantity"
                  name="quantity"
                  rules={[{ required: true, message: "Enter quantity" }]}
                >
                  <Input placeholder="Quantity" type="number" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[{ required: true, message: "Enter price" }]}
                >
                  <Input placeholder="Price" type="number" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Available Colors" name="colors">
              <Select
                mode="multiple"
                placeholder="Select product colors"
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
          <h2 style={{ marginBottom: 16 }}>Add Product</h2>

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

          <label style={{ fontWeight: "400", fontSize: 16 }}>Categories</label>
          <Form.Item
            name="category"
            style={{ marginTop: 8 }}
            rules={[{ required: true, message: "Please select category" }]}
          >
            <Select
              placeholder="Select category"
              options={[
                { label: "Clothing", value: "clothing" },
                { label: "Electronics", value: "electronics" },
                { label: "Furniture", value: "furniture" },
                { label: "Shoes", value: "shoes" },
              ]}
            />
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

          {/* Submit */}
          <Form.Item>
            <Button type="primary" block onClick={() => form.submit()}>
              Add Product
            </Button>
          </Form.Item>
        </Card>
      </Col>
    </Row>
  );
}
