import React from "react";
import style from "./style.module.css";
import TitleLogo from "../TitleLogo";
import NavItem from "../NavItem";
import { navItems } from "../../utils/navItems";
function Navbar() {
  return (
    <div className={style.container}>
      <TitleLogo className={style.logo} />
      {navItems.map((i) => {
        return <NavItem key={i.id} logo={i.logo} name={i.name} link={i.link} />;
      })}
    </div>
  );
}

export default Navbar;
