import React, { useContext } from "react";
import classes from "./HeroBanner.module.css";
// import Button from "../../Card/Button";
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
          <h1>Find your next stay</h1>
        ) : (
          <h1>Stay more, save more. It’s Genius.</h1>
        )}
        {!ctx.isLoggedIn ? (
          <p id={classes.herotext}>
            Search deals on hotels, homes, and much more...
          </p>
        ) : (
          <p id={classes.herotext}>
            Enjoy discounts and travel rewards at hundreds of thousands of
            properties worldwide
          </p>
        )}

        {/* {!ctx.isLoggedIn && (
          <Button className={classes.button} onClick={ctx.showSignInHandler}>
            Sign in / Register
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default HeroBanner;
