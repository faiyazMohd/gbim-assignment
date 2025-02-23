
import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./BarChart.css"; // Import custom CSS
import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";
import CustomTooltip from "../../Common/Tooltip/Tooltip";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    "ebay.com",
    "amazon.com",
    "myntra.com",
    "Flipkart.com",
    "Semrush.com",
    "Alys.com",
    "SEranking.com",
  ],
  datasets: [
    {
      label: "Main Value",
      data: [30, 35, 23, 18, 30, 24, 28],
      backgroundColor: "#9C27B0",
      hoverBackgroundColor: "#7B1FA2",
      // borderRadius: {
      //   topLeft: 10,
      //   topRight: 10,
      //   bottomLeft: 10,
      //   bottomRight: 10,
      // },
      // borderRadius: {
      //   topLeft: 10,
      //   topRight: 10,
      //   bottomLeft: 10,
      //   bottomRight: 10,
      // },
      barThickness: 70,
    },
    {
      label: "Remaining",
      data: [10, 10, 7, 8, 10, 8, 7],
      backgroundColor: "#E0E0E0",
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      barThickness: 70,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Prevent aspect ratio distortion
  barPercentage: 1.0, // Ensures all bars are the same width
  categoryPercentage: 1.0, // Ensures uniform category width
  plugins: {
    legend: { display: false }, // Hide default legend
    tooltip: {
      enabled: true,
      usePointStyle: true,
      callbacks: {
        title: (tooltipItems) => tooltipItems[0].label, // Display website name
        label: (tooltipItem) => {
          if (tooltipItem.datasetIndex === 0) {
            return `Keyword: 102 ↑`; // Custom tooltip text
          }
          return "";
        },
      },
      backgroundColor: "#fff",
      titleColor: "#000",
      bodyColor: "#000",
      titleFont: { weight: "bold" },
      bodyFont: { weight: "bold" },
      borderColor: "#ddd",
      borderWidth: 1,
      padding: 10,
      displayColors: false,
      yAlign: "bottom", // Ensure tooltip aligns below the bar
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { display: false }, // No vertical grid lines
      barThickness: 40, // Ensures same bar width
    },
    y: {
      stacked: true,
      grid: {
        color: "#E0E0E0", // Light grey grid lines
        borderDash: [5, 5], // Dashed lines
      },
      ticks: {
        stepSize: 10, // Ensures 10k, 20k, etc.
        callback: (value) => `${value}k`, // Custom labels 10k, 20k, etc.
      },
      min: 10, // Start from 10k instead of 0
      max: 50, // Limit to 50k
    },
  },
};

const BarChart = ({ icon, title }) => {
  return (
    <div className="organic-keywords-container" style={{ height: "350px" }}>
      {" "}
      <div className="organic-keywords-header">
        <div className="header-left">
          {" "}
          <img
            src={icon}
            alt="icon"
            className="chart-icon"
            style={{ width: "35px", height: "35px" }}
          />
          <span className="title">{title}</span>
          {/* <img
            src={HelpIcon}
            style={{ width: "20px", height: "20px", marginLeft: "12px" }}
          /> */}
          <CustomTooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div>
      <div className="" style={{ height: "80%", width: "95%", margin: "auto" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
