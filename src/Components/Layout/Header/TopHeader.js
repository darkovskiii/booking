import React, { useState, useContext } from "react";
import LongBlueHeaderButton from "./Header Buttons/LongBlueHeaderButton";
import LongHeaderButton from "./Header Buttons/LongHeaderButton";
import SmallHeaderButton from "./Header Buttons/SmallHeaderButton";
import ModalBox from "../../UI/ModalBox";
import classes from "./TopHeader.module.css";
import QuestionMarkIcon from "../../../Images/Icons/QuestionMarkIcon";
import NotificationIcon from "../../../Images/Icons/NotificationIcon";
import SignInModal from "../../UI/SignInModal";
import AuthContext from "../../../store/auth-context";
import BookingLogo from "./Header Icons/BookingLogo";
import LanguageCurrencyContext from "../../../store/lang-currency-context";

const TopHeader = (props) => {
  const ctx = useContext(AuthContext);
  const ctxLang = useContext(LanguageCurrencyContext);
  const ctxCurr = useContext(LanguageCurrencyContext);
  const [customerService, setCustomerService] = useState(false);

  const customerServiceHandler = () => {
    setCustomerService(true);
    console.log(customerService);
  };
  const toggleLanguage = () => {
    ctxLang.setToggleLanguage(false);
  };
  const toggleCurrency = () => {
    ctxCurr.setToggleCurrency(false);
  };

  return (
    <div className={classes.wrapper}>
      {!ctxCurr.toggleCurrency && <ModalBox />}
      {!ctxLang.toggleLanguage && <ModalBox />}
      {!ctx.isLoggedIn && ctx.signInModal && (
        <SignInModal onModalHandler={ctx.hideSignInHandler} />
      )}
      <div className={classes.header}>
        <div className={classes["header-text"]}>
          <BookingLogo />
        </div>
        <div className={classes.button}>
          <SmallHeaderButton
            onClick={toggleCurrency}
            tooltipText="Choose your currency"
          >
            {ctxCurr.selectedCurrency}
          </SmallHeaderButton>
          <SmallHeaderButton
            onClick={toggleLanguage}
            tooltipText="Choose your language"
          >
            {ctxLang.selectedLanguage}
          </SmallHeaderButton>
          <SmallHeaderButton tooltipText="Contact Customer Service">
            <QuestionMarkIcon />
          </SmallHeaderButton>
          {ctx.isLoggedIn && (
            <SmallHeaderButton tooltipText="View your notifications">
              <NotificationIcon />
            </SmallHeaderButton>
          )}
          <LongBlueHeaderButton onClick={customerServiceHandler}>
            List your property
          </LongBlueHeaderButton>
          {/* <LongHeaderButton id="container">List your property</LongHeaderButton> //TODO1 merge LongHeaderButton and LongBlueHeaderButton */}
          {!ctx.isLoggedIn && (
            <LongHeaderButton onClick={ctx.showSignInHandler}>
              Register
            </LongHeaderButton>
          )}
          {!ctx.isLoggedIn && (
            <LongHeaderButton onClick={ctx.showSignInHandler}>
              Sign in
            </LongHeaderButton>
          )}
          {ctx.isLoggedIn && (
            <LongHeaderButton onClick={ctx.logoutHandler}>
              Darko Todorovski
            </LongHeaderButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
