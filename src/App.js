import React, { useState, useEffect } from "react";
// import TopHeader from "./Components/Layout/Header/TopHeader";
import Hero from "./Components/Layout/Hero/Hero";
import Header from "./Components/Layout/Header/Header";
import AuthContext from "./store/auth-context";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./Components/Search/SearchResults";
import ComingSoon from "./Components/Layout/Header/BotHeader Coming Soon/ComingSoon";
import ComingSoonContext from "./store/coming-soon-context";
import LanguageCurrencyContext from "./store/lang-currency-context";
import classes from "./Components/Data/LanguageData.module.css";

function App() {
  const [comingSoon, setComingSoon] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(
    <img
      src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png"
      alt="UK flag"
      className={classes.images}
    />
  );
  const [toggleLanguage, setToggleLanguage] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [toggleCurrency, setToggleCurrency] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setSignInModal(false);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const hideSignInHandler = () => {
    setSignInModal(false);
  };
  const showSignInHandler = () => {
    setSignInModal(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        signInModal: signInModal,
        logoutHandler: logoutHandler,
        loginHandler: loginHandler,
        hideSignInHandler: hideSignInHandler,
        showSignInHandler: showSignInHandler,
      }}
    >
      <LanguageCurrencyContext.Provider
        value={{
          selectedCurrency,
          setSelectedCurrency,
          toggleCurrency,
          setToggleCurrency,
          selectedLanguage,
          setSelectedLanguage,
          toggleLanguage,
          setToggleLanguage,
        }}
      >
        <ComingSoonContext.Provider
          value={{
            comingSoon,
            setComingSoon,
          }}
        >
          <div>
            <Switch>
              <Route path="/" exact>
                <Header />
                <Hero />
              </Route>
              <Route path="/searchresults">
                <Header />
                <SearchResults />
              </Route>
              <Route path={`/${comingSoon}`}>
                <ComingSoon />
              </Route>
            </Switch>
          </div>
        </ComingSoonContext.Provider>
      </LanguageCurrencyContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
