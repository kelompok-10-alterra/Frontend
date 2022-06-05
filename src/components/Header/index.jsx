import React from "react";

/** CSS */
import styles from "./style.module.css";

/** Images */
import logo from "../../assets/img/test.jpg";

/** Icon */
import { GiAbstract050 } from "react-icons/gi";

const Header = (props) => {
  // icon dan image nanti menyesuaikan

  return (
    <>
      <div>
        <div className={styles.container_header}>
          <div className={styles.header_left}>
            <div className={styles.icon}>
              <GiAbstract050 />
            </div>
            <p>Dashboard</p>
          </div>

          <div className={styles.header_right}>
            <div className={styles.user_info}>
              <p className={styles.name}>Kevin C</p>
              <span className={styles.role}>admin</span>
            </div>
            <div>
              <img width={42} className="rounded-circle" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
