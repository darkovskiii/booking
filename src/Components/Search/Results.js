import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classes from "./Results.module.css";
// import DummyData from "./Data/DummyData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LoadingSpinner from "../UI/LoadingSpinner";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const sortData = (data, params) => {
  return data.sort((dataA, dataB) => {
    if (params === "asc") {
      return dataA.props.price > dataB.props.price ? 1 : -1;
    } else if (params === "desc") {
      return dataA.props.price < dataB.props.price ? 1 : -1;
    } else if (params === "byreviews") {
      return dataA.props.rating < dataB.props.rating ? 1 : -1;
    } else if (params === "bylongstay") {
      return dataA.props.diffdate < dataB.props.diffdate ? 1 : -1;
    } else {
      return undefined;
    }
  });
};

const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(
    new Date(a).getFullYear(),
    new Date(a).getMonth(),
    new Date(a).getDate()
  );
  const utc2 = Date.UTC(
    new Date(b).getFullYear(),
    new Date(b).getMonth(),
    new Date(b).getDate()
  );
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const Results = () => {
  const history = useHistory();
  const location = useLocation();
  const [productsState, setProductsState] = useState();
  const [isAscending, setIsAscending] = useState(true);
  const [selectedSort, setSelectedSort] = useState("longstay");

  const queryParams = new URLSearchParams(location.search);

  const sortParams = queryParams.get("sort");

  const sortedData = productsState ? (
    sortData(productsState, sortParams)
  ) : (
    <LoadingSpinner />
  );
  // #TODO Fetch data on start, then sort
  const longStaySortHandler = () => {
    history.push("/searchresults?sort=bylongstay");
    setIsAscending(isAscending);
    setSelectedSort("longstay");
  };

  const priceSortHandler = () => {
    history.push("/searchresults?sort=" + (isAscending ? "desc" : "asc"));
    setIsAscending(!isAscending);
    setSelectedSort("price");
  };
  const reviewSortHandler = () => {
    history.push("/searchresults?sort=byreviews");
    setIsAscending(isAscending);
    setSelectedSort("review");
  };

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    fetch("http://fake-hotel-api.herokuapp.com/api/hotels")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.slice(0, 5).map((product) => {
          return (
            <li
              key={product.id}
              price={product.price}
              review={product.stars}
              rating={product.rating}
              diffdate={dateDiffInDays(product.date_start, product.date_end)}
            >
              <div className={classes.product}>
                <div className={classes.thumbnail}>
                  <a href="/#">
                    <img
                      src={`${product.images[0].replace(
                        "lorempixel",
                        "loremflickr"
                      )}`}
                      alt={`number ${product.id}`}
                    />
                  </a>
                </div>
                <div className={classes.description}>
                  <div className={classes.top}>
                    <div className={classes.title}>
                      <a href="/#">{product.name.toUpperCase()}</a>
                      <a href="/#">
                        {product.city},{product.country}
                      </a>
                      {/* <a href="/#">{product.date_start.slice(0, 10)}</a> */}
                      {/* <a href="/#">{product.date_end}</a> */}
                      <p>
                        {`
                          Available for
                          ${dateDiffInDays(
                            product.date_start,
                            product.date_end
                          )}
                          nights
                          `}
                      </p>
                    </div>
                    <div className={classes.rating}>
                      <a href="/#">{product.rating.toFixed(1)}</a>
                      <a href="/#">{product.stars}</a>
                    </div>
                  </div>
                  <div className={classes.bottom}>
                    <div className={classes.details}>{product.description}</div>
                    <div className={classes.prices}>
                      <div>${product.price}</div>
                      <div className={classes.click}>
                        <a href="/#">
                          <div className={classes.availability}>
                            <p>See availability</p>
                            <ChevronRightIcon />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        });
        // #TODO is it better slice after, or slice before .map
        setProductsState(newProductsState);
      });
  }, []);

  return (
    <div className={classes.results}>
      <span className={classes.unavailable}>
        91% of places to stay are unavailable for your dates on our site.
      </span>
      <ul className={classes.sort}>
        <li className={selectedSort === "longstay" ? classes.selected : ""}>
          <button onClick={longStaySortHandler}>
            Top Picks for long stays
          </button>
        </li>
        <li className={selectedSort === "review" ? classes.selected : ""}>
          <button onClick={reviewSortHandler}>Top reviewed</button>
        </li>
        <li className={selectedSort === "price" ? classes.selected : ""}>
          <button onClick={priceSortHandler}>
            Price in {isAscending ? "descending" : "ascending"}
          </button>
        </li>
        <li className={selectedSort === "reviewprice" ? classes.selected : ""}>
          <button>Best reviewed and lowest price</button>
        </li>
        <li>
          <button>
            <MoreHorizIcon sx={{ fontSize: 14 }} />
          </button>
        </li>
      </ul>
      <ul>{sortedData}</ul>
    </div>
  );
};

export default Results;
