"use client";

import { Card, Form, Input, Select, Switch, Button, Row, Col } from "antd";

export default function SettingsCom() {
  return (
    <div
      style={{
        padding: "24px",
        background: "#f2edf3",
        minHeight: "100vh",
      }}
    >
      <Form layout="vertical">
        {/* General Settings */}
        <Card
          title="⚙️ General Settings"
          style={{
            marginBottom: "16px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Meta Title">
                <Input placeholder="Title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Meta Tag Keyword">
                <Input placeholder="Enter word" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Store Themes">
                <Select defaultValue="Default">
                  <Select.Option value="default">Default</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Layout">
                <Select defaultValue="Default">
                  <Select.Option value="default">Default</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Description">
            <Input.TextArea rows={3} placeholder="Type description" />
          </Form.Item>
        </Card>

        {/* Store Settings */}
        <Card
          title="🏪 Store Settings"
          style={{
            marginBottom: "16px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Store Name">
                <Input placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Store Owner Full Name">
                <Input placeholder="Full name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Owner Phone Number">
                <Input placeholder="Number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Owner Email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Full Address">
            <Input placeholder="Type address" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Zip-Code">
                <Input placeholder="Zip-code" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="City">
                <Select placeholder="Choose a city" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Country">
                <Select placeholder="Choose a country" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Localization Settings */}
        <Card
          title="🌍 Localization Settings"
          style={{
            marginBottom: "16px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Country">
                <Select placeholder="Choose a country" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Language">
                <Select defaultValue="English">
                  <Select.Option value="en">English</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Currency">
                <Select defaultValue="USD">
                  <Select.Option value="usd">US Dollar</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Length Class">
                <Select defaultValue="Centimeter">
                  <Select.Option value="cm">Centimeter</Select.Option>
                  <Select.Option value="m">Meter</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Weight Class">
            <Select defaultValue="Kilogram">
              <Select.Option value="kg">Kilogram</Select.Option>
              <Select.Option value="g">Gram</Select.Option>
            </Select>
          </Form.Item>
        </Card>

        {/* Small Settings Sections */}
        <Row gutter={16}>
          <Col span={6}>
            <Card
              title="📂 Categories Settings"
              style={{
                marginBottom: "16px",
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Form.Item label="Category Product Count">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="Default Items Per Page">
                <Input placeholder="000" />
              </Form.Item>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="⭐ Reviews Settings"
              style={{
                marginBottom: "16px",
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Form.Item label="Allow Reviews">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="Allow Guest Reviews">
                <Switch />
              </Form.Item>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="🎟️ Vouchers Settings"
              style={{
                marginBottom: "16px",
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Form.Item label="Minimum Vouchers">
                <Input placeholder="1" />
              </Form.Item>
              <Form.Item label="Maximum Vouchers">
                <Input placeholder="12" />
              </Form.Item>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="💰 Tax Settings"
              style={{
                marginBottom: "16px",
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Form.Item label="Prices with Tax">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="Default Tax Rate">
                <Input placeholder="18%" />
              </Form.Item>
            </Card>
          </Col>
        </Row>

        {/* Customers Settings */}
        <Card
          title="👥 Customers Settings"
          style={{
            marginBottom: "16px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Customers Online">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Customers Activity">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Customer Searches">
                <Switch />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Allow Guest Checkout">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Login Display Price">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Max Login Attempts">
                <Input placeholder="1 hour" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Save / Cancel */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <Button danger>Cancel</Button>
          <Button type="primary">Save Change</Button>
        </div>
      </Form>
    </div>
  );
}
