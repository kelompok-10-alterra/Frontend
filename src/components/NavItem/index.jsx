import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  const { logo, name, link } = props;
  return (
    <NavLink
      to={`${link}`}
      className={style.container}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "var(--active)" : "",
        };
      }}
    >
      <div className={style.logo}>{logo}</div>
      {name}
    </NavLink>
  );
}

export default NavItem;
