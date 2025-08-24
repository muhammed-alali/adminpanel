"use client";

import { Bar, Doughnut } from "react-chartjs-2";
import { Card, Row, Col } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data1 = {
  labels,
  datasets: [
    {
      label: "Visits",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(24, 144, 255, 0.6)",
      borderColor: "rgba(24, 144, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Sales Distribution",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: { legend: { position: "top" } },
  scales: { y: { beginAtZero: true } },
};

export default function ChartDashboard() {
  return (
    <Row gutter={[40, 40]} style={{ marginTop: 40 }}>
      <Col xs={24} lg={15}>
        <div style={{ width: "800px", height: "470px" }}>
          <Card title="Visit Statistics" bordered={false}>
            <Bar data={data1} options={options} />
          </Card>
        </div>
      </Col>
      <Col xs={24} lg={9}>
        <div style={{ width: "450px", height: "200px" }}>
          <Card title="Sales Distribution" bordered={false}>
            <Doughnut data={data2} />
          </Card>
        </div>
      </Col>
    </Row>
  );
}
