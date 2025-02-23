// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import "./BarChart.css";
// const data = [
//   { name: "ebay.com", value1: 20000, value2: 15000 },
//   { name: "amazon.com", value1: 30000, value2: 12000 },
//   { name: "myntra.com", value1: 10000, value2: 14000 },
//   { name: "Flipkart.com", value1: 8000, value2: 7000 },
//   { name: "Semrush.com", value1: 22000, value2: 18000 },
//   { name: "Alys.com", value1: 17000, value2: 10000 },
//   { name: "SEranking.com", value1: 21000, value2: 14000 },
// ];

// const StackedBarChart = () => {
//   return (
//     <div className="flex justify-center items-center p-5 bg-white shadow-md rounded-xl">
//       <ResponsiveContainer width="90%" height={300}>
//         <BarChart data={data} barSize={40}>
//           <XAxis dataKey="name" tick={{ fontSize: 12 }} />
//           <YAxis />
//           <Tooltip
//             contentStyle={{ background: "white", borderRadius: 8, padding: 10 }}
//           />
//           <Bar
//             dataKey="value1"
//             stackId="a"
//             fill="#A855F7"
//             radius={[10, 10, 0, 0]}
//           />
//           <Bar
//             dataKey="value2"
//             stackId="a"
//             fill="#D1D5DB"
//             radius={[10, 10, 0, 0]}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StackedBarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import CSS for styling

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [15, 30, 20],
//       backgroundColor: ["#9C27B0", "#4A148C", "#9C27B0"],
//       borderRadius: 8, // Rounded corners
//     },
//     {
//       label: "Remaining",
//       data: [10, 15, 15],
//       backgroundColor: ["#E0E0E0", "#E0E0E0", "#E0E0E0"], // Light grey for the remaining part
//       borderRadius: 8,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => {
//           return tooltipItems[0].label; // Display website name as title
//         },
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false },
//     },
//     y: {
//       stacked: true,
//       grid: { color: "#E0E0E0" },
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [15, 30, 20],
//       backgroundColor: ["#9C27B0", "#4A148C", "#9C27B0"], // Default colors
//       hoverBackgroundColor: ["#7B1FA2", "#300E5A", "#7B1FA2"], // Darker on hover
//       borderRadius: 8,
//     },
//     {
//       label: "Remaining",
//       data: [10, 15, 15],
//       backgroundColor: ["#E0E0E0", "#E0E0E0", "#E0E0E0"], // Light grey
//       hoverBackgroundColor: ["#E0E0E0", "#E0E0E0", "#E0E0E0"], // No change on hover
//       borderRadius: 8,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => tooltipItems[0].label, // Display website name
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false },
//     },
//     y: {
//       stacked: true,
//       grid: { color: "#E0E0E0" },
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["ebay.com", "amazon.com", "myntra.com", "Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25],
//       backgroundColor: ["#9C27B0", "#4A148C", "#9C27B0", "#9C27B0", "#4A148C", "#9C27B0"], // Colors
//       hoverBackgroundColor: ["#7B1FA2", "#300E5A", "#7B1FA2", "#7B1FA2", "#300E5A", "#7B1FA2"], // Darker on hover
//       borderRadius: 8,
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15],
//       backgroundColor: "#E0E0E0", // Light grey
//       hoverBackgroundColor: "#E0E0E0", // No change on hover
//       borderRadius: 8,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => tooltipItems[0].label, // Display website name
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false }, // No vertical grid lines
//     },
//     y: {
//       stacked: true,
//       grid: {
//         color: "#E0E0E0", // Light grey grid lines
//         borderDash: [5, 5], // Dashed lines
//       },
//       ticks: {
//         callback: (value) => `${value}k`, // Custom labels 10k, 20k, 30k...
//       },
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS for precise styling

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["ebay.com", "amazon.com", "myntra.com", "Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25], // Actual data
//       backgroundColor: ["#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0"], // All main bars same color
//       hoverBackgroundColor: ["#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2"], // Darker on hover
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded on top
//       barThickness: 40, // Adjust bar width
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15],
//       backgroundColor: "#E0E0E0", // Light grey
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded on top
//       barThickness: 40, // Adjust bar width
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => tooltipItems[0].label, // Display website name
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false }, // No vertical grid lines
//     },
//     y: {
//       stacked: true,
//       grid: {
//         color: "#E0E0E0", // Light grey grid lines
//         borderDash: [5, 5], // Dashed lines
//       },
//       ticks: {
//         stepSize: 10, // Ensures 10k, 20k, etc.
//         callback: (value) => `${value}k`, // Custom labels 10k, 20k, etc.
//       },
//       min: 10, // Start from 10k instead of 0
//       max: 50, // Limit to 50k
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS for precise styling

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["ebay.com", "amazon.com", "myntra.com", "Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25], // Actual data
//       backgroundColor: ["#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0", "#9C27B0"], // All main bars same color
//       hoverBackgroundColor: ["#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2", "#7B1FA2"], // Darker on hover
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded on top
//       barThickness: 40, // Adjust bar width
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15],
//       backgroundColor: "#E0E0E0", // Light grey
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded on top
//       barThickness: 40, // Adjust bar width
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => tooltipItems[0].label, // Display website name
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false }, // No vertical grid lines
//     },
//     y: {
//       stacked: true,
//       grid: {
//         color: "#E0E0E0", // Light grey grid lines
//         borderDash: [5, 5], // Dashed lines
//       },
//       ticks: {
//         stepSize: 10, // Ensures 10k, 20k, etc.
//         callback: (value) => `${value}k`, // Custom labels 10k, 20k, etc.
//       },
//       min: 10, // Start from 10k instead of 0
//       max: 50, // Limit to 50k
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["ebay.com", "amazon.com", "myntra.com", "Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25], // Actual data
//       backgroundColor: "#9C27B0", // Purple color
//       hoverBackgroundColor: "#7B1FA2", // Darker on hover
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded top
//       barThickness: 40,
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15], // Remaining portion
//       backgroundColor: "#E0E0E0", // Light grey
//       borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 }, // Rounded top
//       barThickness: 40,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide legend
//     tooltip: {
//       enabled: false, // Disable default tooltip
//       external: function (context) {
//         let tooltipEl = document.getElementById("custom-tooltip");

