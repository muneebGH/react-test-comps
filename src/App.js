import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Date from "./DateComp/Date";
import Calendar from "./CalendarComp/Calendar";
import FilterEntery from "./FilterElemComp/FilterEntery";
import FilterComp from "./FilterComp/FilterComp";
import Menu from "./Menu/Menu";
export default function App() {
  return (
    <div className="App">
      {/* <FilterComp /> */}
      <Menu />
    </div>
  );
}
