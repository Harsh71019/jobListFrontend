import React from "react";
import "./JobCard.css";
import JobDetail from "./JobDetail";
import SearchTag from "./SearchTag";

const JobCard = ({ jobs }) => {
  return (
    <div className={`jobCardContainer ${jobs.featured ? "featured" : ""}`}>
      <div className="jobDetails">
        <JobDetail jobs={jobs} />
      </div>
      <div className="searchTags">
        <SearchTag jobs={jobs} />
      </div>
    </div>
  );
};

export default JobCard;
