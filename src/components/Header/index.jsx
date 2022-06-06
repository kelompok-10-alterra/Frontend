import React from "react";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Icons */
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Header = ({ icon, title, name, role, picture, url }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container_header}>
      <div className={styles.header_left}>
        {url !== "" && url !== undefined && (
          <IoChevronBackCircleSharp
            onClick={() => navigate(url)}
            className={styles.back}
          />
        )}
        <div className={styles.icon}>{icon}</div>
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
