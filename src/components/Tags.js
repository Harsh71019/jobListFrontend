import React from "react";

const Tags = ({ jobs }) => {
  console.log(jobs.tools);
  return (
    <div>
      {jobs.tools}
    </div>
  );
};

export default Tags;
