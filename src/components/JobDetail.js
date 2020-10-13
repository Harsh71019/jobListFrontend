import React from "react";
import "./JobDetail.css"

const JobDetail = ({ jobs }) => {
  return (
    <div className="jobDescriptionContainer">
      <div className="companyImage">
        <img src={jobs.logo} alt={jobs.company} />
      </div>
      <div className="jobInfo">
        <div className="row">
          <div className="companyName">{jobs.company}</div>
          {jobs.new && <div className="jobNew">{"new!"}</div>}
          {jobs.featured && <div className="jobFeatured">{"featured"}</div>}
        </div>
        <div className="row position">{jobs.position}</div>
        <div className="row">
          <div className="jobDetails">{jobs.postedAt}</div>
          <div className="separate" />
          <div className="jobDetails">{jobs.contract}</div>
          <div className="separate" />
          <div className="jobDetails">{jobs.location}</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
