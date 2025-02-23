import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.css";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="date-picker-wrapper">
            {/* <label className="date-label">Date</label> */}
            <div className="date-range-container">
                {/* Calendar Icon */}
                <i className="ri-calendar-2-fill calendar-icon"></i>

                {/* Start Date */}
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="date-input"
                    dateFormat="dd/MM/yy"
                />

                <span className="separator">-</span>

                {/* End Date */}
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="date-input"
                    dateFormat="dd/MM/yy"
                />

                {/* Dropdown Icon */}
                {/* <i className="ri-arrow-down-s-line dropdown-icon"></i> */}
            </div>
        </div>
    );
};

export default DateRangePicker;
