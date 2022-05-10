import classes from "./LanguageData.module.css";

const LanguageData = (props) => {
  return (
    <div className={classes.content}>
      <h4>Suggested for you</h4>
      <div className={classes.languages}>
        <a onClick={props.onClick} className={classes.anchor}>
          <img
            src="
https://t-cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png
"
            alt="UK flag"
          />
          <span>English (US)</span>
        </a>
        <a onClick={props.onClick} className={classes.anchor}>
          <img
            src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
            alt="USA flag"
          />
          <span>English (UK)</span>
        </a>
        <a onClick={props.onClick} className={classes.anchor}>
          <img
            src="
  https://t-cf.bstatic.com/static/img/flags/new/48-squared/hr/e7a46f4dad977aecafa6a3680972e0c137a1bc41.png"
            alt="Croatian flag"
          />
          <span>Hrvatski</span>
        </a>
        <a
          onClick={props.onClick}
          /* #TODO checking if props.onClick will shut the modal box*/
          className={classes.anchor}
        >
          <img
            src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/ru/2277320023a64803843c36ca6aa48ad77523dd0d.png"
            alt="Russian flag"
          />
          <span>Рускии</span>
        </a>
      </div>
    </div>
  );
};
export default LanguageData;
