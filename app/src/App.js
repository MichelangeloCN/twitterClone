import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MobileNavBar from "./Components/MobileNavBar";
import RightSidebar from "./Components/RightSidebar";
import TweetCompose from "./Components/TweetCompose";
import Header from "./Components/Header";
import Feed from "./Components/Feed";

// As you make components you can replace the div's with the correct className

function App() {
  return (
    <div className="App">
      <div className="leftSideBar">
        <Navbar />
      </div>
      <div className="centralSection">
        <Header />
        <TweetCompose />
        <Feed />
        <MobileNavBar />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
