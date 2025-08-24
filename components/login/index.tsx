"use client";
import {
  Card,
  Input,
  Button,
  Typography,
  Row,
  Col,
  theme,
  Form,
  message,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

// 🎨 كل التنسيقات هنا
const sty: { [key: string]: React.CSSProperties } = {
  wrapper: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: 900,
    margin: "50px auto",
  },
  title: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 45,
    fontWeight: 600,
    marginBottom: 16,
    cursor: "pointer",
  },
  footer: {
    justifyContent: "space-between",
    fontSize: 14,
  },
  link: {
    cursor: "pointer",
  },
};

export default function LoginPage() {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  const onFinish = () => {
    if (userName === "admin@gmail.com" && password === "Admin.123") {
      router.push("/dashboard");
      sessionStorage.setItem("login", JSON.stringify({ token: "12345" }));
    } else {
      message.error("Invalid email or password");
    }
  };
  const { token } = theme.useToken();
  return (
    <div style={sty.wrapper}>
      <Row gutter={16}>
        <Col span={12}>
          {" "}
          <div>
            <img
              src="/images/login.jpg"
              alt="Dashboard"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col span={12} style={{ margin: "auto 0px", padding: "3rem" }}>
          {" "}
          <div>
            <Title level={3} style={sty.title}>
              Admin Login
            </Title>
            <Form onSubmitCapture={onFinish}>
              <div style={{ margin: "0 0 8px 3px", fontSize: "16px" }}>
                Email
              </div>
              <Input
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
                style={sty.input}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <div style={{ margin: "0 0 8px 3px", fontSize: "16px" }}>
                Password
              </div>
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
                style={sty.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                style={{
                  ...sty.button,
                  background: token.colorPrimary,
                  color: "#fff",
                  border: "none",
                }}
              >
                Login
              </button>
            </Form>
            <div style={sty.footer}>
              <div>
                <Text style={{ ...sty.link, color: token.colorPrimary }}>
                  Forgot your password?
                </Text>
              </div>
              <div>
                <Text style={{ ...sty.link, color: token.colorPrimary }}>
                  Create account
                </Text>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
