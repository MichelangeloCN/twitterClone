import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MobileNavBar from "./Components/MobileNavBar";
import RightSidebar from "./Components/RightSidebar";
import TweetCompose from "./Components/TweetCompose";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import tweets from "./tweets";
import PageGap from "./Components/PageGap";

// As you make components you can replace the div's with the correct className

function App() {
  const [tweetList, setTweetList] = useState(tweets);
  const [userProfile] = useState({
    profile: "",
    userName: "Michealangelo",
    handle: "@Michealangelo",
  });

  const addTweet = (timeStamp, body) => {
    const liveTweet = {
      id: 100,
      profile: userProfile.profile,
      userName: userProfile.userName,
      handle: userProfile.handle,
      timeStamp,
      body,
      interactionStats: {
        comments: 0,
        retweets: 0,
        likes: 0,
      },
      attachment: null,
    };

    setTweetList([liveTweet, ...tweetList]);
  };
  return (
    <div className="App">
      <div className="leftSideBar">
        <Navbar />
      </div>
      <div className="centralSection">
        <Header />
        <TweetCompose tweetFunction={addTweet} />
        <PageGap />
        <Feed tweetList={tweetList} />
        <MobileNavBar />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
