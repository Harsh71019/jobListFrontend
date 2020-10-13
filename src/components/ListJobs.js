import React, { useEffect } from "react";
import "./ListJobs.css";
import Jobs from "../data.json";
import JobCard from "./JobCard";

const ListJobs = () => {
  useEffect(() => {
    console.log(Jobs);
  });
  return (
    <div>
      {Jobs.map((job) => (
        <JobCard jobs={job} key={job.id} />
      ))}
    </div>
  );
};

export default ListJobs;
