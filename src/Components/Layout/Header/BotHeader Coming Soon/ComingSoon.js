import { Link } from "react-router-dom";
import LongHeaderButton from "../Header Buttons/LongHeaderButton";
import classes from "./ComingSoon.module.css";
import BookingLogo from "../Header Icons/BookingLogo";
import { useContext } from "react";
import ComingSoonContext from "../../../../store/coming-soon-context";

const ComingSoon = () => {
  const ctx = useContext(ComingSoonContext);
  const homepageHandler = () => {
    ctx.setComingSoon();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <BookingLogo />
      </div>
      <h1>Enjoy {ctx.comingSoon.toUpperCase()} with Booking.com</h1>
      <h2>Coming soon...</h2>
      <Link to="/" onClick={homepageHandler}>
        <LongHeaderButton>Back to homepage</LongHeaderButton>
      </Link>
    </div>
  );
};

export default ComingSoon;
