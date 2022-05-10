import { Children } from "react/cjs/react.production.min";
import classes from "./CurrencyData.module.css";

const CurrencyData = (props) => {
  // const alertHandler = (e) => {
  //   console.log(e.target.textContent);
  // };
  return (
    <div className={classes.content}>
      <h4>Suggested for you</h4>
      <div className={classes.currencies}>
        <a
          // onClick={alertHandler}
          /* #TODO onClick should close the modal and update the CURRENCY with the clicked one*/
          onClick={props.onClick}
          /* #TODO checking if props.onClick will shut the modal box*/
          className={classes.anchor}
        >
          <span>Macedonian denar</span>
          <span>MKD</span>
        </a>
        <a
          // onClick={alertHandler}
          onClick={props.onClick}
          className={classes.anchor}
        >
          <span>U.S.dollar</span>
          <span>USD</span>
        </a>
        <a
          // onClick={alertHandler}
          onClick={props.onClick}
          className={classes.anchor}
        >
          <span>Australian dollar</span>
          <span>AUD</span>
        </a>
        <a
          // onClick={alertHandler}
          onClick={props.onClick}
          className={classes.anchor}
        >
          <span>Euro</span>
          <span>EUR</span>
        </a>
      </div>
    </div>
  );
};
export default CurrencyData;
