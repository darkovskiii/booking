import { Card } from "@mui/material";
import classes from "./GuestBox.module.css";
import { useState } from "react";

const GuestBox = (props) => {
  const [adultsNumber, setAdultsNumber] = useState(1);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [roomsNumber, setRoomsNumber] = useState(1);

  const increaseAdults = () => {
    setAdultsNumber(parseInt(adultsNumber) + 1);
  };
  const decreaseAdults = () => {
    if (adultsNumber !== 1) {
      setAdultsNumber(parseInt(adultsNumber) - 1);
    } else return;
  };
  const increaseChildren = () => {
    setChildrenNumber(parseInt(childrenNumber) + 1);
  };
  const decreaseChildren = () => {
    if (childrenNumber !== 0) {
      setChildrenNumber(parseInt(childrenNumber) - 1);
    } else return;
  };
  const increaseRooms = () => {
    setRoomsNumber(parseInt(roomsNumber) + 1);
  };
  const decreaseRooms = () => {
    if (roomsNumber !== 1) {
      setRoomsNumber(parseInt(roomsNumber) - 1);
    } else return;
  };

  props.onGuestBox({ adultsNumber, childrenNumber, roomsNumber });

  return (
    <Card>
      <div className={classes.wrapper}>
        <div className={classes.adultsField}>
          <p>Adults</p>
          <div className={classes.stepper}>
            <button
              className={classes.button}
              disabled={adultsNumber === 1}
              onClick={decreaseAdults}
            >
              -
            </button>
            <p>{adultsNumber}</p>
            <button className={classes.button} onClick={increaseAdults}>
              +
            </button>
          </div>
        </div>

        <div className={classes.adultsField}>
          <p>Children</p>
          <div className={classes.stepper}>
            <button
              className={classes.button}
              disabled={childrenNumber === 0}
              onClick={decreaseChildren}
            >
              -
            </button>
            <p>{childrenNumber}</p>
            <button className={classes.button} onClick={increaseChildren}>
              +
            </button>
          </div>
        </div>

        <div className={classes.adultsField}>
          <p>Rooms</p>
          <div className={classes.stepper}>
            <button
              className={classes.button}
              disabled={roomsNumber === 1}
              onClick={decreaseRooms}
            >
              -
            </button>
            <p>{roomsNumber}</p>
            <button className={classes.button} onClick={increaseRooms}>
              +
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GuestBox;
