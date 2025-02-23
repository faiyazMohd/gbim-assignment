import React from "react";
import "./Table.css"; // Import CSS file
import HelpIcon from "../../.././assets/icons/Body/HelpIcon.svg";
import CustomTooltip from "../../Common/Tooltip/Tooltip";
import { checkIfPaid } from "../../../utils/commonFunctions";
import Button from "../../Common/Button/Button";

const Table = ({ icon, title, headers, data, activeTab }) => {
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
        {checkIfPaid(activeTab) ? (
          <Button text="View Details" variant="primary" textClass=" semibold" />
        ) : (
          <button className="view-details-btn">View Details</button>
        )}
      </div>

      <table className="keywords-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[colIndex] ?? "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
