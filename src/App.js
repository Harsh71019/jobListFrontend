import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ListJobs from "./components/ListJobs";
import { InfoProvider } from "./context/InfoContext";
import { SortProvider } from "./context/SortContext";

function App() {
  return (
    <InfoProvider>
      <SortProvider>
        <div className="App">
          <div className="appHeader" />
          <div className="appBody">
            <SearchBar />
            <ListJobs />
          </div>
        </div>
      </SortProvider>
    </InfoProvider>
  );
}

export default App;
