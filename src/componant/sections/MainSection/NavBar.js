import React from "react";

import MainLogo from "../../UI/NavLi/MainLogo";
import Home from "../../UI/NavLi/Home";
import About from "../../UI/NavLi/About";
import Work from "../../UI/NavLi/Work";
import Contact from "../../UI/NavLi/Contact";
import classes from "./Styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.wrap}>
    <div className={classes.navBar}>
      <MainLogo  className={classes.mainLogo}/>
      <div className={classes.li}>
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
    </div>

  );
};

export default NavBar;
