import React, { useState, useRef, useEffect } from "react";
// import classes from "../HeroSearchBox.module.css";
import classes from "./SearchBox.module.css";
import CitiesList from "../CitiesList";

const SearchBox = () => {
  const inputRef = useRef();
  const [enteredPlace, setEnteredPlace] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      setIsTyping(true);
    });

    document.addEventListener("click", (event) => {
      setIsTyping(false);
    });
  }, []);

  const inputPlaceHandler = (event) => {
    setEnteredPlace(event.target.value);
    if (event.target.value.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const citiesList = CitiesList.filter((city) =>
    city.toLowerCase().includes(enteredPlace.toLowerCase())
  ).map((city, index) => (
    <a
      className={classes.dataItem}
      onClick={() => {
        inputRef.current.value = city;
        setIsTyping(false);
      }}
      key={index}
      href="/#"
    >
      <p>{city}</p>
    </a>
  ));

  return (
    <div className={classes.searchInputs}>
      <input
        placeholder="Where are you going?"
        onChange={inputPlaceHandler}
        ref={inputRef}
      />
      {/* <div className={classes.searchIcon}>
    <PersonIcon />
  </div> */}
      {isTyping && <div className={classes.dataResult}>{citiesList}</div>}
    </div>
  );
};

export default SearchBox;
