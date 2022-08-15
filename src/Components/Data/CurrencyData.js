import classes from "./CurrencyData.module.css";
import { useContext } from "react";
import LanguageCurrencyContext from "../../store/lang-currency-context";

const CurrencyData = () => {
  const ctxCurr = useContext(LanguageCurrencyContext);

  const currencyClickHandler = (event) => {
    ctxCurr.setSelectedCurrency(event.target.innerText);
    ctxCurr.setToggleCurrency(true);
  };
  return (
    <div className={classes.content}>
      <h4>Suggested for you</h4>
      <div className={classes.currencies}>
        <a href="/#" onClick={currencyClickHandler} className={classes.anchor}>
          <span>Macedonian denar</span>
          <span>MKD</span>
        </a>
        <a href="/#" onClick={currencyClickHandler} className={classes.anchor}>
          <span>U.S.dollar</span>
          <span>USD</span>
        </a>
        <a href="/#" onClick={currencyClickHandler} className={classes.anchor}>
          <span>Australian dollar</span>
          <span>AUD</span>
        </a>
        <a href="/#" onClick={currencyClickHandler} className={classes.anchor}>
          <span>Euro</span>
          <span>EUR</span>
        </a>
      </div>
    </div>
  );
};
export default CurrencyData;
