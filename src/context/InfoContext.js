import React, { createContext } from "react";
import { fetchData } from "./api/api";

let InfoContext;

const { Provider, Consumer } = (InfoContext = createContext(fetchData));

function InfoProvider(props) {
  return <Provider value={fetchData}>{props.children}</Provider>;
}

export { InfoContext, InfoProvider, Consumer as DataConsumer };
