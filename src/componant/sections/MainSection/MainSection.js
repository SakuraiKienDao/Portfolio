import React from "react";

import classes from "./Styles/MainSection.module.css";
import NavBar from "./NavBar";
import MainText from "./Maintext";


const MainSection = (props) => {
  return (
    <>
      <div className={classes.section}>
        <NavBar />
        <MainText />
      </div>
    </>
  );
};

export default MainSection;