//         if (!tooltipEl) {
//           tooltipEl = document.createElement("div");
//           tooltipEl.id = "custom-tooltip";
//           tooltipEl.innerHTML = "<div class='tooltip-container'></div>";
//           document.body.appendChild(tooltipEl);
//         }

//         const tooltip = context.tooltip;
//         if (!tooltip || tooltip.opacity === 0) {
//           tooltipEl.style.opacity = 0;
//           return;
//         }

//         const tooltipData = tooltip.dataPoints[0];
//         const website = tooltipData.label;
//         const value = tooltipData.raw;

//         // Update tooltip content dynamically
//         tooltipEl.innerHTML = `
//           <div class="tooltip-box">
//             <span class="tooltip-title"><b>${website}</b></span>
//             <span class="tooltip-subtitle">Keyword: <b>${value} <span class="tooltip-arrow">↑</span></b></span>
//             <div class="tooltip-arrow-down"></div>
//           </div>
//         `;

//         // Positioning the tooltip
//         const position = context.chart.canvas.getBoundingClientRect();
//         tooltipEl.style.opacity = 1;
//         tooltipEl.style.position = "absolute";
//         tooltipEl.style.left = position.left + tooltip.caretX - 60 + "px";
//         tooltipEl.style.top = position.top + tooltip.caretY - 50 + "px";
//         tooltipEl.style.pointerEvents = "none";
//       },
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false },
//     },
//     y: {
//       stacked: true,
//       grid: {
//         color: "#E0E0E0",
//         borderDash: [5, 5], // Dashed lines
//       },
//       ticks: {
//         stepSize: 10,
//         callback: (value) => `${value}k`, // Labels like 10k, 20k...
//       },
//       min: 10,
//       max: 50,
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
// import "./BarChart.css"; // Import custom CSS

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: ["ebay.com", "amazon.com", "myntra.com", "Flipkart.com", "Semrush.com", "Alys.com"],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25],
//       backgroundColor: ["#9C27B0", "#4A148C", "#9C27B0", "#9C27B0", "#4A148C", "#9C27B0"], // Colors
//       hoverBackgroundColor: ["#7B1FA2", "#300E5A", "#7B1FA2", "#7B1FA2", "#300E5A", "#7B1FA2"], // Darker on hover
//       borderRadius: 8,
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15],
//       backgroundColor: "#E0E0E0", // Light grey
//       hoverBackgroundColor: "#E0E0E0", // No change on hover
//       borderRadius: 8,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false }, // Hide default legend
//     tooltip: {
//       enabled: true,
//       usePointStyle: true,
//       callbacks: {
//         title: (tooltipItems) => tooltipItems[0].label, // Display website name
//         label: (tooltipItem) => {
//           if (tooltipItem.datasetIndex === 0) {
//             return `Keyword: 102 ↑`; // Custom tooltip text
//           }
//           return "";
//         },
//       },
//       backgroundColor: "#fff",
//       titleColor: "#000",
//       bodyColor: "#000",
//       titleFont: { weight: "bold" },
//       bodyFont: { weight: "bold" },
//       borderColor: "#ddd",
//       borderWidth: 1,
//       padding: 10,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       stacked: true,
//       grid: { display: false }, // No vertical grid lines
//     },
//     y: {
//       stacked: true,
//       grid: {
//         color: "#E0E0E0", // Light grey grid lines
//         borderDash: [5, 5], // Dashed lines
//       },
//       ticks: {
//         callback: (value) => `${value}k`, // Custom labels 10k, 20k, 30k...
//       },
//     },
//   },
// };

