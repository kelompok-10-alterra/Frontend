import React from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import TitleLogo from "../TitleLogo";
import NavItem from "../NavItem";

/** utils */
import { navItems } from "../../utils/navItems";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <TitleLogo className={styles.logo} />
      {navItems.map((items) => {
        return (
          <NavItem
            key={items.id}
            logo={items.logo}
            name={items.name}
            link={items.link}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
