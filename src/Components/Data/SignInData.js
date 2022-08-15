import FacebookIcon from "../../Images/Icons/FacebookIcon";
import GoogleIcon from "../../Images/Icons/GoogleIcon";
import MobileIcon from "../../Images/Icons/MobileIcon";
import LoginBox from "../UI/LoginBox";
import classes from "./SignInData.module.css";

const SignInData = () => {
  return (
    <div className={classes.container}>
      <h2>Sign in or create an account</h2>
      <LoginBox />
      <p className={classes.textline}>
        <span>or use one of these options</span>
      </p>
      <div className={classes.icons}>
        <a href="/#">
          <FacebookIcon />
        </a>
        <a href="/#">
          <GoogleIcon />
        </a>
        <a href="/#">
          <MobileIcon />
        </a>
      </div>
      <div className={classes.more}>
        <a href="/#">More ways to sign in</a>
      </div>
      <p className={classes.textline}></p>
      <div className={classes.footer}>
        <p>
          By signing in or creating an account, you agree with our Terms &
          conditions and Privacy statement
        </p>
        <p className={classes.textline}></p>
        <p>
          All rights reserved.
          <br />
          Copyright (2006 - 2022) - Booking.com™
        </p>
      </div>
    </div>
  );
};

export default SignInData;
