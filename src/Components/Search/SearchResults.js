import Card from "../Card/Card";
import Search from "./Search";
import Results from "./Results";
import classes from "./SearchResults.module.css";

const SearchResults = () => {
  return (
    <Card>
      <div>Breadcrumbs</div>
      <div className={classes.main}>
        <Search className={classes.search} />
        <Results className={classes.results} />
      </div>
    </Card>
  );
};

export default SearchResults;
