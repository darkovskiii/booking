import React from "react";
import HeroBanner from "./HeroBanner";
import HeroSearchBox from "./HeroSearchBox";
// import PlaceList from "./Items List/PlaceList";
import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <div className={classes.wrapper}>
      <HeroBanner />
      <HeroSearchBox />
    </div>
  );
};

export default Hero;
