import React from "react";

const LanguageCurrencyContext = React.createContext({
  selectedCurrency: "",
  setSelectedCurrency: () => {},
  toggleCurrency: "",
  setToggleCurrency: () => {},
  selectedLanguage: "",
  setSelectedLanguage: () => {},
  toggleLanguage: "",
  setToggleLanguage: () => {},
});

export default LanguageCurrencyContext;
