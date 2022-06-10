import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import HeroSearchBox from "./HeroSearchBox";
import PlaceList from "./Items List/PlaceList";
import classes from "./Hero.module.css";

const Hero = (props) => {
  const [placesList, setPlacesList] = useState([]);

  const addLocationHandler = (uPlace) => {
    setPlacesList((prevLocations) => {
      return [
        ...prevLocations,
        { location: uPlace, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className={classes.wrapper}>
      <HeroBanner loginHandler={props.loginHandler} />
      <HeroSearchBox onAddLocation={addLocationHandler} />
      <PlaceList places={placesList} />
    </div>
  );
};

export default Hero;
