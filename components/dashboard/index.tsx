"use client";
import { Card, Row, Col, Statistic } from "antd";
import Image from "next/image";
import { Bar, Pie } from "react-chartjs-2";

import { FaChartLine, FaBookmark, FaGem } from "react-icons/fa";
import BarChart from "./chart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<{ token: string } | null>(null);
  useEffect(() => {
    const saved = sessionStorage.getItem("login");
    if (saved) {
      setUser(JSON.parse(saved));
    } else {
      router.push("/login");
    }
  }, []);

  const stats = [
    {
      title: "Weekly Sales",
      value: "$ 15,0000",

      icon: <FaChartLine size={24} />,
      bg: "linear-gradient(to right, #ffbf96, #fe7096) !important", // Pink
      change: "Increased by 60%",
    },
    {
      title: "Weekly Orders",
      value: "45,6334",

      icon: <FaBookmark size={24} />,
      bg: "linear-gradient(to right, #90caf9, #047edf 99%) !important", // Blue
      change: "Decreased by 10%",
    },
    {
      title: "Visitors Online",
      value: "95,5741",

      icon: <FaGem size={24} />,
      bg: "linear-gradient(to right, #84d9d2, #07cdae) !important", // Green
      change: "Increased by 5%",
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
        {stats.map((stat, index) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            key={index}
            style={{ position: "relative" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: stat.bg,
                color: "#fff",
                padding: "2.5rem",
                borderRadius: 8,
              }}
            >
              <div>
                <Statistic
                  title={
                    <span
                      style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}
                    >
                      {stat.title}
                    </span>
                  }
                  value={stat.value}
                  valueStyle={{
                    color: "#fff",
                    fontSize: "1.88rem",
                    marginBottom: "2.8rem ",
                  }}
                />
                <div>
                  <span style={{ color: "#fff", fontSize: "0.9375rem" }}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div style={{ opacity: 0.3 }}>{stat.icon}</div>
            </div>

            <Image
              src={"/images/dashbord.svg"}
              alt="img"
              width={220}
              height={225}
              style={{
                position: "absolute",
                top: 0,
                right: "-13px",
              }}
            />
          </Col>
        ))}
      </Row>
      <BarChart />
    </div>
  );
}
