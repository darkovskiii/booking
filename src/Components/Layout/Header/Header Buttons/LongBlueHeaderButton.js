import React from "react";
import classes from "./LongBlueHeaderButton.module.css";

const LongBlueHeaderButton = (props) => {
  let linkSource =
    "https://join.booking.com/?lang=en-gb&utm_source=topbar&utm_medium=frontend&amp;label=gen173nr-1DCAEoggI46AdIM1gEaJMBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKe4buTBsACAdICJGM0MDZhNDljLTExNzktNDY0OC1iMzBkLTJhZDgxZWIxMTNiZdgCBOACAQ&amp;aid=304142";

  return (
    <a href={linkSource}>
      <button className={classes.button}>{props.children}</button>
    </a>
  );
};

export default LongBlueHeaderButton;
