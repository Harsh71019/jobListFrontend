import React from "react";
import SearchTagFilter from "./SearchTagFilter";

const SearchTag = ({ jobs: { role, level, languages, tools } }) => {
  let jobFilters = [role, level, ...(languages || []), ...(tools || [])];

  return (
    <div className="jobFilterSectionContainer">
      {jobFilters.map((f, index) => (
        <SearchTagFilter key={index} jobFilter={f} />
      ))}
    </div>
  );
};

export default SearchTag;
