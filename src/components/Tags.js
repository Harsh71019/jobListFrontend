import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import "./Tags.css";

const Tags = ({ sort }) => {
  const { onRemoveSort } = useContext(SortContext);
  return (
    <div className="Tags">
      <div className="TagsLabel">{sort}</div>
      <div className="TagsRemoveButton" onClick={() => onRemoveSort(sort)}>
        <img
          height="14"
          width="14"
          src={"/images/icon-remove.svg"}
          alt={"Remove Sort"}
        />
      </div>
    </div>
  );
};

export default Tags;
