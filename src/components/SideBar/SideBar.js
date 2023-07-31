import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <img src={avatar} alt="avatar" className="sideBar__avatar" />
      <p className="sideBar__name">Yunia Matamoros</p>
    </div>
  );
};

export default SideBar;
