import React, { useState, useEffect } from "react";
import TopHeader from "./Components/Layout/Header/TopHeader";
import Hero from "./Components/Layout/Hero/Hero";
// import Header from "./Components/Layout/Header/Header";
import AuthContext from "./store/auth-context";

function App() {
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
      <div>
        {/* <Header /> */}
        <TopHeader />
        <Hero />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
