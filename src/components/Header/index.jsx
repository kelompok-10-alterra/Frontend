import React from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import BreadCrumb from "../BreadCrumb";

/** Images */
import picture from "../../assets/img/profile_picture.png";

const Header = ({ name, role }) => {
  return (
    <div className={styles.container_header}>
      <div className={styles.header_left}>
        <BreadCrumb location={window.location.pathname} />
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
