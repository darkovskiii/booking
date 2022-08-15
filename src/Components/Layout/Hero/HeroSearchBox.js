import React, { useState } from "react";
import Card from "../../Card/Card";
import classes from "./HeroSearchBox.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import GuestInputs from "./SearchBoxComponents/GuestInputs";
import SearchBox from "./SearchBoxComponents/SearchBox";
// import DatePicker from "../../../Images/Icons/DatePicker";

const HeroSearchBox = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <Card className={classes.card}>
      <div className={classes.search}>
        <SearchBox />
        <div className={classes.dateInputs}>
          {/* <div className={classes.searchIcon}>
            <DatePicker />
          </div> */}
          <ReactDatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            monthsShown={2}
            minDate={new Date()}
            placeholderText="Check in - Check out"
            dateFormat=" MMM, E d "
          />

          {/* #TODO Add Icons to Date and Place */}
        </div>
        <GuestInputs />
        <Link to="/searchresults" className={classes.button}>
          Search
        </Link>
      </div>
    </Card>
  );
};

export default HeroSearchBox;
