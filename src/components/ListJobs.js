import React, { useEffect, useState, useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import { SortContext } from "../context/SortContext";
import JobCard from "./JobCard";
import defaultData from "../context/api/data/data.json";

function ListJobs(onAddSort) {
  const [data, setData] = useState(defaultData);
  const fetchData = useContext(InfoContext);
  console.log(fetchData())
  const { sorts } = useContext(SortContext);
  console.log(sorts)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(sorts);
      setData(result);
    };
    getData();
  }, [sorts, fetchData]);
  return (
    <div>
      {data.map((job) => (
        <JobCard jobs={job} key={job.id} onAddSort={onAddSort} />
      ))}
    </div>
  );
}

export default ListJobs;
