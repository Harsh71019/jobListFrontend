import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import "./SearchTagFilter.css";

const SearchTagFilter = ({ jobFilter }) => {
  const { sorts, onAddSort } = useContext(SortContext);
  const onClickJobFilter = () => {
    onAddSort(jobFilter);
  };
  return (
    <div
      className={`jobFilterButton ${
        sorts.indexOf(jobFilter) >= 0 ? "selected" : ""
      }`}
      onClick={onClickJobFilter}
    >
      {jobFilter}
    </div>
  );
};

export default SearchTagFilter;
