import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import Tags from "./Tags";
import "./SearchBar.css";

const SearchBar = () => {
  const { sorts, onClearSorts } = useContext(SortContext);
  let inactiveState = sorts.length === 0 ? "inactive" : "";
  return (
    <div className="filterBarContainer">
      <div className={`filterBar ${inactiveState}`}>
        <div className="filterTags">
          {sorts.map((d, index) => (
            <Tags key={index} sort={d} />
          ))}
        </div>
        <div className="clearTags">
          <div onClick={() => onClearSorts()}>{"Clear"}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
