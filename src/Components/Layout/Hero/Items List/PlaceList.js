import React from "react";
import Card from "../../../Card/Card";
import classes from "./PlaceList.module.css";

const PlaceList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.places.map((place) => (
          <li key={place.id}>{place.location} is great place to stay</li>
        ))}
      </ul>
    </Card>
  );
};

export default PlaceList;
