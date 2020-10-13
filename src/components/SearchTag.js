import React from "react";
import SearchTagFilter from "./SearchTagFilter";
import "./SearchTag.css"

function SearchTag  ({ jobs: { role, level, languages, tools } }) {
  let jobFilters = [role, level, ...(languages || []), ...(tools || [])];

  return (
    <div className="jobFilterSectionContainer">
      {jobFilters.map((d, index) => (
        <SearchTagFilter key={index} jobFilter={d} />
      ))}
    </div>
  );
};

export default SearchTag;
