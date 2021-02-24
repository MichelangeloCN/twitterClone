import React from "react";
import "./App.css";
import RightSidebar from './Components/RightSidebar';
import TweetCompose from "./Components/TweetCompose"
import Header from "./Components/Header";
import Feed from "./Components/Feed";

// As you make components you can replace the div's with the correct className

function App() {
  return (
    <div className="App">
        <Header />
      <div className="centralSection">
      </div>
        <div className="NavBar" />
      <div className="leftSideBar">
        <div className="TweetCompose" />
        <TweetCompose />
        <Feed />
      <RightSidebar />
    </div>
  );
}

export default App;
