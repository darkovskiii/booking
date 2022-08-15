import { Card } from "@mui/material";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.box}>
        <div className={classes.spinner}></div>
        <h3>Book now, pay when you stay!</h3>
        <p>With FREE cancelation on most rooms</p>
      </div>
    </Card>
  );
};

export default LoadingSpinner;
