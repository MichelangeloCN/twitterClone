import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Feed from "./Components/Feed";

// As you make components you can replace the div's with the correct className

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
