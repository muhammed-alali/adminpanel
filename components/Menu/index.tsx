"use client";
import React, { useState } from "react";
import {
  ClockCircleOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Layout,
  Menu,
  Row,
  Space,
  theme,
} from "antd";
import Image from "next/image";
import { IoMdHome, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";

const { Header, Sider, Content } = Layout;

const { Panel } = Collapse;

const messages = [
  {
    id: 1,
    title: "Mark send you a message",
    body: "1 Minutes ago",
  },
  {
    id: 2,
    title: "Cregh send you a message",
    body: "15 Minutes ago",
  },
  {
    id: 3,
    title: "Profile picture updated",
    body: "30 Minutes ago",
  },
];
const notifications = [
  {
    id: 1,
    title: "Event today",
    body: "Just a reminder that you have an event today",
  },
  {
    id: 2,
    title: "Settings",
    body: "Update dashboard",
  },
  {
    id: 3,
    title: "Launch Admin",
    body: "New admin wow!",
  },
];

const LayoutMenu = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [emails, setEmails] = useState(false);
  const [Notifications, setNotifications] = useState(false);
  const router = useRouter();

  const { token }: any = theme.useToken();

  const emailsHandler = () => {
    setEmails(!emails);
  };
  const hotificationsHandler = () => {
    setNotifications(!Notifications);
  };

  return (
    <Layout style={{ background: token.firstColor, height: "100vh" }}>
      <Sider
        style={{
          background: "rgb(255, 255, 255)",
          width: "300px",
          maxWidth: "300px",
          minWidth: "300px",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ padding: "16px" }}>
          <Image src={"/images/logo.png"} alt="logo" width={120} height={28} />
        </div>
        <div
          style={{
            padding: "16px",
            display: "flex",
            gap: "5px",
          }}
        >
          <Image
            src={"/images/profile.jpg"}
            alt="profile"
            style={{ borderRadius: "50%" }}
            width={40}
            height={40}
          />

          <div style={{ margin: "auto 0px" }}>
            {" "}
            <h4 style={{ fontSize: "14px" }}>Muhammed Ali</h4>
            <p style={{ fontSize: "12px", color: "gray" }}>Project Manager</p>
          </div>
        </div>

        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          style={{ borderRight: 0, fontSize: "14px", fontWeight: "500" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <IoMdHome style={{ fontSize: "20px" }} />,
              label: "Dashboard",
              onClick: () => router.push("/dashboard"),
            },
            {
              key: "2",
              icon: <FaShopify style={{ fontSize: "20px" }} />,
              label: "Products",
            },
            {
              key: "3",
              icon: <TbCategoryPlus style={{ fontSize: "20px" }} />,
              label: "Categories",
            },
            {
              key: "4",
              icon: <HiOutlineShoppingCart style={{ fontSize: "20px" }} />,
              label: "Orders",
            },
            {
              key: "5",
              icon: <IoMdSettings style={{ fontSize: "20px" }} />,
              label: "Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "white",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            paddingRight: "16px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ position: "relative" }}>
              <div
                onClick={() => emailsHandler()}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <MdOutlineEmail style={{ fontSize: "30px", color: "#aaa" }} />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <span
                    style={{
                      background: "#b66dff",
                      padding: "0px 5px",
                      borderRadius: "50%",
                      color: "#fff",
                    }}
                  >
                    3
                  </span>
                </div>
              </div>

              {emails && (
                <div
                  style={{
                    position: "absolute",
                    width: "280px",
                    top: "70px",
                    right: 0,
                    zIndex: 1,
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      padding: "0px 16px",
                      borderBottom: "1px solid #eee",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Messages
                  </div>
                  {messages.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        padding: "0px 16px",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Row gutter={12}>
                        <Col span={4} style={{ margin: "auto 0px" }}>
                          <Avatar size={38} icon={<UserOutlined />} />
                        </Col>
                        <Col span={20}>
                          <Card
                            style={{
                              border: "none",
                              boxShadow: "none",
                              width: "214px",
                            }}
                            bodyStyle={{
                              padding: "12px 0px 12px 10px",
                            }}
                          >
                            <p style={{ fontWeight: "500" }}>{item.title}</p>
                            <p>{item.body}</p>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    2 new messages
                  </div>
                </div>
              )}
            </div>

            <div style={{ position: "relative" }}>
              <div
                onClick={() => hotificationsHandler()}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <IoMdNotifications
                  style={{ fontSize: "30px", color: "#aaa" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <span
                    style={{
                      background: "#b66dff",
                      padding: "0px 5px",
                      borderRadius: "50%",
                      color: "#fff",
                    }}
                  >
                    2
                  </span>
                </div>
              </div>

              {Notifications && (
                <div
                  style={{
                    position: "absolute",
                    width: "280px",
                    top: "70px",
                    right: 0,
                    zIndex: 1,
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      padding: "0px 16px",
                      borderBottom: "1px solid #eee",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Notifications
                  </div>
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        padding: "0px 16px",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Row gutter={12}>
                        <Col span={4} style={{ margin: "auto 0px" }}>
                          <Avatar size={38} icon={<UserOutlined />} />
                        </Col>
                        <Col span={20}>
                          <Card
                            style={{
                              border: "none",
                              boxShadow: "none",
                              width: "214px",
                            }}
                            bodyStyle={{
                              padding: "12px 0px 12px 10px",
                            }}
                          >
                            <p style={{ fontWeight: "500" }}>{item.title}</p>
                            <p>{item.body}</p>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    See all notifications
                  </div>
                </div>
              )}
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: "24px 24px 70px 24px",
            height: "100vh",
            minHeight: "fit-content",
            background: token.bg,
            borderRadius: token.firstColor,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMenu;
