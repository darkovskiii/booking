import classes from "./SmallHeaderButton.module.css";

const SmallHeaderButton = (props) => {
  // let linkSource =
  //   "https://secure.booking.com/help.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaJMBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKe4buTBsACAdICJGM0MDZhNDljLTExNzktNDY0OC1iMzBkLTJhZDgxZWIxMTNiZdgCBOACAQ&sid=71127cc56a96168e2f673ec072f35344#/";

  return (
    // <a href={props.onClick ? "/#" : linkSource}>
    <div className={classes.tooltip}>
      <span className={classes.tooltiptext}>{props.tooltipText}</span>
      <button className={classes.button} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
    // </a>
  );
};

export default SmallHeaderButton;
