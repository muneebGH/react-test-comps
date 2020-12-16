import React from "react";
import "./Menu.css";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  RiAdminLine,
  RiAdminFill,
  RiSearchLine,
  RiSearchFill
} from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
function Menu(props) {
  return (
    <div className="outer-container-menu">
      <div className="rcsa-logo">RCSA</div>
      <div className="navigation-icons">
        <AiOutlineHome
          style={{ height: "100%", width: "100%", color: "#333951" }}
        />
        <RiSearchLine
          style={{ height: "100%", width: "100%", color: "#333951" }}
        />
        <RiAdminLine
          style={{ height: "100%", width: "100%", color: "#333951" }}
        />
      </div>
      <div className="logout-icon">
        <BiLogOut style={{ height: "100%", width: "100%", color: "#333951" }} />
      </div>
    </div>
  );
}

export default Menu;
