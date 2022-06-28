import React from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import TitleLogo from "../TitleLogo";
import NavItem from "../NavItem";

/** utils */
import { navItems } from "../../utils/navItems";

const Navbar = ({ withMember }) => {
  return (
    <div className={styles.container}>
      <TitleLogo className={styles.logo} />
      {withMember
        ? navItems.map((item) => {
            return (
              <NavItem
                id={item.id}
                logo={item.logo}
                name={item.name}
                link={item.link}
              />
            );
          })
        : navItems.map((item) => {
            return (
              <>
                {item.name !== "Manage Admin" ? (
                  <NavItem
                    id={item.id}
                    logo={item.logo}
                    name={item.name}
                    link={item.link}
                  />
                ) : (
                  ""
                )}
              </>
            );
          })}
    </div>
  );
};

export default Navbar;
