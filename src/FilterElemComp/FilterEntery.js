import React from "react";
import { Switch } from "antd";
import "./FilterEntery.css";
function FilterEntery(props) {
  console.log("rendered");
  return (
    <div className="outer-container">
      <Switch onChange={props.onChange} defaultChecked={props.default} />
      <p style={{ display: "inline", margin: "-4px" }}>{props.text}</p>
    </div>
  );
}

export default FilterEntery;
