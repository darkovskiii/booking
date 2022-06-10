import Card from "../Card/Card";
import SignInData from "../Data/SignInData";
import classes from "./SignInModal.module.css";
import Button from "../Card/Button";
import ExitIcon from "../../Images/Icons/ExitIcon";

const SignInModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onModalHandler}></div>
      <Card className={classes.modal}>
        <Button onClick={props.onModalHandler} className={classes.button}>
          <ExitIcon />
        </Button>
        <SignInData />
      </Card>
    </div>
  );
};

export default SignInModal;
