import classes from "./CurrencyData.module.css";

const CurrencyData = (props) => {
  const selectedCurrencyHandler = (event) => {
    props.onSelectedCurrency(event.target.textContent);
  };
  return (
    <div className={classes.content}>
      <h4>Suggested for you</h4>
      <div className={classes.currencies}>
        <a onClick={props.onClick} className={classes.anchor}>
          <span>Macedonian denar</span>
          <span onClick={selectedCurrencyHandler}>MKD</span>
        </a>
        <a onClick={props.onClick} className={classes.anchor}>
          <span>U.S.dollar</span>
          <span onClick={selectedCurrencyHandler}>USD</span>
        </a>
        <a onClick={props.onClick} className={classes.anchor}>
          <span>Australian dollar</span>
          <span onClick={selectedCurrencyHandler}>AUD</span>
        </a>
        <a onClick={props.onClick} className={classes.anchor}>
          <span>Euro</span>
          <span onClick={selectedCurrencyHandler}>EUR</span>
        </a>
      </div>
    </div>
  );
};
export default CurrencyData;
