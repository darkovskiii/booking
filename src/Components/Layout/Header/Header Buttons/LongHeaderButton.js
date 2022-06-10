import classes from "./LongHeaderButton.module.css";

const LongHeaderButton = (props) => {
  // const container = document.getElementById("container");
  // if (container === "List your property") {
  //   return <button className={classes["button-blue"]}>{props.children}</button>;
  // } else {
  // } //TODO merge LongHeaderButton and LongBlueHeaderButton
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default LongHeaderButton;
