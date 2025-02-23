import React from "react";
import "./ChartCard.css";
import PieChart from "../../Charts/PieChart/PieChart";
import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";
import CustomTooltip from "../../Common/Tooltip/Tooltip";
import Button from "../../Common/Button/Button";
import { checkIfPaid } from "../../../utils/commonFunctions";

const ChartCard = ({
  title,
  dropdownOptions,
  chartIcon,
  pieChartData = [
    { name: "Australia", y: 30, color: "#7086FD" },
    { name: "France", y: 20, color: "#6FD195" },
    { name: "Canada", y: 10, color: "#FFAE4C" },
    { name: "Other", y: 5, color: "#07DBFA" },
  ],
  activeTab = "organic",
}) => {
  return (
    <div className="chart-card">
      {/* Header Section */}
      <div className="chart-card-header">
        <div className="chart-card-title">
          <img
            src={chartIcon}
            alt="icon"
            className="chart-icon"
            style={{ width: "40px", height: "40px" }}
          />
          <span>{title}</span>
          {/* <img src={HelpIcon} style={{width:"20px",height:"20px",marginLeft:"12px"}}/> */}
          <CustomTooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>

        {/* Dropdown */}
        <select className="chart-dropdown">
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Section */}
      {/* <div className="chart-card-body">{pieChart}</div> */}
      <PieChart data={pieChartData} />

      {/* Footer */}
      <div className="chart-card-footer">
        {checkIfPaid(activeTab) ? (
          <Button text="View Details" variant="primary" textClass=" semibold" />
        ) : (
          <button className="view-details-btn">View Details</button>
        )}
      </div>
    </div>
  );
};

export default ChartCard;
