import React from "react";
import Date from "../DateComp/Date";
import "./Calendar.css";
import { Button } from "antd";
var _ = require("lodash");

function Calendar(props) {
  return (
    <div className="calendar-core">
      {_.range(1, 32).map((n) => (
        <Date dateNum={n} postCount={3} />
      ))}
      <Button
        className="set-yesterday-button"
        style={{
          borderRadius: "10px",
          border: "1px solid #6C63FF",
          padding: "0 10px",
          marginTop: "7px"
        }}
        type="text"
        shape="round"
        ghost
      >
        Set Yesterday
      </Button>
      <Button
        className="set-today-button"
        style={{
          borderRadius: "10px",
          border: "1px solid #6C63FF",
          padding: "0 10px",
          marginTop: "7px"
        }}
        type="text"
        shape="round"
        ghost
      >
        Set Today
      </Button>
      <Button
        className="clear-button"
        style={{
          borderRadius: "10px",
          border: "1px solid #FF4D60",
          padding: "0 10px",
          marginTop: "7px"
        }}
        type="text"
        shape="round"
        ghost
      >
        Clear
      </Button>
    </div>
  );
}

export default Calendar;
