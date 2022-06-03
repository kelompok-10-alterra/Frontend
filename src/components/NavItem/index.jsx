import React from "react";

import { NavLink } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

const NavItems = (props) => {
  const { logo, name, link } = props;

  return (
    <NavLink
      to={`${link}`}
      className={styles.container}
      style={({ isActive }) => {
        return {
          color: isActive ? "var(--primary)" : "",
          borderRight: isActive ? "5px solid var(--primary)" : "",
        };
      }}
    >
      <div className={styles.logo}>{logo}</div>
      {name}
    </NavLink>
  );
};

export default NavItems;
