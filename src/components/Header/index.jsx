import React from "react";

/** Styles */
import styles from "./style.module.css";

const Header = ({ icon, title, name, role, picture }) => {
  return (
    <div className={styles.container_header}>
      <div className={styles.header_left}>
        <div className={styles.icon}>
          {icon}
        </div>
        <p>{title}</p>
      </div>
      <div className={styles.header_right}>
        <div className={styles.user_info}>
          <p className={styles.name}>{name}</p>
          <span className={styles.role}>{role}</span>
        </div>
        <div className={styles.profile_picture}>
          <img className="rounded-circle" src={picture} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
