import classes from "./ModalBox.module.css";
import Card from "../Card/Card";
import Button from "../Card/Button";
import CurrencyData from "../Data/CurrencyData";
import LanguageData from "../Data/LanguageData";
import ExitIcon from "../../Images/Icons/ExitIcon";
import { useContext } from "react";
import LanguageCurrencyContext from "../../store/lang-currency-context";

const ModalBox = () => {
  const ctxLang = useContext(LanguageCurrencyContext);
  const ctxCurr = useContext(LanguageCurrencyContext);

  const closeModalHandler = () => {
    if (!ctxLang.toggleLanguage) {
      ctxLang.setToggleLanguage(true);
    } else if (!ctxCurr.toggleCurrency) {
      ctxLang.setToggleCurrency(true);
    }
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={closeModalHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>
            Select your {`${ctxCurr.toggleCurrency ? "language" : "currency"}`}
          </h3>
          <Button onClick={closeModalHandler}>
            <ExitIcon />
          </Button>
        </header>
        {!ctxCurr.toggleCurrency && <CurrencyData />}
        {!ctxLang.toggleLanguage && <LanguageData />}
      </Card>
    </div>
  );
};

export default ModalBox;
