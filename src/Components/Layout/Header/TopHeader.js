import React, { useState, useEffect, useContext } from "react";
import LongBlueHeaderButton from "./Header Buttons/LongBlueHeaderButton";
import LongHeaderButton from "./Header Buttons/LongHeaderButton";
import SmallHeaderButton from "./Header Buttons/SmallHeaderButton";
import ModalBox from "../../UI/ModalBox";
import classes from "./TopHeader.module.css";
import QuestionMarkIcon from "../../../Images/Icons/QuestionMarkIcon";
import NotificationIcon from "../../../Images/Icons/NotificationIcon";
import SignInModal from "../../UI/SignInModal";
import AuthContext from "../../../store/auth-context";

const TopHeader = (props) => {
  const ctx = useContext(AuthContext);
  const [showModalCurrency, setShowModalCurrency] = useState(false);
  const [showModalLanguage, setShowModalLanguage] = useState(false);
  const [customerService, setCustomerService] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const hideModalHandler = () => {
    setShowModalCurrency(false);
    setShowModalLanguage(false);
  };
  const showModalHandlerCurrency = () => {
    setShowModalCurrency(true);
  };
  const showModalHandlerLanguage = () => {
    setShowModalLanguage(true);
  };
  const customerServiceHandler = () => {
    setCustomerService(true);
  };
  const selectedCurrencyHandler = (currency) => {
    setSelectedCurrency(currency);
  };
  const selectedLanguageHandler = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div className={classes.wrapper}>
      {showModalCurrency && (
        <ModalBox
          onSelectedCurrency={selectedCurrencyHandler}
          onModalHandler={hideModalHandler}
          modalCurrencyData={showModalCurrency}
        />
      )}
      {showModalLanguage && (
        <ModalBox
          onSelectedLanguage={selectedLanguageHandler}
          onModalHandler={hideModalHandler}
          modalLanguageData={showModalLanguage}
        />
      )}
      {!ctx.isLoggedIn && ctx.signInModal && (
        <SignInModal onModalHandler={ctx.hideSignInHandler} />
      )}
      <div className={classes.header}>
        <div className={classes["header-text"]}>
          <h2>Booking.com</h2>
        </div>
        <div className={classes.button}>
          <SmallHeaderButton
            onClick={showModalHandlerCurrency}
            tooltipText="Choose your currency"
          >
            {selectedCurrency}
          </SmallHeaderButton>
          <SmallHeaderButton
            onClick={showModalHandlerLanguage}
            tooltipText="Choose your language"
          >
            {selectedLanguage}
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
