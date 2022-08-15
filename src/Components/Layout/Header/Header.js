import React from "react";
import TopHeader from "./TopHeader";
import BotHeader from "./BotHeader";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <TopHeader />
      <BotHeader />
    </div>
  );
};

export default Header;
