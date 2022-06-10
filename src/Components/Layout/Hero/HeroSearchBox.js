import React, { useState } from "react";
import Card from "../../Card/Card";
import classes from "./HeroSearchBox.module.css";
import ExitIcon from "../../../Images/Icons/ExitIcon";
import DatePicker from "../../../Images/Icons/DatePicker";
import PlacePicker from "../../../Images/Icons/PlacePicker";
import Button from "../../Card/Button";
import PersonIcon from "../../../Images/Icons/PersonIcon";

const HeroSearchBox = (props) => {
  const [enteredPlace, setEnteredPlace] = useState("");

  const addLocationHandler = (event) => {
    event.preventDefault();
    if (enteredPlace.trim().length === 0) {
      return;
    }
    props.onAddLocation(enteredPlace);
    setEnteredPlace("");
  };

  const locationHandler = (event) => {
    setEnteredPlace(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={addLocationHandler} className={classes.form}>
        <label className={classes.longlabel}>
          <div className={classes.backitems}>
            <PlacePicker />
            <span>Where are you going?</span>
            {/* <ExitIcon /> #TODO when selected location X button appears  */}
          </div>
          <input
            className={classes.longinput}
            value={enteredPlace}
            onChange={locationHandler}
          />
        </label>
        <label className={classes.shortlabel}>
          <div className={classes.backitems}>
            <DatePicker />
          </div>
          <input className={classes.shortinput} />
        </label>
        <label className={classes.middlelabel}>
          <div className={classes.backitems}>
            <PersonIcon />
          </div>
          <input className={classes.middleinput} />
        </label>
        <Button type="submit" className={classes.button}>
          Add place
        </Button>
      </form>
    </Card>
  );
};

export default HeroSearchBox;
