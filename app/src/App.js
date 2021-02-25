import React from "react";
import "./App.css";
import InteractionBar from "./Components/InteractionBar";
import MobileNavBar from "./Components/MobileNavBar";
import RightSidebar from './Components/RightSidebar';
import TweetCompose from "./Components/TweetCompose"
import Header from "./Components/Header";
import Feed from "./Components/Feed";

// As you make components you can replace the div's with the correct className

function App() {
  return (
    <div className="App">
      <Header />
      <InteractionBar />
      <MobileNavBar />
      <div className="leftSideBar">
        <div className="NavBar" />
      </div>
      <div className="centralSection">
        <Header />
        <TweetCompose />
        <feed />
        <MobileNavbar />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
