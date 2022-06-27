import React from "react";
import { NavLink } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

const NavItems = ({ logo, name, link, id }) => {
  return (
    <>
      {name === "Logout" ? (
        <NavLink
          to={`${link}`}
          key={id}
          onClick={() => localStorage.setItem("SPORTLY_ACCESS", "")}
          className={styles.container}
          style={({ isActive }) => {
            return {
              color: isActive ? "var(--primary)" : "",
              borderRight: isActive ? "5px solid var(--primary)" : "",
            };
          }}
        >
          <div className={styles.logo}>{logo}</div>
          <div className={styles.name}>{name}</div>
        </NavLink>
      ) : (
        <NavLink
          to={`${link}`}
          className={styles.container}
          key={id}
          style={({ isActive }) => {
            return {
              color: isActive ? "var(--primary)" : "",
              borderRight: isActive ? "5px solid var(--primary)" : "",
            };
          }}
        >
          <div className={styles.logo}>{logo}</div>
          <div className={styles.name}>{name}</div>
        </NavLink>
      )}
    </>
  );
};

export default NavItems;
