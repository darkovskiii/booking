import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./LoginBox.module.css";

const LoginBox = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length >= 3
    );
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length >= 3
      // #TODO1 koga se brise karakter od email ili pass pak da pravi DISABLE
    );
  };
  const submitHandler = (event) => {
    event.preventDefault();
    ctx.loginHandler(enteredEmail, enteredPassword);
  };

  return (
    <div className={classes.sign}>
      <h5>Email address</h5>
      <input
        type="email"
        className={classes.action}
        value={enteredEmail}
        onChange={emailChangeHandler}
      />
      <input
        type="password"
        className={classes.action}
        value={enteredPassword}
        onChange={passwordChangeHandler}
      />
      <button
        onClick={submitHandler}
        className={classes.button}
        disabled={!formIsValid}
      >
        Continue with email
      </button>
    </div>
  );
};

export default LoginBox;
