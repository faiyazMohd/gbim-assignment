
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";
import Button from "../../Common/Button/Button";
import CustomTooltip from "../../Common/Tooltip/Tooltip";

Chart.register(ArcElement, Tooltip, Legend);
const ChartLegend = ({ data }) => {
    return (
      <div className="chart-legend">
        {data.map((item, index) => (
          <div className="legend-item" key={index}>
            <span className="dot" style={{ backgroundColor: item.color }}></span>
            <span className="label">
              <strong>{item.label}:</strong>
            </span>
            <span className="value">{item.value}%</span>
            <span className="keywords">by {item.keywords} keywords</span>
          </div>
        ))}
      </div>
    );
  };
const DonutChart = ({ icon, title, headers }) => {
  const data = {
    labels: ["Branded", "Non-Branded"],
    datasets: [
      {
        data: [33, 67],
        backgroundColor: ["#FFAE4C", "#7E7CEA"],
        // borderWidth: 5, // Removes inner border
        cutout: "30%", // Creates a donut effect
        // borderColor: "#F2F2F2", // Gray outer border
        hoverBorderColor: "#F2F2F2", // Removes hover effect
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hides default legend
      },
      tooltip: {
        enabled: false, // Disables tooltip
      },
    },
  };
  const labelData = [
    { label: "Branded", value: 67, keywords: 452, color: "#7D73F0" },
    { label: "Non-Branded", value: 33, keywords: 452, color: "#FFB24D" },
  ];

  return (
    <div className="organic-keywords-container">
      <div className="organic-keywords-header">
        <div className="header-left">
          <img
            src={icon}
            alt="icon"
            className="chart-icon"
            style={{ width: "35px", height: "35px" }}
          />

          <span className="title">{title}</span>
          <CustomTooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div>
      <div
      className="doughnutContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0  16px",
          flexWrap:"wrap"
        }}
      >
        <div
          className="flex  items-center"
          style={{ gap: "16px" }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              position: "relative",
              transform: "rotate(90deg)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "10px solid #F3F3F3",
                borderRadius: "50%",
                boxSizing: "border-box",
              }}
            ></div>
            <Doughnut data={data} options={options} />
          </div>
          <div style={{ marginLeft: "" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#7D73F0",
                  borderRadius: "50%",
                  display: "inline-block",
                  // marginRight: "8px",
                }}
              ></span>
              <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                Branded:
              </span>
              <div className="flex">
                <span style={{ color: "#32B768", fontWeight: "bold" }}>
                  67%
                </span>
                <span style={{ marginLeft: "5px" }}>by 452 keywords</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#FFB24D",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
              ></span>
              <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                Non-Branded:
              </span>
              <span style={{ color: "#32B768", fontWeight: "bold" }}>33%</span>
              <span style={{ marginLeft: "5px" }}>by 452 keywords</span>
            </div>
          </div>
                {/* <ChartLegend data={labelData} /> */}
        </div>
        <div
          className="flex justify-center items-center doughnutBtn"
          style={{ width: "25%" }}
        >
          <Button text="View Details" variant="primary" textClass=" semibold" />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