// const BarChart = () => {
//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

///? new updated
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./BarChart.css"; // Import custom CSS
// import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const data = {
//   labels: [
//     "ebay.com",
//     "amazon.com",
//     "myntra.com",
//     "Flipkart.com",
//     "Semrush.com",
//     "Alys.com",
//   ],
//   datasets: [
//     {
//       label: "Main Value",
//       data: [30, 35, 20, 15, 40, 25],
//       backgroundColor: [
//         "#9C27B0",
//         "#4A148C",
//         "#9C27B0",
//         "#9C27B0",
//         "#4A148C",
//         "#9C27B0",
//       ], // Colors
//       hoverBackgroundColor: [
//         "#7B1FA2",
//         "#300E5A",
//         "#7B1FA2",
//         "#7B1FA2",
//         "#300E5A",
//         "#7B1FA2",
//       ], // Darker on hover
//       borderRadius: 8,
//     },
//     {
//       label: "Remaining",
//       data: [15, 10, 10, 10, 10, 15],
//       backgroundColor: "#E0E0E0", // Light grey
//       hoverBackgroundColor: "#E0E0E0", // No change on hover
//       borderRadius: 8,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false },
//     tooltip: {
//       enabled: false, // Disable default tooltip
//       external: function (context) {
//         let tooltipEl = document.getElementById("custom-tooltip");

//         if (!tooltipEl) {
//           tooltipEl = document.createElement("div");
//           tooltipEl.id = "custom-tooltip";
//           tooltipEl.innerHTML = "<div class='tooltip-container'></div>";
//           document.body.appendChild(tooltipEl);
//         }

//         const tooltip = context.tooltip;

//         if (!tooltip || tooltip.opacity === 0) {
//           tooltipEl.style.opacity = 0;
//           return;
//         }

//         const tooltipData = tooltip.dataPoints[0];
//         const website = tooltipData.label;
//         const value = tooltipData.raw;
//         const position = context.chart.canvas.getBoundingClientRect();

//         tooltipEl.innerHTML = `
//             <div class="tooltip-box">
//               <span class="tooltip-title"><b>${website}</b></span>
//               <span class="tooltip-subtitle">Keyword: <b>${value} <span class="tooltip-arrow">↑</span></b></span>
//               <div class="tooltip-arrow-down"></div>
//             </div>
//           `;

//         tooltipEl.style.opacity = 1;
//         tooltipEl.style.position = "absolute";
//         tooltipEl.style.left = position.left + tooltip.caretX - 60 + "px";
//         tooltipEl.style.top = position.top + tooltip.caretY - 50 + "px";
//         tooltipEl.style.pointerEvents = "none";
//       },
//     },
//   },
//   scales: {
//     x: { stacked: true, grid: { display: false } },
//     y: {
//       stacked: true,
//       grid: { color: "#E0E0E0", borderDash: [5, 5] },
//       ticks: { stepSize: 10, callback: (value) => `${value}k` },
//       min: 10,
//       max: 50,
//     },
//   },
// };

// const BarChart = ({ icon, title,}) => {

//   return (
//     <div className="organic-keywords-container">
//       <div className="organic-keywords-header">
//         <div className="header-left">
//           <img
//             src={icon}
//             alt="icon"
//             className="chart-icon"
//             style={{ width: "35px", height: "35px" }}
//           />

//           <span className="title">{title}</span>
//           <img
//             src={HelpIcon}
//             style={{ width: "20px", height: "20px", marginLeft: "12px" }}
//           />
//         </div>
//       </div>
//       <div className="chart-container">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default BarChart;

//ultra newwww

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
