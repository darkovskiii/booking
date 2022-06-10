import React, { useState, useEffect, useContext } from "react";
import classes from "./HeroBanner.module.css";
import Button from "../../Card/Button";
import SignInModal from "../../UI/SignInModal";
import AuthContext from "../../../store/auth-context";

const HeroBanner = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.banner}>
      {!ctx.isLoggedIn && ctx.signInModal && (
        <SignInModal onModalHandler={ctx.hideSignInHandler} />
      )}
      <div className={classes.wrapper}>
        {!ctx.isLoggedIn ? (
          <h1>A lifetime of discounts? It's Genius.</h1>
        ) : (
          <h1>Stay more, save more. It’s Genius.</h1>
        )}
        {!ctx.isLoggedIn ? (
          <p id={classes.herotext}>
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Booking.com account
          </p>
        ) : (
          <p id={classes.herotext}>
            Enjoy discounts and travel rewards at hundreds of thousands of
            properties worldwide
          </p>
        )}

        {!ctx.isLoggedIn && (
          <Button className={classes.button} onClick={ctx.showSignInHandler}>
            Sign in / Register
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
