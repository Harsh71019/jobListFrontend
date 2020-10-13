import React, { createContext, useState } from "react";

let SortContext;

const { Provider, Consumer } = (SortContext = createContext());

function SortProvider(props) {
  const [sorts, setSort] = useState([]);
  const onAddSort = (sort) => {
    if (sorts.indexOf(sort) >= 0) return;
    setSort([...sorts, sort]);
  };

  const onRemoveSort = (sort) => {
    if (sorts.indexOf(sort) < 0) return;
    setSort(sorts.filter((d) => d !== sort));
  };
  const onClearSorts = () => {
    setSort([]);
  };
  return (
    <Provider
      value={{
        sorts,
        onAddSort,
        onRemoveSort,
        onClearSorts,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { SortContext, SortProvider, Consumer as SortConsumer };
