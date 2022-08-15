import classes from "./Search.module.css";
import { Checkbox } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import GuestInputs from "../Layout/Hero/SearchBoxComponents/GuestInputs";
import SearchBox from "../Layout/Hero/SearchBoxComponents/SearchBox";

const Search = () => {
  // const destinationRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  // const [enteredDestination, setEnteredDestination] = useState();
  // const [destinationsList, setDestinationsList] = useState();

  // useEffect(() => {
  //   fetch("http://fake-hotel-api.herokuapp.com/api/hotels")
  //     .then((res) => res.json())
  //     .then((destinationsArray) => {
  //       const newDestinationsArray = destinationsArray
  //         .slice(0, 5)
  //         // .filter((dest) => dest.includes(enteredDestination))
  //         .map((destination) => {
  //           return (
  //             <li key={destination.id}>
  //               {destination.city},{destination.country}
  //             </li>
  //           );
  //         });
  //       setDestinationsList(newDestinationsArray);
  //     });
  // }, []);

  // const filteredDestinations =
  //   destinationsList.filter((dest) => dest.includes(enteredDestination)) ||
  //   console.log(destinationsList);

  // const inputPlaceHandler = (event) => {
  //   setEnteredDestination(event.target.value);
  // };

  return (
    <div className={classes.wrapper}>
      <div className={classes.search}>
        <h4>Search</h4>
        <div
        // className={classes.inputplace}
        >
          <SearchBox />
          {/* <label>Destination/property name:</label>
          <input
            placeholder="Where are you going?"
            onChange={inputPlaceHandler}
            ref={destinationRef}
          />
          <p>{destinationsList}</p> */}
        </div>
        <div className={classes.datepicker}>
          <label>Check-in date</label>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className={classes.guests}>
          <GuestInputs />
          {/* #TODO GuestInputs redirects back to homepage, fix this */}
        </div>
        <div className={classes.checkbox}>
          <div className={classes.checkboxtop}>
            <label>
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} />
              <p>Entire homes & apartments</p>
            </label>
            <span>
              <HelpOutlineIcon fontSize="10px" />
            </span>
          </div>
          <div className={classes.checkboxbot}>
            <label>
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} />
              <p>I'm travelling for work</p>
            </label>
            <span>
              <HelpOutlineIcon fontSize="10px" />
            </span>
          </div>
        </div>
        <button>Search</button>
      </div>
      <div className={classes.filter}></div>
    </div>
  );
};

export default Search;
