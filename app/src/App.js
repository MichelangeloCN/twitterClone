import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="App">
      <div className="leftSideBar">
        <div className="NavBar" />
      </div>
      <div className="centralSection">
        <Header />
        <div className="TweetCompose" />
        <Feed />
      </div>
      <div className="rightSideBar">
        <div className="searchBar" />
        <div className="WhatsHappening" />
        <div className="WhoToFollow" />
      </div>
    </div>
  );
}

export default App;
