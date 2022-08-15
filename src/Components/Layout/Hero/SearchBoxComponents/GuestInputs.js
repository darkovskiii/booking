import classes from "./GuestInputs.module.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "../../../../Images/Icons/PersonIcon";
import { useState } from "react";
import GuestBox from "./GuestBox";

const GuestInputs = () => {
  const [guestBoxClicked, setGuestBoxClicked] = useState(false);
  const [myAdults, setMyAdults] = useState(1);
  const [myChildren, setMyChildren] = useState(0);
  const [myRooms, setMyRooms] = useState(1);

  const guestBoxHandler = () => {
    if (!guestBoxClicked) {
      setGuestBoxClicked(true);
    } else {
      setGuestBoxClicked(false);
    }
  };

  const guestUpdateHandler = ({
    adultsNumber,
    childrenNumber,
    roomsNumber,
  }) => {
    setTimeout(() => {
      setMyAdults(adultsNumber);
      setMyChildren(childrenNumber);
      setMyRooms(roomsNumber);
    }, 0);
  };
  return (
    <div className={classes.guestInputs}>
      <a href="/#" onClick={guestBoxHandler}>
        <div className={classes.searchIcon}>
          <PersonIcon />
        </div>
        <p>{myAdults} adult ·</p>
        <p>{myChildren} children ·</p>
        <p>{myRooms} room</p>
        {/* #TODO Update with guestbox values */}
        <div className={classes.arrows}>
          <ArrowDropUpIcon />
          <ArrowDropDownIcon />
        </div>
      </a>
      {guestBoxClicked && (
        <GuestBox
          onGuestBox={guestUpdateHandler}
          className={classes.dataResult}
        />
      )}
    </div>
  );
};

export default GuestInputs;
