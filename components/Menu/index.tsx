"use client";
import React, { useEffect, useState } from "react";
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
  Spin,
  theme,
} from "antd";
import Image from "next/image";
import { IoMdHome, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import { IoLogInOutline } from "react-icons/io5";
import CategoriesPage from "@/app/(dashboard)/categories/page";

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
  const [profile, setProfile] = useState(false);
  const [Notifications, setNotifications] = useState(false);
  const router = useRouter();

  const { token } = theme.useToken();

  const emailsHandler = () => {
    setEmails(!emails);
  };
  const hotificationsHandler = () => {
    setNotifications(!Notifications);
  };
  const profileHandler = () => {
    setProfile(!profile);
  };

  const SingOut = () => {
    router.push("/login");
    sessionStorage.clear();
  };

  return (
    <Layout style={{ background: token.colorPrimary, height: "100vh" }}>
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
        <div style={{ padding: "16px", margin: "auto" }}>
          <Image
            style={{
              display: "block",
              margin: collapsed ? "auto" : "",
            }}
            src={collapsed ? "/images/secoundLogo.png" : "/images/logo.png"}
            alt="logo"
            width={collapsed ? 30 : 120}
            height={28}
          />
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

          <div
            style={
              collapsed
                ? { margin: "auto 0px", display: "none" }
                : { margin: "auto 0px" }
            }
          >
            {" "}
            <h4 style={{ fontSize: "14px" }}>Muhammed Ali</h4>
            <p style={{ fontSize: "12px", color: "gray" }}>Project Manager</p>
          </div>
        </div>

        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          style={{
            borderRight: 0,
            fontSize: "14px",
            fontWeight: "500",
            background: "white",
          }}
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
              onClick: () => router.push("/products"),
            },
            {
              key: "3",
              icon: <TbCategoryPlus style={{ fontSize: "20px" }} />,
              label: "Categories",
              onClick: () => router.push("/categories"),
            },
            {
              key: "4",
              icon: <HiOutlineShoppingCart style={{ fontSize: "20px" }} />,
              label: "Orders",
              onClick: () => router.push("/orders"),
            },
            {
              key: "5",
              icon: <IoMdSettings style={{ fontSize: "20px" }} />,
              label: "Settings",
              onClick: () => router.push("/settings"),
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
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ position: "relative", top: "5px" }}>
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
                              background: "white",
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

            <div style={{ position: "relative", top: "5px" }}>
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
                              background: "white",
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

            <div style={{ position: "relative" }}>
              <div
                onClick={() => profileHandler()}
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={"/images/profile.jpg"}
                  alt="profile"
                  style={{ borderRadius: "50%" }}
                  width={40}
                  height={40}
                />
                <div>
                  Muhammed Ali{" "}
                  <SlArrowDown
                    style={{ fontSize: "12px", color: token.colorPrimary }}
                  />
                </div>
              </div>
              {profile && (
                <div
                  style={{
                    position: "absolute",
                    width: "160px",
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
                      display: "flex",
                      alignItems: "center",
                      height: "50px",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <TfiReload
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "rgba(27,207,180,1)",
                        margin: "auto 0px",
                      }}
                    />

                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#343a40",
                      }}
                    >
                      {" "}
                      Activity Log{" "}
                    </p>
                  </div>
                  <div
                    onClick={() => SingOut()}
                    style={{
                      padding: "0px 16px",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      alignItems: "center",
                      height: "50px",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <IoLogInOutline
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: token.colorPrimary,
                        margin: "auto 0px",
                      }}
                    />

                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#343a40",
                      }}
                    >
                      {" "}
                      Signout
                    </p>
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
            background: token.colorBgBase,
            borderRadius: token.colorPrimary,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMenu;
