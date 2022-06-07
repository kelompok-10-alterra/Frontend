import React from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import TitleLogo from "../TitleLogo";
import NavItem from "../NavItem";

/** utils */
import { navItems } from "../../utils/navItems";

const Navbar = () => {
  const location = window.location.pathname.substring(1);
  const checkPath = (location) => {
    if (location === "add-membership" || location === "details-membership") {
      return "Membership";
    }
    if (location === "add-class" || location === "details-class") {
      return "Class";
    }
    if (location === "add-booking" || location === "details-booking") {
      return "Booking";
    }
  };

  return (
    <div className={styles.container}>
      <TitleLogo className={styles.logo} />
      {navItems.map((item) => {
        const temp = checkPath(location) === item.name;
        if (temp) {
          return (
            <NavItem
              key={item.id}
              logo={item.logo}
              name={item.name}
              link={item.link}
              active="active"
            />
          );
        } else {
          return (
            <NavItem
              key={item.id}
              logo={item.logo}
              name={item.name}
              link={item.link}
              active=""
            />
          );
        }
      })}
    </div>
  );
};

export default Navbar;
