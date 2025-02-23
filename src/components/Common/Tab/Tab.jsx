import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ variant = "dark", tabs }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className={`tab-container ${variant}`}>
      {tabs?.map((tab, index) => (
        <div
          key={index}
          className={`tab-item ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab?.icon && <span className="icon"><img src={tab?.icon}/></span>}
          {tab?.name}
        </div>
      ))}
    </div>
  );
};

export default Tab;
