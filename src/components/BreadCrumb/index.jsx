import React from "react";
import { Link } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Constant */
import { CRUMBS_DATA } from "../../utils/crumbs";

const BreadCrumb = ({ location }) => {
  const key = location.substring(1);
  const crumbs = CRUMBS_DATA[key];
  const isLast = (index) => {
    return index === crumbs.length - 1;
  };

  return (
    <nav>
      <ul className={styles.breadcrumb}>
        {crumbs.length !== undefined ? (
          crumbs.map((crumb, index) => {
            return isLast(index) ? (
              <li key={crumb.id} className={styles.links_disabled}>
                <Link to={crumb.link}>/ {crumb.name}</Link>
              </li>
            ) : (
              <li key={crumb.id} className={styles.links}>
                <Link to={crumb.link}>{crumb.name} </Link>
              </li>
            );
          })
        ) : (
          <li key={crumbs.id} className={styles.links_disabled}>
            <Link to={crumbs.link}>{crumbs.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
