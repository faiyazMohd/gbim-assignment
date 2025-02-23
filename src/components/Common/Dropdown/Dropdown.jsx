import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, selected, onChange, customClass = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`dropdown-container`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`dropdown-header`}>
        {selected} <i className="ri-arrow-down-s-line"></i>
      </div>
      {isOpen && (
        <ul className="dropdown-list" style={{zIndex:"50"}}>
          {options.map((option, index) => (
            <li key={index} onClick={() => onChange(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
