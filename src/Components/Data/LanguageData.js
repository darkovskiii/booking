import { useContext } from "react";
import classes from "./LanguageData.module.css";
import LanguageCurrencyContext from "../../store/lang-currency-context";

const LanguageData = () => {
  const ctxLang = useContext(LanguageCurrencyContext);

  const flagClickHandler = (event) => {
    ctxLang.setSelectedLanguage(
      <img
        src={event.target.firstChild.src}
        alt="Flag"
        className={classes.images}
      />
    );
    ctxLang.setToggleLanguage(true);
  };
  return (
    <div className={classes.content}>
      <h4>Suggested for you</h4>
      <div className={classes.languages}>
        <a href="/#" onClick={flagClickHandler} className={classes.anchor}>
          <img
            src="
            https://t-cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png
            "
            alt="UK flag"
            className={classes.images}
          />

          <span>English (UK)</span>
        </a>
        <a href="/#" onClick={flagClickHandler} className={classes.anchor}>
          <img
            src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
            alt="USA flag"
            className={classes.images}
          />
          <span>English (US)</span>
        </a>
        <a href="/#" onClick={flagClickHandler} className={classes.anchor}>
          <img
            src="
  https://t-cf.bstatic.com/static/img/flags/new/48-squared/hr/e7a46f4dad977aecafa6a3680972e0c137a1bc41.png"
            alt="Croatian flag"
            className={classes.images}
          />
          <span>Hrvatski</span>
        </a>
        <a href="/#" onClick={flagClickHandler} className={classes.anchor}>
          <img
            src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/ru/2277320023a64803843c36ca6aa48ad77523dd0d.png"
            alt="Russian flag"
            className={classes.images}
          />
          <span>Рускии</span>
        </a>
      </div>
    </div>
  );
};
export default LanguageData;
