import React from "react";
import "./App.css";
import ListJobs from "./components/ListJobs";

function App() {
  return (
    <div className="App">
      <div className="appHeader" />
      <div className="appBody">
        <ListJobs />
      </div>
    </div>
  );
}

export default App;
