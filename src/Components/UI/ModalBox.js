import classes from "./ModalBox.module.css";
import Card from "../Card/Card";
import Button from "../Card/Button";
import CurrencyData from "../Data/CurrencyData";
import LanguageData from "../Data/LanguageData";
import ExitIcon from "../../Images/Icons/ExitIcon";

const ModalBox = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onModalHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>Select your currency</h3>
          <Button onClick={props.onModalHandler}>
            <ExitIcon />
          </Button>
        </header>
        {props.modalCurrencyData ? (
          <CurrencyData
            onClick={props.onModalHandler}
            onSelectedCurrency={props.onSelectedCurrency}
          />
        ) : (
          ""
        )}
        {props.modalLanguageData ? (
          <LanguageData
            onClick={props.onModalHandler}
            onSelectedLanguage={props.onSelectedLanguage}
          />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default ModalBox;
