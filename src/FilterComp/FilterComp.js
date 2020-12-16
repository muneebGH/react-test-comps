import React, { useState } from "react";
import "./FilterComp.css";
import FilterEntery from "../FilterElemComp/FilterEntery";
import { Button } from "antd";
function FilterComp(props) {
  let [all, setAll] = useState(false);
  setAll = function (checked) {
    all = checked;
    console.log("set all called ", checked);
    setPathholes(checked);
  };
  let [pathholes, setPathholes] = useState(false);
  setPathholes = function (checked) {
    console.log("set pathholes called ", checked);
    pathholes = checked;
  };
  return (
    <div className="outer-container-filter">
      <p>Class Filters</p>
      <FilterEntery text="All" default={all} onChange={setAll} />
      <FilterEntery
        text="Pathholes"
        default={pathholes}
        onChange={setPathholes}
      />
      <FilterEntery text="Cracks" default={all} />
      <FilterEntery text="Bleeds" default={all} />
      <Button type="ghost" style={{ borderRadius: "10px", margin: "5px" }}>
        Clear
      </Button>
    </div>
  );
}

export default FilterComp;
