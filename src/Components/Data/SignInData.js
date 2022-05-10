import FacebookIcon from "../../Images/Icons/FacebookIcon";
import GoogleIcon from "../../Images/Icons/GoogleIcon";
import MobileIcon from "../../Images/Icons/MobileIcon";
import classes from "./SignInData.module.css";

const SignInData = () => {
  return (
    <div className={classes.container}>
      <h2>Sign in or create an account</h2>
      <div className={classes.sign}>
        <h5>Email address</h5>
        <input className={classes.action} />
        <button className={classes.button}>Continue with email</button>
      </div>
      <p className={classes.textline}>
        <span>or use one of these options</span>
      </p>
      <div className={classes.icons}>
        <a>
          <FacebookIcon />
        </a>
        <a>
          <GoogleIcon />
        </a>
        <a>
          <MobileIcon />
        </a>
      </div>
      <div className={classes.more}>
        <a>More ways to sign in</a>
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
