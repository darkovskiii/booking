import Card from "../../Card/Card";
import { Link } from "react-router-dom";
import classes from "./BotHeader.module.css";
import StayIcon from "./Header Icons/StaysIcon";
import Flights from "./Header Icons/Flights";
import CarRentals from "./Header Icons/CarRentals";
import Attractions from "./Header Icons/Attractions";
import AirportTaxis from "./Header Icons/AirportTaxis";
import { useContext } from "react";
import ComingSoonContext from "../../../store/coming-soon-context";

const BotHeader = () => {
  const ctx = useContext(ComingSoonContext);

  const onClickHandler = (event) => {
    ctx.setComingSoon(event.target.innerText);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.wrapper}>
        <Link to="/">
          <div className={classes.stays}>
            <StayIcon />
            <span>Stays</span>
          </div>
        </Link>
        <Link to="/flights" onClick={onClickHandler}>
          <div className={classes.flights}>
            <Flights />
            <span>Flights</span>
          </div>
        </Link>
        <Link to="/car-rentals" onClick={onClickHandler}>
          <div className={classes.carrentals}>
            <CarRentals />
            <span>Car-Rentals</span>
          </div>
        </Link>
        <Link to="/attractions" onClick={onClickHandler}>
          <div className={classes.flights}>
            <Attractions />
            <span>Attractions</span>
          </div>
        </Link>
        <Link to="/airport-taxis" onClick={onClickHandler}>
          <div className={classes.carrentals}>
            <AirportTaxis />
            <span>Airport-taxis</span>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default BotHeader;
