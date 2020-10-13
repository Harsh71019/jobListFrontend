import React from "react";
import "./SearchTagFilter.css";

const SearchTagFilter = ({ jobFilter }) => {
  return <div className={`jobFilterButton `}>{jobFilter}</div>;
};

export default SearchTagFilter;
